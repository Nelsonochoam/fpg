const CSVReader = require("../../../utils/csvReader")
const CSVTickMapper = require("../mappers/csvTickMapper")

class StoreTicksFromCSVUseCase {
  constructor(tickRepo) {
    this.tickRepo = tickRepo
  }

  async execute({ path, headers }) {
    const reader = new CSVReader(path, headers)

    if (!reader.isValid()) {
      return Promise.reject('Invalid csv reader. Check that the provided path is valid')
    }

    const records = await reader.read({ ignoreFirst: 2 })
    const ticks = records.map(CSVTickMapper.toDomain)

    try {
      await this.tickRepo.saveMany(ticks)
    } catch {
      console.error("Failed to save ticks from file")
    }
  }
}

module.exports = StoreTicksFromCSVUseCase