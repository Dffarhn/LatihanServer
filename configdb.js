const { Pool } = require('pg');

const pool = new Pool({
    user: 'dradap',
    host: '192.168.1.2',
    database: 'firstdb',
    password: '@Dradap123',
    port: 5432, // Port default PostgreSQL
});

pool.on('error', (err, client) => {
    console.error('Error:', err);
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
