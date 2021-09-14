const TickMap = require('../mappers/tickMap')

class TickRepo {

  constructor(models) {
    this.models = models
  }

  async findAll() {
    const rawData = await this.models.Tick.findAll()
    return rawData.map(TickMap.toDomain)
  }

  async saveMany(ticks) {
    const model = this.models.Tick
    const rawTicks = ticks.map(TickMap.toPersistence)

    await model.bulkCreate(rawTicks,  {
      ignoreDuplicates: true,
    })
  }
}

module.exports = TickRepo
