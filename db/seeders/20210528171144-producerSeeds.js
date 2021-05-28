'use strict';

const datedSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'Southold Farm + Cellar' },
      { name: 'Domaine Yohann Lardy' },
      { name: 'Montelvini' },
      { name: 'Laurent-Perrier' },
      { name: 'Domaine Riefle' },
      { name: 'Dandy' },
      { name: "L'onesta" },
      { name: 'Lise et Bertrand Jousset' },
      { name: 'The Austin Winery' },
      { name: 'William Chris' },
      { name: 'Mas Theo' },
      { name: 'Les Lunes' },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Producers', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Producers', null, {});
  },
};
