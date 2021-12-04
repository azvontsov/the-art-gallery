// require dependecies
const express = require('express')
// create a route object
const paintingsRouter = express.Router();
const Painting = require('../models/painting');
// list our router actions


// Mount routes

// Seed route
paintingsRouter.get('/seed', async (req, res) => {
    const data = [{
        rating: 21,
        name: "'Boss of the Triangle World'",
        artist: "Michael Z",
        life: "",
        year: 2021,
        medium: "Procreate",
        style: "Neo-expressionism",
        dimensions: "1980 px × 1024 px",
        owner: "Anton Z",
        price: 200,
        img: "https://imgur.com/LX6Lmyy.png",
        sold: true,
        },
    {
        rating: 20,
        name: "'Untitled'",
        artist: "Jean-Michel Basquiat",
        life: "",
        year: 1982,
        medium: "Acrylic, spray paint and oilstick on canvas",
        style: "Neo-expressionism",
        dimensions: "183.2 cm × 173 cm (72 1/8 in × 68 1/8 in)",
        owner: "Yusaku Maezawa",
        price: 110.5,
        img: "https://kuow-prod.imgix.net/store/22b1c6df10cf4790544b6b8087d76435.jpg?auto=format&dpr=1&crop=faces&fit=crop&fill=false&w=1400&h=1486.3113897596656",
        sold: true,
        },
    {
        rating: 19,
        name: "'Reclining Nude With Blue Cushion'",
        artist: "Amedeo Modigliani",
        life: "(1881-1973)",
        year: 1916,
        medium: "Oil on canvas",
        style: "Expressionism",
        dimensions: "60.1 cm × 92.1 cm (23.7 in × 36.3 in)",
        owner: "Dmitry Rybolovlev",
        price: 118,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amedeo_Modigliani_Nu_Couch%C3%A9_au_coussin_Bleu.jpg/1280px-Amedeo_Modigliani_Nu_Couch%C3%A9_au_coussin_Bleu.jpg",
        sold: true,
        },
    {
        rating: 18,
        name: "'The Scream'",
        artist: "Edvard Munch",
        life: "(1881-1973)",
        year: 1893,
        medium: "Oil, tempera, pastel and crayon on cardboard",
        style: "Proto-Expressionism",
        dimensions: "91 cm × 73.5 cm (36 in × 28.9 in)",
        owner: "National Gallery and Munch Museum, Oslo, Norway",
        price: 119.9,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
        sold: true,
        },
    {
        rating: 17,
        name: "'Portrait of Adele Bloch-Bauer I'",
        artist: "Gustav Klimt",
        life: "(1881-1973)",
        year: 1907,
        medium: "Oil, silver and gold on canvas",
        style: "Art Nouveau (Modern)",
        dimensions: "138 cm × 138 cm (54 in × 54 in)",
        owner: "Neue Galerie, New York",
        price: 5,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/84/Gustav_Klimt_046.jpg",
        sold: true,
        },
    {
        rating: 16,
        name: "'Woman III'",
        artist: "Willem de Kooning",
        life: "(1881-1973)",
        year: 1953,
        medium: "Oil on canvas",
        style: "Abstract expressionism",
        dimensions: "172.7 cm × 123.2 cm (68 in × 48.5 in)",
        owner: "Private collection of Steven A. Cohen",
        price: 137.5,
        img: "http://artpaintingartist.org/wp-content/uploads/2014/01/Woman-III-by-Willem-de-Kooning.jpg",
        sold: true,
        },
    {
        rating: 15,
        name: "'No. 5, 1948'",
        artist: "Jackson Pollock",
        life: "(1881-1973)",
        year: 1948,
        medium: "Oil on fiberboard",
        style: "Abstract expressionism",
        dimensions: "2.4 m × 1.2 m (8 ft × 4 ft)",
        owner: "Private collection, New York",
        price: 140,
        img: "https://www.artalistic.com/en/media/blog/images/Jackson_Pollock_No.5.jpg",
        sold: true,
        },
    {
        rating: 14,
        name: "'Three Studies of Lucian Freud'",
        artist: "Francis Bacon",
        life: "(1881-1973)",
        year: 1969,
        medium: "Oil on canvas",
        style: "Expressionism ",
        dimensions: "198 cm × 147.5 cm (78 in × 58 in); for each canvas",
        owner: "Elaine Wynn",
        price: 142.4,
        img: "https://upload.wikimedia.org/wikipedia/en/3/31/Three_Studies_of_Lucian_Freud.jpg",
        sold: true,
        },
    {
        rating: 13,
        name: "'Portrait of Adele Bloch-Bauer II'",
        artist: "Gustav Klimt",
        life: "(1881-1973)",
        year: 1912,
        medium: "Oil on canvas",
        style: "Art Nouveau (Modern)",
        dimensions: "190 cm × 120 cm (75 in × 47 in)",
        owner: "Private collection",
        price: 150,
        img: "https://news.artnet.com/app/news-upload/2016/10/7.-Klimt-Portrait-of-ABBII-1912-639x1024.jpg",
        sold: true,
        },
    {
        rating: 12,
        name: "'A dream'",
        artist: "Pablo Picasso",
        life: "(1881-1973)",
        year: 1932,
        medium: "Oil on canvas",
        style: "Cubism",
        dimensions: "130 cm × 97 cm (51 in × 38 in)",
        owner: "Private collection of Steven A. Cohen",
        price: 155,
        img: "https://www.francetoday.com/wp-content/uploads/2021/10/Marie-Therese-Le-Reve-1932-by-Picasso.-Photograph-Succession-PicassoDACS-London-2018-min.jpg",
        sold: true,
        },
    {
        rating: 11,
        name: "'Nu couché (sur le côté gauche)'",
        artist: "Amedeo Modigliani",
        life: "(1881-1973)",
        year: 1917,
        medium: "Oil on canvas",
        style: "Expressionism",
        dimensions: "84 cm x 146 cm (33 in × 57 in)",
        owner: "Private collection",
        price: 157.2,
        img: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Amedeo_Modigliani_014.jpg",
        sold: true,
        },
    {
        rating: 10,
        name: "'Masterpiece'",
        artist: "Roy Lichtenstein",
        life: "(1881-1973)",
        year: 1962,
        medium: "Oil on canvas",
        style: "Pop art",
        dimensions: "137 cm × 137 cm (54 in × 54 in)",
        owner: "Private collection",
        price: 165,
        img: "https://www.artdependence.com/media/8663/masterpiece_1962.jpg?width=593&height=590",
        sold: true,
        },
    {
        rating: 9,
        name: "'Nu couché'",
        artist: "Amedeo Modigliani",
        life: "(1881-1973)",
        year: 1918,
        medium: "Oil on canvas",
        style: "Expressionism",
        dimensions: "59.9 cm x 92 cm (23 in x 36 in)",
        owner: "Liu Yiqian",
        price: 170.4,
        img: "https://media.vanityfair.com/photos/564205d1ffe4c2a35a2aa6e9/master/w_1280,c_limit/modigliani-painting-nu-couche.png",
        sold: true,
        },
    {
        rating: 8,
        name: "'Les Femmes d’ Alger (“Version O”)'",
        artist: "Pablo Picasso",
        life: "(1881-1973)",
        year: 1955,
        medium: "Oil on canvas",
        style: "Cubism",
        dimensions: "114 cm × 146.4 cm (45 in × 57.6 in)",
        owner: "Hamad bin Jassim bin Jaber Al Thani",
        price: 179.4,
        img: "https://www.christies.com/media-library/images/features/articles/2015/04/23/picasso/picasso.jpg",
        sold: true,
        },
    {
        rating: 7,
        name: "'Pendant portraits of Maerten Soolmans and Oopjen Coppit'",
        artist: "Rembrandt",
        life: "(1881-1973)",
        year: 1634,
        medium: "Oil on canvas",
        style: "Baroque",
        dimensions: "209.5 cm × 135.5 cm (82.5 in × 53.3 in)",
        owner: "Private Collection, Rijksmuseum, Amsterdam, Netherlands",
        price: 180,
        img: "https://uploads4.wikiart.org/images/rembrandt/portrait-of-maerten-soolmans-1634.jpg",
        sold: true,
        },
    {
        rating: 6,
        name: "'No. 6 (Violet, Green and Red)'",
        artist: "Mark Rothko",
        life: "(1881-1973)",
        year: 1951,
        medium: "Oil on canvas",
        style: "Abstract Expressionism",
        dimensions: "24.5 in x 36 in",
        owner: "Private Collection",
        price: 186,
        img: "https://images.squarespace-cdn.com/content/v1/57a92ada2994caf02328b498/1603807366778-HCGP2OMZ6MIMUP5C1GRM/Mark+Rothko+No.+6++Violet%2C+Green+and+Red+1951.jpg?format=1500w",
        sold: true,
        },
    {
        rating: 5,
        name: "'Number 17A'",
        artist: "Jackson Pollock",
        life: "(1881-1973)",
        year: 1948,
        medium: "Oil paint on fiberboard",
        style: "Abstract Expressionism",
        dimensions: "44.1 x 34.1 inches (112 x 86.5 cm)",
        owner: "Private Collection",
        price: 200,
        img: "https://www.amlu.com/wp-content/uploads/2016/02/billionaire-ken-griffin-buys-two-contemporary-paintings-for-500m2.jpg",
        sold: true,
        },
    {
        rating: 4,
        name: "'Nafea Faa Ipoipo'",
        artist: "Paul Gauguin",
        life: "(1881-1973)",
        year: 1892,
        medium: "Oil on canvas",
        style: "Post Impressionism",
        dimensions: "101 x 77 cm (40 in × 30 in)",
        owner: "Private Collection",
        price: 210,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/61/Paul_Gauguin%2C_Nafea_Faa_Ipoipo%3F_1892%2C_oil_on_canvas%2C_101_x_77_cm.jpg",
        sold: true,
        },
    {
        rating: 3,
        name: "'The Card Players'",
        artist: "Paul Cézanne",
        life: "(1881-1973)",
        year: 1895,
        medium: "Oil on canvas",
        style: "Post Impressionism",
        dimensions: "101 x 77 cm (40 in × 30 in)",
        owner: "Musée d'Orsay",
        price: 250,
        img: "https://upload.wikimedia.org/wikipedia/commons/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
        sold: true,
        },
    {
        rating: 2,
        name: "'Interchange'",
        artist: "Willem de Kooning",
        life: "(1881-1973)",
        year: 1955,
        medium: "Oil on canvas",
        style: "Abstract Expressionism",
        dimensions: "200.7 cm × 175.3 cm (79.0 in × 69.0 in)",
        owner: "Private collection of Kenneth C. Griffin",
        price: 300,
        img: "https://upload.wikimedia.org/wikipedia/ru/8/8b/Interchange_1955_.jpg",
        sold: true,
        },
    {
        rating: 1,
        name: "'Salvator Mundi'",
        artist: "Leonardo da Vinci",
        life: "(1881-1973)",
        year: 1510,
        medium: "Oil on walnut panel",
        style: "High Renaissance ",
        dimensions: "45.4 cm × 65.6 cm (25.8 in × 19.2 in)",
        owner: "Mohammad bin Salman",
        price: 450.3,
        img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Leonardo_da_Vinci%2C_Salvator_Mundi%2C_c.1500%2C_oil_on_walnut%2C_45.4_%C3%97_65.6_cm.jpg",
        sold: true,
        },
        
    ];
    await Painting.deleteMany({});
    await Painting.create(data);
    res.redirect('/paintings');
})

