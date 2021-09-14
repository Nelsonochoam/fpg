module.exports = (sequelize, DataTypes) => {
  return sequelize.define('tick', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    timestamp: {
      type: DataTypes.DATE,
    },
    symbol: {
      type: DataTypes.STRING(10),
    },
    open: {
      type: DataTypes.DECIMAL
    },
    high: {
      type: DataTypes.DECIMAL
    },
    low: {
      type: DataTypes.DECIMAL
    },
    close: {
      type: DataTypes.DECIMAL
    },
    btc_volume: {
      type: DataTypes.DECIMAL
    },
    usdt_volume: {
      type: DataTypes.DECIMAL
    }
  },  { timestamps: false })
}