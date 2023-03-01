const Pokemon = require("../models/pokemon");
const axios = require("axios");

const getPokeInfo = async () => {
    const response = {
        method: "get", 
        url: "https://pokeapi.co/api/v2/pokemon/",
    }
    const pokeinfo = await axios(response);
    // console.log(pokeinfo);

    return pokeinfo ;
}// function to fetch data from abi and return it as json 


const poke_index = (req, res) => {
    Pokemon.find()
      .then(result => {
        res.render('pokemons', {  });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  module.exports = {
    getPokeInfo,
    poke_index
  }