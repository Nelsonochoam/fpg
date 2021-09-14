const { Sequelize } = require('sequelize');

const credentials = {
    "development": {
        "username": "postgres",
        "password": "postgres",
        "database": "fpg",
        "host": "localhost",
        "dialect": "postgres",
    }
}

const { username, password, database, host, dialect } = credentials["development"];

module.exports = credentials;

module.exports.connection = new Sequelize(database, username, password, {
    host,
    dialect,
    port: 5432,
    dialectOptions: {
        multipleStatements: true,
    },
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    logging: false
});