const { Pool, Client } = require('pg');

const { pg } = require('./config');
const { user, password, host, port, database } = pg;
const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

async function main() {
    let pool = new Pool();
    await pool.query('SELECT NOW();');
    await pool.end();

    let client = new Client();
    await client.connect();
    await client.query('SELECT NOW();');
    await client.end();

    pool = new Pool(pg);
    await pool.query('SELECT NOW();');
    await pool.end();

    client = new Client(pg);
    await client.connect();
    await client.query('SELECT NOW();');
    await client.end();

    pool = new Pool({ connectionString });
    await pool.query('SELECT NOW();');
    await pool.end();

    client = new Client({ connectionString });
    await client.connect();
    await client.query('SELECT NOW();');
    await client.end();
}

main();
