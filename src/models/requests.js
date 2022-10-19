const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String,
  product: String,
  price: Number,
  status: String
})

const model = mongoose.model('requests', schema)

module.exports = model