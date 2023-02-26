const router = require("express").Router();
const session = require('express-session');

const passport = require('passport');
var userProfile;

router.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'SECRET' 
}));

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = 'our-google-client-id';
const GOOGLE_CLIENT_SECRET = 'our-google-client-secret';
passport.use(new GoogleStrategy({
    clientID: "587907665833-4na9ovvh50id11p5aiqtq7hula51dfau.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      // userProfile=profile.displayName+"/"+profile.emails[0].value;
      // console.log(userProfile);
      return done(null, profile);
  }
));
 
router.get('/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/auth/error'}),
  function(req, res) {
    console.log(req.user);
    // Successful authentication, redirect success.
    // res.send(req.user.displayName,req.user.emails[0].value);
    // res.redirect(`http://localhost:3000/registration/${req.user.displayName}/${req.user.emails[0].value}`);
  });

router.use(passport.initialize());
router.use(passport.session());

router.get('/success', (req, res) => res.send(userProfile));
router.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = router;