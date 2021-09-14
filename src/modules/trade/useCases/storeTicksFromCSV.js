const CSVReader = require("../../../utils/csvReader")

export class StoreTicksFromCSV {
  constructor(tickRepo) {
    this.tickRepo = tickRepo
  }

  async execute({ path, headers }) {
    const reader = new CSVReader({ path, headers })

    if (!reader.isValid()) {
      return Promise.reject(reader.errors)
    }
  }
}