const StoreTicksFromCSVUseCase = require('./storeTicksFromCSVUseCase')
const GetTicksUseCase = require('./getTicksUseCase')
const { tickRepo } = require('../repos')

const storeTicksFromCSVUseCase = new StoreTicksFromCSVUseCase(tickRepo)
const getTicksUseCase = new GetTicksUseCase(tickRepo)

module.exports = {
  storeTicksFromCSVUseCase,
  getTicksUseCase
}