'use strict'
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_history',
      [
        {
          log_id: uuidv4(),
          user_id: '1A2',
          level: 2,
          experience: 50,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '2B3',
          level: 3,
          experience: 75,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '3C4',
          level: 4,
          experience: 100,
          last_login: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_history', null, {})
  },
}