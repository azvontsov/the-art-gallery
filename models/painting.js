const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define the schema
const transformArtwork = new Schema({
  title: String,
  date: String,
  dimensions: String,
  image: String,
  medium: String,
  name: String,
  owner: String,
  category: String,
});

// export the model to be accessed in server.js
const Painting = mongoose.model("Painting", transformArtwork);
module.exports = Painting;
