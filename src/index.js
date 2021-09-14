const { storeTicksFromCSVUseCase } = require("./modules/trade/useCases")
const path = require('path')

async function run() {
  const params = {
    path: path.join(__dirname, '/data', 'futures.csv'),
    headers: ["unix", "date", "symbol", "open", "high", "low", "close", "Volume BTC", "Volume USDT"]
  }

  try {
    await storeTicksFromCSVUseCase.execute(params)
  } catch {
    console.error("Failed to store ticks from file")
  }
}

run();