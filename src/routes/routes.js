const router = require('express').Router()
const CustomersController = require('../controllers/customers')

router.get('/customers/:id?', CustomersController.get)
router.post('/customers', CustomersController.post)

module.exports = router