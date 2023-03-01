const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pokeSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
    },
    abilities: {
      type: String,
      required: true
    },
  });
  
const Pokemon = mongoose.model('Pokemon', pokeSchema);
module.exports = Pokemon;