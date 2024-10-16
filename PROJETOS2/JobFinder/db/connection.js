const Sequelize = require('sequelize');

const sequelize = new Sequelize( {
    storage:'./db/app.db',
    dialect: 'sqlite',
    
});


module.exports = sequelize;