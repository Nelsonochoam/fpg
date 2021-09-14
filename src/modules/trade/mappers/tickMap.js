const Tick = require('../domain/tick')

/*
 * Maps ticks from the persistence to the domain and
 * vice-versa
 */
class TickMap {


  static toDomain(rawTick) {
    const values = rawTick.dataValues

    return Tick.create({
      timestamp: new Date(values.timestamp),
      open: +values.open,
      high: +values.high,
      low: +values.low,
      close: +values.close,
      btcVolume: +values.btc_volume,
      usdtVolume: +values.usdt_volume,
      symbol: values.symbol
    }, values.id)
  }

  static toPersistence(tick) {
    return {
      timestamp: tick.timestamp,
      symbol: tick.symbol,
      open: tick.open,
      high: tick.high,
      low: tick.low,
      close: tick.close,
      btc_volume:  tick.btcVolume,
      usdt_volume:  tick.usdtVolume
    }
  }
}

module.exports = TickMap