import "./infra/sequelize"
import useCases from  "./modules/trade/useCases"

// Main app entry point
async function run() {
  await useCases.storeTicksFromCSV.execute("./data/futures.csv")
}

run();