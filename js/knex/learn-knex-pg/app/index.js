const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

module.exports = app;
