// require dependecies
const express = require("express");
// create a route object
const paintingsRouter = express.Router();
const Painting = require("../models/painting");
// list our router actions

// Mount routes

// this destroy all paintings
paintingsRouter.get("/destroy-data", async (req, res) => {
  await Painting.deleteMany({});
  res.redirect("/paintings");
});

// Index route
paintingsRouter.get("/", (req, res) => {
  const pageSize = parseInt(req.query.pageSize || "20"); // limit
  const pageNum = parseInt(req.query.pageNum || "0"); // skip
  Painting.find(
    {},
    null,
    { limit: pageSize, skip: pageNum * pageSize },
    (err, allPaintings) => {
      const totalRecords = 100;
      const hasNextPage = (pageNum + 1) * pageSize < totalRecords; // TODO actually calculate this
      res.render("index.ejs", {
        paintings: allPaintings,
        pageNum,
        pageSize,
        hasNextPage,
      });
    }
  );
});

//New route
paintingsRouter.get("/new", (req, res) => {
  res.render("new.ejs");
});

// Delete route
paintingsRouter.delete("/:id", (req, res) => {
  Painting.findByIdAndRemove(req.params.id, (err, deletedPainting) => {
    res.redirect("/paintings");
  });
});
// Update
paintingsRouter.put("/:id", (req, res) => {
  console.log("editing painting", req.body, req.params.id);
  req.body.sold = !!req.body.sold;
  Painting.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    },
    (err, painting) => {
      // console.log(err);
      res.redirect(`/paintings`);
    }
  );
});

// Create route
paintingsRouter.post("/", (req, res) => {
  if (req.body.sold === "on") {
    req.body.sold = true;
  } else {
    req.body.sold = false;
  }
  Painting.create(req.body, (err, createdPainting) => {
    res.redirect("/paintings"); // new stuff here
  });
});

// Edit route
paintingsRouter.get("/:id/edit", (req, res) => {
  Painting.findById(req.params.id, (err, foundPainting) => {
    res.render("edit.ejs", {
      painting: foundPainting,
    });
  });
});

// Show route
paintingsRouter.get("/:id", (req, res) => {
  Painting.findById(req.params.id, (err, foundPainting) => {
    res.render("show.ejs", {
      painting: foundPainting,
    });
  });
});
// exports the router object so that we require it in server.js
module.exports = paintingsRouter;
