const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Definição das rotas para CRUD de usuários
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

