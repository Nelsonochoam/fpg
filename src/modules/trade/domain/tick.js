
class Tick {
  constructor({ timestamp, symbol, open, high, low, close, btcVolume, usdtVolume }) {
    this.timestamp = timestamp
    this.symbol = symbol
    this.open = open
    this.high = high
    this.low = low
    this.close = close
    this.btcVolume = btcVolume
    this.usdtVolume = usdtVolume
  }

  static create(props) {
    return new Tick(props)
  }
}

module.exports = Tick
