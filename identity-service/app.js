const express = require('express')
const helmet = require("helmet");
const compression = require("compression");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((user, cb) => {
    cb(null, user);
});


// Google Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_API_KEY,
    callbackURL: process.env.GOOGLE_REDIRECTa
},
    (accessToken, refreshToken, profile, cb) => {
        const user = { ...profile };
        return cb(null, profile);
    }));


app = express()

app.use(express.json({ extended: false, limit: "5mb" }));
app.use(helmet())
app.use(compression())
app.use(passport.initialize());

app.get("/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));

// app.get("/google", [], (req, res) => {
//     res.status(200).json({ message: 'okay' })
// });

app.get("/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        res.redirect("/profile");
    });


module.exports = app