const ProductImage = require('../models/ProductImage');

exports.getProductImageById = async (req, res) => {
  try {
    const productImage = await ProductImage.findByPk(req.params.id);
    if (!productImage) return res.status(404).json({ error: 'Product image not found' });
    res.status(200).json(productImage);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProductImage = async (req, res) => {
  try {
    const { product_id, enabled, path } = req.body;
    const productImage = await ProductImage.create({ product_id, enabled, path });
    res.status(201).json(productImage);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.updateProductImage = async (req, res) => {
  try {
    const { product_id, enabled, path } = req.body;
    const [updated] = await ProductImage.update({ product_id, enabled, path }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Product image not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteProductImage = async (req, res) => {
  try {
    const deleted = await ProductImage.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Product image not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
