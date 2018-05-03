const path = require('path');

const bodyParser = require('body-parser');
const { ensureLoggedIn } = require('connect-ensure-login');
const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const morgan = require('morgan');

const { passport } = require('./config');
const routes = require('./routes');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use(routes.views);

module.exports = app;
