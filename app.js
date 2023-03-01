const path = require("path");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const Pokemon = require('./models/pokemon');
const pokemonRoutes = require("./routes/pokemonRoutes")

app.set("view engine","ejs"); // register view engine
app.set('views',path.join(__dirname,'/myviews')); 
app.use('/', pokemonRoutes);

// connect to mongodb
const dbURI ='mongodb+srv://yafa_web2:12112858@nodejs.39b5m5q.mongodb.net/nodejs?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then(result => app.listen(3000))
    .catch(err=>console.log(err))

  

