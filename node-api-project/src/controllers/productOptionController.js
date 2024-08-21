const ProductOption = require('../models/ProductOption');

exports.getProductOptionById = async (req, res) => {
  try {
    const productOption = await ProductOption.findByPk(req.params.id);
    if (!productOption) return res.status(404).json({ error: 'Product option not found' });
    res.status(200).json(productOption);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProductOption = async (req, res) => {
  try {
    const { product_id, title, shape, radius, type, values } = req.body;
    const productOption = await ProductOption.create({ product_id, title, shape, radius, type, values });
    res.status(201).json(productOption);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.updateProductOption = async (req, res) => {
  try {
    const { product_id, title, shape, radius, type, values } = req.body;
    const [updated] = await ProductOption.update({ product_id, title, shape, radius, type, values }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Product option not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteProductOption = async (req, res) => {
  try {
    const deleted = await ProductOption.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Product option not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
