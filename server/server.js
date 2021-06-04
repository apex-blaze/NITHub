require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");

const app = express();
app.use("/", express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.use(
//   session({
//     secret: "ABCDEF",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: process.env.CLIENT_ID,
//       clientSecret: process.env.CLIENT_SECRET,
//       callbackURL: "http://localhost:3000/auth/google/dashboard",
//       userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
//     },
//     (accessToken, refreshToken, profile, cb) => {}
//   )
// );

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
