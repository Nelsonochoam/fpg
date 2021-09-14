
export class Tick {
  constructor(unix, date, symbol, open, high, low, btcVolume, usdTVolume) {
    this.unix = unix
    this.date = date
    this.symbol = symbol
    this.open = open
    this.high = high
    this.low = low
    this.btcVolume = btcVolume
    this.usdTVolume = usdTVolume
  }
}
