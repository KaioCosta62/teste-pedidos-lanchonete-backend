const productsModel = require('../models/products')

async function get(req, res){
  const {id} = req.params
  const obj = id ? {_id: id} : null
  const product = await productsModel.find(obj)
  res.send(product)
}

async function post(req, res){
  const {
    name,
    price,
    description
  } = req.body

  const product = await productsModel({
    name,
    price,
    description
  })

  product.save()

  res.send({
    message: "success"
  })
}

module.exports = {
  get,
  post
}