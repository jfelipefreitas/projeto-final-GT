const ProductCategory = require('../models/ProductCategory');

exports.getProductCategory = async (req, res) => {
  try {
    const { product_id, category_id } = req.params;
    const productCategory = await ProductCategory.findOne({ where: { product_id, category_id } });
    if (!productCategory) return res.status(404).json({ error: 'Product category not found' });
    res.status(200).json(productCategory);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProductCategory = async (req, res) => {
  try {
    const { product_id, category_id } = req.body;
    const productCategory = await ProductCategory.create({ product_id, category_id });
    res.status(201).json(productCategory);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteProductCategory = async (req, res) => {
  try {
    const { product_id, category_id } = req.body;
    const deleted = await ProductCategory.destroy({ where: { product_id, category_id } });
    if (!deleted) return res.status(404).json({ error: 'Product category not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
