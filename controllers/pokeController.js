// const Pokemon = require("../models/pokemon");
// const axios = require("axios");

// const getPokeInfo = async () => {
//     const response = {
//         method: "get", 
//         url: "https://pokeapi.co/api/v2/pokemon/",
//     }
//     const pokeinfo = await axios(response);
//     return pokeinfo ;
// }// function to fetch data from abi and return it as json 


// const poke_index = (req, res) => {
//     getPokeInfo()
//       .then(result => {
//         // res.render('pokemons', {  });
//         console.log(result);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
  
//   module.exports = {
//     poke_index
//   }