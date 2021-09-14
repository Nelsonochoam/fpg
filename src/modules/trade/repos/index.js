const TickRepo = require('./tickRepo')
const models = require("../../../infra/sequelize/ models")

const tickRepo = new TickRepo(models);

module.exports = {
  tickRepo
}
