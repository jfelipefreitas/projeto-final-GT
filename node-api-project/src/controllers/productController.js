const Product = require('../models/Product');

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { enabled, name, slug, use_in_menu, stock, description, price, price_with_discount } = req.body;
    const product = await Product.create({ enabled, name, slug, use_in_menu, stock, description, price, price_with_discount });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { enabled, name, slug, use_in_menu, stock, description, price, price_with_discount } = req.body;
    const [updated] = await Product.update({ enabled, name, slug, use_in_menu, stock, description, price, price_with_discount }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Product not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
