const RequestsModel = require('../models/requests')

async function get(req, res){
  const {id} = req.params
  const obj = id ? {_id: id} : null
  const requests = await RequestsModel.find(obj)
  res.send(requests)
}

async function post(req, res){
  const {
    name,
    address,
    phone,
    product,
    price,
    status
  } = req.body

  const request = new RequestsModel({
    name,
    address,
    phone,
    product,
    price,
    status
  })

  request.save()

  res.send({
    message: 'success'
  })
}

async function put(req, res){
  const {id} = req.params
  const request = await RequestsModel.findByIdAndUpdate({_id: id}, req.body, {new: true})

  res.send({
    message: 'success',
    request
  })
}


module.exports = {
  get,
  post,
  put
}