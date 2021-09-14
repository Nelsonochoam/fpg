
class Tick {
  constructor({ timestamp, symbol, open, high, low, close, btcVolume, usdtVolume, id }) {
    this.timestamp = timestamp
    this.symbol = symbol
    this.open = open
    this.high = high
    this.low = low
    this.close = close
    this.btcVolume = btcVolume
    this.usdtVolume = usdtVolume
    this.id = id
  }

  static create(props, id) {
    return new Tick({ ...props, id })
  }
}

module.exports = Tick
