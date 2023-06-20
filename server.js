const path = require("path");
const express = require("express");
const axios = require("axios");
const app = express()
require('dotenv').config()
require('./config/mongoose')
app.use(express.static('public'));

const recordsRoutes = require('./routes/recordsRoutes')
// database connection// const mongoose = require('mongoose');
// const Pokemon = require('./models/pokemon');
// const pokemonRoutes = require("./routes/pokemonRoutes")
app.set("view engine", "ejs"); // register view engine
app.set("views", path.join(__dirname, "/myviews"));
// app.use('/', pokemonRoutes);
// const router = express.Router();

// app.listen(3000);
// const dittoInfo = async () => {
//   const response = {
//     method: "get",
//     url: "https://pokeapi.co/api/v2/pokemon/ditto",
//   };
//   let res = await axios(response);
//   return res.data;
// };
// const squirtleInfo = async () => {
//   const response = {
//     method: "get",
//     url: "https://pokeapi.co/api/v2/pokemon/squirtle",
//   };
//   let res = await axios(response);
//   return res.data;
// };
// const pikachuInfo = async () => {
//   const response = {
//     method: "get",
//     url: "https://pokeapi.co/api/v2/pokemon/pikachu",
//   };
//   let res = await axios(response);
//   return res.data;
// };

// app.get("/", async (req, res) => {
//   const ditto = await (dittoInfo());
//   const squirtle = await (squirtleInfo());
//   const pikachu = await (pikachuInfo());
//   res.render("pokemons", { ditto, squirtle, pikachu });
// });
app.use('/', recordsRoutes )

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server running on port ${process.env.SERVER_PORT}`)
  console.log(`http://localhost:${process.env.SERVER_PORT}`)
})