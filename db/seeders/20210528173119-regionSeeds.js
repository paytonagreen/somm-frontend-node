'use strict';

const dateSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'Texas', countryId: 1 },
      { name: 'Beaujolais', countryId: 2 },
      { name: 'Veneto', countryId: 3 },
      { name: 'Champagne', countryId: 2 },
      { name: 'Alsace', countryId: 2 },
      { name: 'Emilia Romagna', countryId: 3 },
      { name: 'Loire', countryId: 2 },
      { name: 'Rhone', countryId: 2 },
      { name: 'California', countryId: 2 },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Regions', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
