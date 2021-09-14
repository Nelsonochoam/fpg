import config from '../config/config'
import createTickModel from './tick'
import { DataTypes } from "sequelize";

const sequelize = config.connection

const models = {
  Tick: createTickModel(sequelize, DataTypes)
}

models["sequelize"] = sequelize;
models["Sequelize"] = sequelize;

export default models
