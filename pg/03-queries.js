const { Client } = require('pg');

async function main() {
    try {
        const client = new Client();
        await client.connect();

        let res;

        res = await client.query('SELECT NOW() AS now');
        console.log(res.rows[0]);

        let query;

        query = {
            text: 'INSERT INTO users(name, email) VALUES ($1, $2) RETURNING *;',
            values: ['chris', 'christopher.m.aguilar@gmail.com']
        }

        res = await client.query(query);
        console.log(res.rows[0]);

        query = {
            text: 'SELECT $1::text as first_name, $2::text as last_name',
            values: ['Chris', 'Aguilar'],
            rowMode: 'array',
        };

        res = await client.query(query);
        console.log(res.fields.map(f => f.name));
        console.log(res.rows[0]);


        await client.end();

    } catch (e) {
        console.error(e.stack);
        throw new Error(e);
    }
}

main();
