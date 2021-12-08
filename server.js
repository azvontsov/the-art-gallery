// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const paintingsController = require("./controllers/paintings");

const indexController = require("./controllers/index");
const usersController = require("./controllers/users");

// Initialize app
const app = express();

// Configure settings
require("dotenv").config();

const { DATABASE_URL, PORT, SECRET } = process.env;

// Database Connection
mongoose.connect(DATABASE_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// mount middleware
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(methodOverride("_method"));

app.use(morgan("dev")); // HTTP logger middleware - it logs https messages to the console
app.use(
  session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// mount routes
app.use("/paintings", paintingsController);
app.use("/", indexController);
app.use("/", usersController);

app.get("/", (req, res) => {
  res.redirect("/");
});

// Listener

app.listen(PORT, () => {
  console.log(`server is listening on port: ${PORT}`);
});

// console.log(module)
