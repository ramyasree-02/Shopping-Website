const Sequelize = require('sequelize');

const sequelize = new Sequelize('online-shop', 'root', 'Ramya@123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
