const CustomersModel = require('../models/customers')

async function get(req, res){
  const {id} = req.params
  const verifyId = id ? {_id: id} : null
  const products = await CustomersModel.find(verifyId)
  res.send(products)
}

module.exports = {
  get,
}