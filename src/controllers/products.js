const productsModel = require('../models/products')

async function get(req, res){
  const {id} = req.params
  const obj = id ? {_id: id} : null
  const product = await productsModel.find(obj)
  res.send(product)
}

module.exports = {
  get
}