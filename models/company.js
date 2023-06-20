const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const companySchema = new Schema({
    _id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  });
  
const Company = mongoose.model('Company', companySchema);
module.exports = Company;