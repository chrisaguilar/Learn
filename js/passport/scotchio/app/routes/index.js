module.exports = function(app, passport) {
    app.get('/', (req, res) => res.render('index', { title: 'Node Authentication | Home' }));

    app.get('/login', (req, res) =>
        res.render('login', { message: req.flash('loginMessage'), title: 'Node Authentication | Login' })
    );

    app.post(
        '/login',
        passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

    app.get('/signup', (req, res) =>
        res.render('signup', { message: req.flash('signupMessage'), title: 'Node Authentication | Signup' })
    );

    app.post(
        '/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/profile',
            failureRedirect: '/signup',
            failureFlash: true
        })
    );

    app.get('/profile', isLoggedIn, (req, res) => res.render('profile', { user: req.user }));

    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}
