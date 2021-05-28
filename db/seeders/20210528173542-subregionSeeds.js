'use strict';

const dateSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Subregions', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subregions', null, {});
  },
};
