const Tick = require('../domain/tick')
/**
 * Transforms parsed CSV Records to Tick
 * Domain Objects
 */
class CsvTickMapper {

  static toDomain(record) {
    const [unix, date, symbol, open, high, low, close, btcVolume, usdtVolume] = record

    return Tick.create({
      timestamp: new Date(date),
      open: +open,
      high: +high,
      low: +low,
      close: +close,
      btcVolume: +btcVolume,
      usdtVolume: +usdtVolume,
      symbol
    })
  }
}

module.exports = CsvTickMapper