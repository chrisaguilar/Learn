const { ensureLoggedIn } = require('connect-ensure-login');
const express = require('express');

const { passport } = require('../config');

const router = express.Router();

router.route('/').get((req, res) => res.render('home', { user: req.user }));

router
    .route('/login')
    .get((req, res) => res.render('login'))
    .post(passport.authenticate('local-login', { failureRedirect: '/login' }), (req, res) => res.redirect('/'));

router.route('/profile').get(ensureLoggedIn(), (req, res) => res.render('profile', { user: req.user }));

module.exports = router;
