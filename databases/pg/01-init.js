const { Client } = require('pg');

const client = new Client();

async function main() {
    try {
        await client.connect();

        const res = await client.query('SELECT $1::TEXT AS message', ['Hello, World!']);

        console.log(res.rows[0].message);

        await client.end();
    } catch (e) {
        throw new Error(e);

    }
}

main();
