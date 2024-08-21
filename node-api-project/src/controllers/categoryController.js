const Category = require('../models/Category');

exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id);
    if (!category) return res.status(404).json({ error: 'Category not found' });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name, slug, use_in_menu } = req.body;
    const category = await Category.create({ name, slug, use_in_menu });
    res.status(201).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { name, slug, use_in_menu } = req.body;
    const [updated] = await Category.update({ name, slug, use_in_menu }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'Category not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
