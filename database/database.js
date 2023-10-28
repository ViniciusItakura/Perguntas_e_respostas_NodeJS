const Sequelize = require('sequelize');

const connection = new Sequelize('perguntaresposta', 'root', 'vipit123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

module.exports = connection;