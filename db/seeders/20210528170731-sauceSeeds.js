'use strict';

const dateSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'Barbecue' },
      { name: 'Balsamic Glaze' },
      { name: 'Cream Sauce' },
      { name: 'Indian Curry' },
      { name: 'Mushroom Sauce' },
      { name: 'Pesto' },
      { name: 'Sesame Sauce' },
      { name: 'Tomato Sauce' },
      { name: 'Thai Curry' },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Sauces', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sauces', null, {});
  },
};
