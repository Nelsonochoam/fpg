
/*
 * Maps ticks from the persistence to the domain and
 * vice-versa
 */
class TickMap {


  static toDomain() {

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