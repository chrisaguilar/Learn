const express = require('express');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => res.send('Hello from Node.js!\n'));

app.listen(PORT, HOST, () => console.log(`Listening on http://${HOST}:${PORT}`));
