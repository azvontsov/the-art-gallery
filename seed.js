const axios = require("axios").default;
const clientID = "c25d934959503b1ea1a7";
const clientSecret = "f891221a8c9cc22b4bd33be14d0e1a28";
const apiUrl = "https://api.artsy.net/api/tokens/xapp_token";

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
    console.log(artworks.length);
  }

  return artworks;
};

getArtworks(100).then((artworks) =>
  console.log("got artworks", artworks.length)
);
