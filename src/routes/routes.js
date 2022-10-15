const router = require('express').Router()
const CustomersController = require('../controllers/customers')

router.get('/customers/:id?', CustomersController.get)


module.exports = router