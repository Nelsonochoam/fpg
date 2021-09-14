const TickMap = require('../mappers/tickMap')

class TickRepo {

  constructor(models) {
    this.models = models
  }

  async findAll() {
    return this.models.Tick.findAll()
  }

  async saveMany(ticks) {
    const model = this.models.Tick
    const rawTicks = ticks.map(TickMap.toPersistence)

    await model.bulkCreate(rawTicks)
  }
}

module.exports = TickRepo
