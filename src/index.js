const path = require('path')
const { storeTicksFromCSVUseCase, getTicksUseCase } = require("./modules/trade/useCases")
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

async function storeTicks() {
  const params = {
    path: path.join(__dirname, '/data', 'futures.csv'),
    headers: ["unix", "date", "symbol", "open", "high", "low", "close", "Volume BTC", "Volume USDT"]
  }

  console.info(`Storing ticks from ${params.path}....`)

  try {
    await storeTicksFromCSVUseCase.execute(params)
    console.info("Done")
  } catch {
    console.error("Failed to store ticks from file")
  }
}

async function readTicks() {
  console.info("Reading tick data from database ....")
  const ticks = await getTicksUseCase.execute()
  console.log(ticks)
}


function main() {
  readline.question("What should we do? \n 1) Store ticks from csv \n 2) Read stored ticks \n", async (response) => {
    switch (response) {
      case "1":
        await storeTicks()
        break;
      case "2":
        await readTicks()
        break;
      default:
        console.log("Invalid option. Valid options: 1 o 2")
    }

    readline.close()
  })
}

main();
