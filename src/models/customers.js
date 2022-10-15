const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String
})

const model = mongoose.model('customers',schema)

module.exports = model