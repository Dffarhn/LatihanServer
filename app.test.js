const request = require('supertest');
const app = require('./index.js');

// Mock app.listen

describe('Test Express App', () => {
  it('should respond with "halo guys" on GET /sapa', async () => {
    const response = await request(app).get('/sapa');
    expect(response.status).toBe(200);
    expect(response.text).toBe('halo guys');
  });

  it('should respond with "dapa rehann mengganti dapa ganteng betul!" on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('dapa rehann mengganti dapa ganteng betul!');
  });

});

