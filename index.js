const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');
const  route  = require('./routes.js');
const db = require('./configdb.js');

const app = express();
const port = 3001;

// Middleware untuk menguraikan payload JSON dari webhook
app.use(bodyParser.json());

// Endpoint untuk menangani webhook dari GitHub

//tes



app.get('/users', async (req, res) => {
  try {
      const { rows } = await db.query('SELECT * FROM "user"');
      res.json(rows);
  } catch (err) {
      console.error('Error:', err);
      res.status(500).send('Error fetching users.');
  }
});

app.use(route)
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

