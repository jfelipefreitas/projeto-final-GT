const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ProductOption = sequelize.define('ProductOption', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shape: {
    type: DataTypes.STRING,
  },
  radius: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
  },
  values: {
    type: DataTypes.JSON,
  },
}, {
  timestamps: true,
  tableName: 'product_options',
});

module.exports = ProductOption;
