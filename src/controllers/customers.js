const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

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

  const passwordCrypto = await crypto(password)

  const customer = new CustomersModel({
    name,
    age,
    email,
    password: passwordCrypto
  })

  customer.save()

  res.send({
    message: "success"
  })
}

module.exports = {
  get,
  post
}