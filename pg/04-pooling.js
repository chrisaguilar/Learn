const { Pool } = require('pg');
const logger = require('winston');

async function main() {
    try {
        const pool = new Pool();

        pool.on('error', (err, client) => {
            logger.error('Unexpected error on idle client', err);
            process.exit(-1);
        });

        const client = await pool.connect();
        const res = await client.query('SELECT * FROM users WHERE id = $1;', [1]);

        logger.info('User:', res.rows[0]);

        await client.release();
        await pool.end();

    } catch (e) {
        logger.error(e.stack);
        throw new Error(e);
    }
}

main();
