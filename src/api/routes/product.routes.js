const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const auth = require('../middlewares/auth');

//basit CRUD işlemleri
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', auth, productController.newProduct);
router.put('/:id', auth, productController.updateProduct);
router.delete('/:id', auth,  productController.destroyProduct);

module.exports = router;