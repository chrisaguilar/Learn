const path = require('path');

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/todos_test',
        migrations: {
            directory: path.join(__dirname, 'app', 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'app', 'db', 'seeds')
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        migrations: {
            directory: path.join(__dirname, 'app', 'db', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'app', 'db', 'seeds')
        }
    }
};
