const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//define the schema
const paintingSchema = new Schema({
    rating: Number,
    name: String,
    artist: String,
    life: String,
    year: Number,
    medium: String,
    style: String,
    dimensions: String,
    owner: String,
    price: Number,
    img: String,
    sold: Boolean,
});

// export the model to be accessed in server.js
const Painting = mongoose.model('Painting', paintingSchema);
module.exports = Painting;