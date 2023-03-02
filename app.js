const path = require("path");
const express = require("express");
const axios = require("axios");
const app = express();
// const mongoose = require('mongoose');
// const Pokemon = require('./models/pokemon');
// const pokemonRoutes = require("./routes/pokemonRoutes")
app.set("view engine", "ejs"); // register view engine
app.set("views", path.join(__dirname, "/myviews"));
// app.use('/', pokemonRoutes);
// const router = express.Router();

app.listen(3000);
const dittoInfo = async () => {
  const response = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/ditto",
  };
  let res = await axios(response);
  return res.data;
};
const squirtleInfo = async () => {
  const response = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/squirtle",
  };
  let res = await axios(response);
  return res.data;
};
const pikachuInfo = async () => {
  const response = {
    method: "get",
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
  };
  let res = await axios(response);
  return res.data;
};

app.get("/", async (req, res) => {
  const ditto = await (dittoInfo());
  const squirtle = await (squirtleInfo());
  const pikachu = await (pikachuInfo());

  res.render("pokemons", { ditto, squirtle, pikachu });
});
// app.get('/new',(req, res)=>{res.send(pikachu)})

// const poke_index = (req, res) => {
//     getPokeInfo()
//       .then(() => {
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//   poke_index();
// // connect to mongodb
// const dbURI ='mongodb+srv://yafa_web2:12112858@nodejs.39b5m5q.mongodb.net/?retryWrites=true&w=majority';
// mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology: true })
//     .then(result => app.listen(3000))
//     .catch(err=>console.log(err))
