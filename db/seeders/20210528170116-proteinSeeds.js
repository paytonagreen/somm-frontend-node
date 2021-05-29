'use strict';

const { dateSeeds } = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'Beef' },
      { name: 'Chicken' },
      { name: 'Fish' },
      { name: 'Pork' },
      { name: 'Tempeh' },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Proteins', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Proteins', null, {});
  },
};
