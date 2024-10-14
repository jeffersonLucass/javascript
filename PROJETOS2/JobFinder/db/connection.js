const Sequelize = require('sequelize');

const sequelize = new Sequelize( {
    Storage:'./db/app.db',
    dialect: 'sqlite'   
});

module.exports = sequelize;