const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pokeSchema = new Schema({
    _id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    abilities: {
      type: String,
      required: true
    },
  });
  
const Pokemon = mongoose.model('Pokemon', pokeSchema);
module.exports = Pokemon;