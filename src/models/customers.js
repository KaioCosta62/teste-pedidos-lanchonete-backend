const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String
})

const model = mongoose.model('customers', schema)

module.exports = model