'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ticks', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      timestamp: {
        type: Sequelize.DATE,
      },
      symbol: {
        type: Sequelize.STRING(10),
      },
      open: {
        type: Sequelize.DECIMAL
      },
      high: {
        type: Sequelize.DECIMAL
      },
      low: {
        type: Sequelize.DECIMAL
      },
      close: {
        type: Sequelize.DECIMAL
      },
      btc_volume: {
        type: Sequelize.DECIMAL
      },
      usdt_volume: {
        type: Sequelize.DECIMAL
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ticks')
  }
};
