const express = require('express');
const router = express.Router();
const productImageController = require('../controllers/productImageController');

router.get('/:id', productImageController.getProductImageById);
router.post('/', productImageController.createProductImage);
router.put('/:id', productImageController.updateProductImage);
router.delete('/:id', productImageController.deleteProductImage);

module.exports = router;
