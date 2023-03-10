'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game',
      [
        {
          id: '1A2',
          username: 'uhuy',
          email: 'uhuy@uhuy.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2B3',
          username: 'yahud',
          email: 'yahud@yahud.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 'cihuy',
          username: 'cihuy',
          email: 'cihuy@cihuy.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game', null, {})
  },
}