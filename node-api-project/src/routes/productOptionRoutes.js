const express = require('express');
const router = express.Router();
const productOptionController = require('../controllers/productOptionController');

router.get('/:id', productOptionController.getProductOptionById);
router.post('/', productOptionController.createProductOption);
router.put('/:id', productOptionController.updateProductOption);
router.delete('/:id', productOptionController.deleteProductOption);

module.exports = router;
