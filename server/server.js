// ----------------------------- Modules/Packages ---------------------------------------

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const fileUpload = require("express-fileupload");
const passportLocalMongoose = require("passport-local-mongoose");
const cookieParser = require("cookie-parser");
const findOrCreate = require("mongoose-findorcreate");
const email = require("./email");

const app = express();

// ----------------------------------  Middlewares -------------------------------------------

app.use("/", express.static("public"));
app.use(
  cors({
    origin:
      process.env.NODE_ENV !== "development"
        ? "https://nithub.netlify.app"
        : "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: "ABCDEF",
    resave: false,
    saveUninitialized: false,
    // cookie: {},
  })
);

app.use(cookieParser("ABCDEF"));

app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());

// ---------------------------------- DataBase Connection/Schemas --------------------------------------

mongoose.connect(process.env.MONGODB_URI, {
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
  year: String,
  username: String,
  avatar: String,
});

const facultySchema = new mongoose.Schema({
  fname: String,
  lname: String,
  password: String,
  dept: String,
  username: String,
  avatar: String,
});

const noticeSchema = new mongoose.Schema({
  title: String,
  description: String,
  pdf: String,
  type: String,
  date: String,
  branchtype: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);
facultySchema.plugin(passportLocalMongoose);
facultySchema.plugin(findOrCreate);

const User = new mongoose.model("User", userSchema);
const Notice = new mongoose.model("Notice", noticeSchema);
const Faculty = new mongoose.model("Faculty", facultySchema);

passport.use("user-local", User.createStrategy()); // local strat
passport.use("faculty-local", Faculty.createStrategy()); // local strat

// ------------------------------------------- Cookie/Sessions -----------------------------------------

passport.serializeUser(function (user, done) {
  // console.log(user.username);
  done(null, user.username);
});

passport.deserializeUser(function (id, done) {
  console.log(id);
  if (id.username.toString().includes("@")) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  } else {
    Faculty.findById(id, function (err, user) {
      done(err, user);
    });
  }
});

// ------------------------------------------ All Routes ------------------------------------------------

app.get("/", function (req, res) {
  res.send("Backend is working fine!!");
});

app.get("/dashboard", function (req, res) {
  if (req.isAuthenticated()) {
    res.send("He is authenticated");
  } else {
    res.send("Not authenticated");
  }
});
let brnchtype = "";

app.post("/notices", function (req, res) {
  console.log(req.body);
  let file = new Notice({
    title: req.body.title,
    description: req.body.description,
    pdf: req.files.pdf.data.toString("base64"),
    type: req.body.type,
    date: req.body.date,
    branchtype: req.body.branchtype,
  });
  file.save(function (err, notice) {
    if (err) console.log(err);
    else {
      //successfully saved notice in DB

      async function fetchUsers() {
        let response = await User.find();

        response = response?.map((user) => {
          return user.username;
        }); // response is array of all users eamils

        email.newUserMail(response, notice);
      }
      fetchUsers();
    }
  });
  res.send("Ok thnx");
});

app.post(
  "/login/faculty",
  passport.authenticate("faculty-local"),
  function (req, res) {
    facult = req.body.username;
    Faculty.find({}, function (err, faculty) {
      if (err) {
        console.log(err);
      } else {
        async function fetchFaculty() {
          const sort = { _id: "desc" };
          const response = await Faculty.find({ username: facult }, null, {
            sort: sort,
          });
          brnchtype = response[0].dept;
        }
        fetchFaculty();
      }
    });
    // console.log(facult);
    const faculty = {
      username: req.body.username,
      password: req.body.password,
    };
    req.login(faculty, function (err) {
      if (err) {
        console.log(err);
      } else {
        res.send("Login Successful");
      }
    });
  }
);
let usern = "";
app.post("/login", passport.authenticate("user-local"), function (req, res) {
  usern = req.body.username;
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      async function fetchUsers() {
        const sort = { _id: "desc" };
        const response = await User.find({ username: usern }, null, {
          sort: sort,
        });
        brnchtype = response[0].branch;
      }
      fetchUsers();
    }
  });
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
let facult = "";
app.post("/register/faculty", function (req, res) {
  facult = req.body.username;
  const newFaculty = {
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    dept: req.body.department,
    avatar: req.body.avatar,
  };
  Faculty.register(newFaculty, req.body.password, function (err, faculty) {
    if (err) {
      console.log(err);
      res.send("Not registered");
    } else {
      passport.authenticate("faculty-local")(req, res, function () {
        res.send("Registered");
      });
    }
  });
});

app.get("/register/faculty", function (req, res) {
  Faculty.find({}, function (err, faculty) {
    if (err) {
      console.log(err);
    } else {
      async function fetchFaculty() {
        const sort = { _id: "desc" };
        const response = await Faculty.find({ username: facult }, null, {
          sort: sort,
        });
        res.send(response);
      }
      fetchFaculty();
    }
  });
});
app.post("/register", function (req, res) {
  usern = req.body.username;
  brnchtype = req.body.branch;
  // console.log(req.body);
  const newUser = new User({
    username: req.body.username,
    fname: req.body.fname,
    lname: req.body.lname,
    rollno: req.body.rollno,
    branch: req.body.branch,
    year: req.body.year,
    avatar: req.body.avatar,
  });
  async function alreadyRegistered(username) {
    const response = await User.findOne({ username: username });
    if (response?.username === req.body.username) res.send("duplicate");
    else {
      User.register(newUser, req.body.password, function (err, user) {
        if (err) {
          console.log(err);
          res.send("Registration failed!!");
        } else {
          passport.authenticate("user-local")(req, res, function () {
            res.send("Registered Successfully");
          });
        }
      });
    }
  }
  alreadyRegistered(req.body.username);
});
app.get("/register", function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      async function fetchUsers() {
        const sort = { _id: "desc" };
        const response = await User.find({ username: usern }, null, {
          sort: sort,
        });
        res.send(response);
      }
      fetchUsers();
    }
  });
});

// app.get("/user", function (req, res) {
//   console.log(req.user);
//   res.send(req.user);
// });

app.get("/logout", function (req, res) {
  facult = "";
  usern = "";
  req.logout();
  res.send("Logout Successful");
});
app.post("/filter", function (req, res) {
  brnchtype = req.body.branchtype;
});
app.get("/notices", function (req, res) {
  Notice.find({}, function (err, notice) {
    if (err) {
      console.log(err);
    } else {
      async function fetchNotices() {
        const sort = { _id: "desc" };
        const response = await Notice.find({ branchtype: brnchtype }, null, {
          sort: sort,
        });
        const respons = await Notice.find({ branchtype: "all" }, null, {
          sort: sort,
        });
        const merged = response.concat(respons);
        res.send(merged);
      }
      fetchNotices();
    }
  });
});
// -------------------------------------- Server Initiation --------------------------------------

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
