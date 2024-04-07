const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const  route  = require('./routes.js');


const app = express();
const port = 3001;

// Middleware untuk menguraikan payload JSON dari webhook
app.use(bodyParser.json());

// Endpoint untuk menangani webhook dari GitHub

app.use(route)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

