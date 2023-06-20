const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  companyId: {
    type: Number,
    ref: "Company",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
