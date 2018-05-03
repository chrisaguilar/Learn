const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../db');

passport.use(
    'local-login',
    new LocalStrategy(function(username, password, cb) {
        db.users.findByUsername(username, function(err, user) {
            if (err) return cb(err);
            if (!user) return cb(null, false);
            if (user.password != password) return cb(null, false);
            return cb(null, user);
        });
    })
);

passport.use(
    'local-signup',
    new LocalStrategy(function(username, password, cb) {
        db.users.findByUsername(username, function (err, user) {});
    })
)

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function(err, user) {
        if (err) return cb(err);
        cb(null, user);
    });
});

module.exports = passport;
