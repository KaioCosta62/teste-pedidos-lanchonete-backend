const router = require('express').Router()
const CustomersController = require('../controllers/customers')
const ProductsController = require('../controllers/products')

router.get('/customers/:id?', CustomersController.get)
router.post('/customers', CustomersController.post)
router.delete('/customers/:id', CustomersController.del)


router.get('/products/:id?', ProductsController.get)
module.exports = router