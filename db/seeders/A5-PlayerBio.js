'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_biodata',
      [
        {
          uid: '1A2',
          first_name: 'uhuy',
          last_name: 'uhuy',
          city: 'Jakarta',
        },
        {
          uid: '2B3',
          first_name: 'yahud',
          last_name: 'yahud',
          city: 'Bandung',
        },
        {
          uid: 'cihuy',
          first_name: 'cihuy',
          last_name: 'cihuy',
          city: 'Jogja',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_biodata', null, {})
  },
}