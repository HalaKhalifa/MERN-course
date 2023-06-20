const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const customerSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
