const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  img: String,
  description: String,
  extraInfo: String,
  category: String,
  userId: String,
  company: String,
  maxGuests: String,
  cost: String,
  strr: String
});
module.exports = mongoose.model("packages", productSchema)