const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');


const app = express();
const port = 3001;

// Middleware untuk menguraikan payload JSON dari webhook
app.use(bodyParser.json());

// Endpoint untuk menangani webhook dari GitHub

app.get('/sapa',(req, res) => {

    res.send("halo guys kalian kusapa")
})
// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('dapa rehann mengganti dapa ganteng betul!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
