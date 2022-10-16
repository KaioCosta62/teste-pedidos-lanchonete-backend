const router = require('express').Router()
const CustomersController = require('../controllers/customers')

router.get('/customers/:id?', CustomersController.get)
router.post('/customers', CustomersController.post)
router.delete('/customers/:id', CustomersController.del)

module.exports = router