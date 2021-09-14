const fs = require('fs')
const csv = require('csv-parser')

class CSVReader {

  constructor(path, headers) {
    this.path = path
    this.headers = headers
  }

  isValid() {
    return fs.existsSync(this.path)
  }

  clean(rows, options) {
    const { ignoreFirst = 0 } = options
    return rows.slice(ignoreFirst, rows.length - 1)
  }

  read(options) {
    const rows = []

    const stream = fs.createReadStream(this.path)
    stream .pipe(csv(this.headers))
      .on('data', (data) => {
        rows.push(Object.values(data))
      })

    return new Promise((resolve, reject) => {
      stream.on('end', () => {
        const cleaned = this.clean(rows, options)
        resolve(cleaned)
      })
    })
  }
}

module.exports = CSVReader
