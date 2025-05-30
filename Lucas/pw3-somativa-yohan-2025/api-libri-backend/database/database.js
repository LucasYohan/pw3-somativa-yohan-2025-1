const Sequelize = require('sequelize');

const connection = new Sequelize(
    'bd_libri_api',
    'root',
    '',
    {
        host: 'localhost',
        password: "etecembu@123",
        port: '3306',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;