export default (sequelize, DataTypes) => {
  // const headers = ['unix','date','symbol','open','high','low','close','Volume BTC','Volume USDT']
  // 1616309880000.0,2021-03-21 06:58:00,BTC-PERP,57120.0,57129.0,57120.0,57128.0,4.956303455398404,283143.7038
  return sequelize.define('tick', {
    tick_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
    },
    symbol: {
      type: DataTypes.STRING(10),
    },
    open: {
      type: DataTypes.FLOAT
    },
    high: {
      type: DataTypes.FLOAT
    },
    low: {
      types: DataTypes.FLOAT
    },
    close: {
      types: DataTypes.FLOAT
    },
    btc_volume: {
      types: DataTypes.DECIMAL
    },
    usdt_volume: {
      types: DataTypes.DECIMAL
    }
  })
}