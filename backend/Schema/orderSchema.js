const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  des: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = orderSchema;
