const express = require('express');
const router = express.Router();
const productCategoryController = require('../controllers/productCategoryController');

router.get('/:product_id/:category_id', productCategoryController.getProductCategory);
router.post('/', productCategoryController.createProductCategory);
router.delete('/', productCategoryController.deleteProductCategory);

module.exports = router;
