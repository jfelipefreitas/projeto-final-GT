const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const productImageRoutes = require('./routes/productImageRoutes');
const productOptionRoutes = require('./routes/productOptionRoutes');
const productCategoryRoutes = require('./routes/productCategoryRoutes');
const sequelize = require('./config/database');

app.use(express.json());

// Rotas
app.use('/v1/user', userRoutes);
app.use('/v1/category', categoryRoutes);
app.use('/v1/product', productRoutes);
app.use('/v1/product-image', productImageRoutes);
app.use('/v1/product-option', productOptionRoutes);
app.use('/v1/product-category', productCategoryRoutes);

// Teste de conexão com o banco de dados
sequelize.authenticate().then(() => {
  console.log('Conexão com o banco de dados foi bem-sucedida');
}).catch(err => {
  console.log('Erro ao conectar ao banco de dados:', err);
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
