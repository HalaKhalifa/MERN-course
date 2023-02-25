const path = require("path");
const express = require('express');
const app = express();
const axios = require("axios");
const mongoose = require('mongoose');
const Pokemon = require('./models/pokemon');

app.set("view engine","ejs"); // register view engine
app.set('views',path.join(__dirname,'/myviews')); 


// connect to mongodb
const dbURI ='mongodb+srv://yafa_web2:12112858@nodejs.39b5m5q.mongodb.net/nodejs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err=>console.log(err))


const getPokeInfo = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const pokeinfo = await response.json();
    console.log(pokeinfo);

    return pokeinfo ;
}// function to fetch data from abi and return it as json 

getPokeInfo()
    .then (pokeinfo => { })
    .catch(err=>console.log(err));


