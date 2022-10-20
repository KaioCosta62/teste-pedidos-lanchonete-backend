const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  codeClient: String,
  codeProduct: String,
  dataCriation: String,
  status: String
})

const model = mongoose.model('requests', schema)

module.exports = model