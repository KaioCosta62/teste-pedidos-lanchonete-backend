const RequestsModel = require('../models/requests')

async function get(req, res){
  const {id} = req.params
  const obj = id ? {_id: id} : null
  const requests = await RequestsModel.find(obj)
  res.send(requests)
}


module.exports = {
  get
}