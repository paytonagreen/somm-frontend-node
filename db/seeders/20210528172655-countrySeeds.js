'use strict';

const dateSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'United States' },
      { name: 'France' },
      { name: 'Italy' },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Countries', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
