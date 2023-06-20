const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const billSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
    required: true,
  },
  customerId: {
    type: String,
    ref: 'Customer',
    required: true,
  }
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
