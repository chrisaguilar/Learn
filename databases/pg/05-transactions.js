const { Pool } = require('pg');
const logger = require('winston');

async function main() {
    const pool = new Pool();
    const client = await pool.connect();

    pool.on('error', (err, client) => {
        logger.error('Unexpected error on idle client', err);
        process.exit(-1);
    });

    try {
        await client.query('BEGIN');
        const { rows } = await client.query('INSERT INTO users(name) VALUES($1) RETURNING id', ['kdevita'])
        const insertEmailText = 'UPDATE users SET email = $2 WHERE id = $1;';
        const insertEmailValues = [rows[0].id, 'kdevita18@gmail.com']
        await client.query(insertEmailText, insertEmailValues)
        await client.query('COMMIT')

    } catch (e) {
        await client.query('ROLLBACK;');
        logger.error(e.stack);
        throw new Error(e);

    } finally {
        client.release();
        await pool.end();
    }
}

main();
