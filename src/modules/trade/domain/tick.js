
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
    if (!(props.timestamp || props.symbol || props.high ||
      props.low || props.close || props.btcVolume || props.usdtVolume)) {
      const message = "Failed to create tick. Must provide all the required params [timestamp, symbol, high, low, close,  btcVolume, usdtVolume]"
      throw new Error(message)
    }

    return new Tick({ ...props, id })
  }
}

module.exports = Tick
