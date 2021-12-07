const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define the schema
const transformArtwork = new Schema({
  name: String,
  title: String,
  life: String,
  date: Number,
  dimensions: String,
  image: String,
  medium: String,
});

// export the model to be accessed in server.js
const Painting = mongoose.model("Painting", transformArtwork);
module.exports = Painting;
