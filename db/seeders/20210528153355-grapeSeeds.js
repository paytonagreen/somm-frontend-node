'use strict';

const { dateSeeds } = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      { name: 'Cabernet Sauvignon', description: 'An absolute classic' },
      { name: 'Carignan', description: 'V delicious' },
      { name: 'Chardonnay', description: 'Oooooh buttery' },
      { name: 'Cinsault', description: 'V delicious' },
      { name: 'Gamay', description: 'Always a good time' },
      { name: 'Gewurztraminer', description: 'V delicious' },
      { name: 'Glera', description: 'V delicious' },
      { name: 'Grenache', description: 'V delicious' },
      { name: 'Gruner', description: 'V delicious' },
      { name: 'Lambrusco', description: 'V delicious' },
      { name: 'Mourvedre', description: 'V delicious' },
      { name: 'Pinot Auxerrois', description: 'V delicious' },
      { name: 'Pinot Blanc', description: 'V delicious' },
      { name: 'Pinot Gris', description: 'V delicious' },
      { name: 'Pinot Noir', description: 'V delicious' },
      { name: 'Riesling', description: 'V delicious' },
      { name: 'Rousanne', description: 'V delicious' },
      { name: 'Sauvignon Blanc', description: 'V delicious' },
      { name: 'Syrah', description: 'V delicious' },
      { name: 'Sangiovese', description: 'V delicious' },
      { name: 'Tempranillo', description: 'V delicious' },
      { name: 'Zinfandel', description: 'V delicious' },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Grapes', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Grapes', null, {});
  },
};
