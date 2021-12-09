const mongoose = require("mongoose");
const axios = require("axios").default;
const clientID = "c25d934959503b1ea1a7";
const clientSecret = "f891221a8c9cc22b4bd33be14d0e1a28";
const apiUrl = "https://api.artsy.net/api/tokens/xapp_token";

const Painting = require("./models/painting");

const getToken = async () => {
  const res = await axios.post(apiUrl, {
    client_id: clientID,
    client_secret: clientSecret,
  });
  return res.data.token;
};

const artworksUrl = "https://api.artsy.net/api/artworks";

const getArtworks = async (limit) => {
  const artworks = [];

  const token = await getToken();
  const headers = { "X-Xapp-Token": token };
  const api = axios.create({
    headers,
  });

  let next = artworksUrl;
  while (artworks.length < limit) {
    const res = await api.get(next);
    artworks.push(...res.data._embedded.artworks);
    next = res.data._links.next.href;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  return artworks;
};

const transformArtwork = (artwork) => {
  const title = artwork.title;
  const date = artwork.date;
  const dimensions = artwork.dimensions.in.text;
  const image = artwork._links.image.href.replace("{image_version}", "larger");
  const medium = artwork.medium;
  const name = artwork.slug;
  const owner = artwork.collecting_institution;
  const category = artwork.category;
  // console.log(artwork);
  // TODO get the necessary data from the artwork object
  // TODO return artwork data in correct schema
  return {
    title,
    date,
    dimensions,
    image,
    medium,
    name,
    owner,
    category,
  };
};

// Configure settings
require("dotenv").config();

const { DATABASE_URL, PORT } = process.env;

// Database Connection
mongoose.connect(DATABASE_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

const loadArtworksIntoDb = (artworks) => {
  //connect to mongodb and write data
  Painting.collection.insertMany(artworks, () => mongoose.connection.close());
};

getArtworks(5).then((artworks) => {
  // transform artworks to correct schema
  const transformedArtworks = artworks.map(transformArtwork);

  // load artworks into mongodb
  loadArtworksIntoDb(transformedArtworks);
});
