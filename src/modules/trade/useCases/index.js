const StoreTicksFromCSV = require('./storeTicksFromCSVUseCase')
const { tickRepo } = require('../repos')

const storeTicksFromCSVUseCase = new StoreTicksFromCSV(tickRepo)

module.exports = {
  storeTicksFromCSVUseCase
}