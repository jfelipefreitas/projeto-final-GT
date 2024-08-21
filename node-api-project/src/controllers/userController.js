const User = require('../models/User');

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: ['id', 'firstname', 'surname', 'email']
    });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { firstname, surname, email, password } = req.body;
    const user = await User.create({ firstname, surname, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { firstname, surname, email } = req.body;
    const [updated] = await User.update({ firstname, surname, email }, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
