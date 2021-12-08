const usersRouter = require("express").Router();
const User = require("../models/user");

const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

usersRouter.get("/login", (req, res) => {
  res.render("login.ejs", { err: "" });
});

usersRouter.post("/login", (req, res) => {
  // step 1 - find the user in the database by their email/username
  User.findOne({ email: req.body.email }, (err, foundUser) => {
    // step 1.1 - if the user is not found, respond with a error saying invalid credentials
    if (!foundUser)
      return res.render("login.ejs", { err: "invalid Login or Password" });
    // step 2 - assuming we've found user, now we compare passwords - plain text - password digest
    if (!bcrypt.compareSync(req.body.password, foundUser.password)) {
      // step 2.1 - if there is not match, respond with a error saying invalid credentials
      return res.render("login.ejs", { err: "invalid login or password" });
    }
    // step 3 assuming there is a match, we create a session and redirect to dashboard
    req.session.user = foundUser._id;
    res.redirect("/paintings");
  });
});

usersRouter.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

usersRouter.post("/signup", (req, res) => {
  const hash = bcrypt.hashSync(
    req.body.password,
    bcrypt.genSaltSync(SALT_ROUNDS)
  );
  req.body.password = hash;
  User.create(req.body, (error, user) => {
    req.session.user = user._id; // this is a login
    res.redirect("/dashboard"); // send the logged in user to a private space in the site
  });
});

usersRouter.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

usersRouter.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  User.findById(req.session.user, (err, user) => {
    res.render("dashboard.ejs", { user });
  });
});

module.exports = usersRouter;
