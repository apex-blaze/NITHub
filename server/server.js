require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();

app.use("/", express.static("public"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "ABCDEF",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB", {useNewUrlParser: true});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  email:String,
  firstName: String,
  lastName:String,
  password: String,
  googleId: String,
  branch: String,
  rollNo: String,
  year: Number,
  secret: String
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy()); // local strat

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/dashboard",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo", // added due to G+ Sunset
  passReqToCallback: true
},
function(accessToken, refreshToken, profile, cb) {
  console.log(profile);

  User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return cb(err, user);
  });
}
));

app.get("/dashboard",function(req,res){
  if(req.isAuthenticated()){
    console.log("Show him the dashboard");
  }else{
    console.log("Jaakr Login Kar");
  }
})


// Google authenticates remotely
// app.get(
//   "/auth/google",
//   // console.log(56));
//     passport.authenticate("google", { scope: ["email", "profile"] }));
   //this route brings up the popup
app.get(
  "/auth/google",
  function(req,res){
    res.send("hello");
  }
)
// Local authentication thro'  "auth code"
app.get(
  "/auth/google/dashboard",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    // Successful authentication, redirect to secrets.
   console.log("Dashboard dikhao launde ko");
  }
);

app.get("/logout", function (req, res) {
  req.logout();
  console.log("/ route pe bhejo launde ko");
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