// this destroy all paintings
paintingsRouter.get('/destroy-data', async (req, res) => {
    await Painting.deleteMany({});
    res.redirect('/paintings');
});

// Index route
 paintingsRouter.get('/', (req, res) => {
    Painting.find({}, (err, allPaintings) => {
        res.render('index.ejs', {
            paintings: allPaintings,
        });
    });
});

//New route
paintingsRouter.get("/new", (req, res) => {
    res.render("new.ejs")
});

// Delete route
paintingsRouter.delete('/:id', (req, res) => {
    Painting.findByIdAndRemove(req.params.id, (err, deletedPainting) => {
        res.redirect('/paintings');
    });
});
// Update
paintingsRouter.put("/:id", (req, res) => {
    console.log("editing painting", req.body, req.params.id);
    req.body.sold = !!req.body.sold; 
    Painting.findByIdAndUpdate(
        req.params.id,
        req.body, {
            new: true
        },
        (err, painting) => {
            // console.log(err);
            res.redirect(`/paintings`)
        });
});



// Create route
paintingsRouter.post("/", (req, res) => {
    if(req.body.sold === 'on') {
        req.body.sold = true;
    } else {
        req.body.sold = false;
    }
    Painting.create(req.body, (err, createdPainting) => {
        res.redirect('/paintings') // new stuff here
    });
});

// Edit route
paintingsRouter.get('/:id/edit', (req, res) => {
    Painting.findById(req.params.id, (err, foundPainting) => {
        res.render('edit.ejs', {
            painting: foundPainting,
        });
    });
});


// Show route
paintingsRouter.get('/:id', (req, res) => {
    Painting.findById(req.params.id, (err, foundPainting) => {
        res.render('show.ejs', {
            painting: foundPainting,
        });
    });
});
// exports the router object so that we require it in server.js

// Buy Route
paintingsRouter.post('/:id/buy', (req, res) => {
    Painting.findById(req.params.id, (err, foundPainting) => {
        if(foundPainting.qty) {
            foundPainting.qty -= 1
            foundPainting.save(() => {
                res.redirect(`/paintings/${foundPainting._id}`);
            });
        } else {
            res.redirect(`/paintings/${foundPainting._id}`);
        }
    });
});








module.exports = paintingsRouter;