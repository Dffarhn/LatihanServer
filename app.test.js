const request = require('supertest');
const express = require('express');
const route = require('./routes.js'); // Import your router

const app = express();
app.use('/', route); // Mount your router in the Express app

describe('Test Express Router', () => {
  it('should respond with "halo guys" on GET /sapa', async () => {
    const response = await request(app).get('/sapa');
    expect(response.status).toBe(200);
    expect(response.text).toBe('halo guys');
  });

  it('should respond with "dapa rehann mengganti dapa ganteng betul!" on GET /salam', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("dapa rehann mengganti dapa ganteng betul!");
  });
});
