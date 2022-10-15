const CustomersModel = require('../models/customers')

async function get(req, res) {
  const {id} = req.params
  const obj = id ? {_id:id} : null
  const customer = await CustomersModel.find(obj)

  res.send(customer)
}

async function post(req, res){
  const {
    name,
    age,
    email,
    password
  } = req.body

  const customer = new CustomersModel({
    name,
    age,
    email,
    password
  })

  customer.save()

  res.send({
    message: "cliente cadastrado com sucesso"
  })
}
module.exports = {
  get,
  post
}