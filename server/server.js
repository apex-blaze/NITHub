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

mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  password: String,
  branch: String,
  rollno: String,
  year: Number,
  username: String,
  avatar: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);

passport.use(User.createStrategy()); // local strat

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});


app.get("/dashboard", function (req, res) {
  if (req.isAuthenticated()) {
    res.send("He is authenticated");
  } else {
    res.send("Not authenticated");
  }
});

app.get("/notices",function(req,res){

})

app.post("/notices",function(req,res){
  console.log(req.body.formData);
  res.send("Ok thnx");
})

app.post("/login", passport.authenticate("local"), function (req, res) {
  const user = {
    username: req.body.username,
    password: req.body.password,
  };

  req.login(user, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("show him the dashboard");
    }
  });
});

app.post("/register", function (req, res) {
  const newUser = {
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    rollno: req.body.rollno,
    branch: req.body.branch,
    year: req.body.year,
    avatar: req.body.avatar,
  };
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      res.send("Register ni hua!!");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.send("Register ho gya!!");
      });
    }
  });
});

app.get("/logout", function (req, res) {
  req.logout();
  console.log("/ route pe bhejo launde ko");
});

const port = process.env.PORT || 5050;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
