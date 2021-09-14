const { DataTypes } = require("sequelize")
const config = require('../config/config')
const createTickModel = require('./tick')

const sequelize = config.connection

const models = {
  Tick: createTickModel(sequelize, DataTypes)
}

models["sequelize"] = sequelize;
models["Sequelize"] = sequelize;

module.exports = models
