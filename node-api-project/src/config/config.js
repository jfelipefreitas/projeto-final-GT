require('dotenv').config(); // Carregar variáveis do .env

module.exports = {
  development: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'sua_senha',
    database: process.env.DB_NAME || 'nome_do_banco',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database_test',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'sua_senha',
    database: process.env.DB_NAME || 'nome_do_banco_producao',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mysql',
  },
};
