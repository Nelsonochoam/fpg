import fs from 'fs';
import csv from 'csv-parser'

class CSVReader {

  constructor(path, headers) {
    this.path = path
    this.headers = headers
  }

  read() {
    const rows = []

    const stream = fs.createReadStream(this.path)
    stream .pipe(csv(this.headers))
      .on('data', (data) => {
        rows.push(Object.values(data))
      })

    return new Promise((resolve, reject) => {
      stream.on('end', () => {
        resolve(rows)
      })
    })
  }
}

export default CSVReader
