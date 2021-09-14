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
        allowNull: false,
      },
      symbol: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      open: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      high: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      low: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      close: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      btc_volume: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      usdt_volume: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      }
    })

    // Unique constraint on symbol timestamp
    await queryInterface.addConstraint('ticks', {
      fields: ['symbol', 'timestamp'],
      type: 'unique',
      name: 'tick_unique_by_timestamp_symbol'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ticks')
  }
};
