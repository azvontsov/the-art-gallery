// require our dependencies
const indexRouter = require("express").Router();

// define router/controller actions
indexRouter.get("/", (req, res) => {
  req.session.destroy(() => {
    console.log(req.session);
    res.render("home.ejs");
  });
});

// export the router/controller object
module.exports = indexRouter;
