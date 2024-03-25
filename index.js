const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// Middleware untuk menguraikan payload JSON dari webhook
app.use(bodyParser.json());

// Endpoint untuk menangani webhook dari GitHub
app.post('/deploy', (req, res) => {
    // Verifikasi bahwa request berasal dari GitHub
    const userAgent = req.headers['user-agent'];
    if (!userAgent || !userAgent.includes('GitHub-Hookshot')) {
        return res.status(403).send('Unauthorized');
    }

    // Jalankan skrip deployment
    exec('sh deploy.sh', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Deployment failed');
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return res.status(500).send('Deployment failed');
        }
        console.log(`Stdout: ${stdout}`);
        res.status(200).send('Deployment successful');
    });
});

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello, bis!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
