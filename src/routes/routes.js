const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const ProductsController = require('../controllers/products')
const RequestsController = require('../controllers/requests')

router.get('/customers/:id?', CustomersController.get)
router.post('/customers', CustomersController.post)
router.delete('/customers/:id', CustomersController.del)


router.get('/products/:id?', ProductsController.get)
router.post('/products', ProductsController.post)
router.delete('/products/:id', ProductsController.del)


router.get('/requests/:id?', RequestsController.get)

module.exports = router