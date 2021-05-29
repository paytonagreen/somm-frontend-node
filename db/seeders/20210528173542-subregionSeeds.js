'use strict';

const { dateSeeds } = require('../../lib/utils');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.sync();
    const { models } = db.sequelize;
    const { Region } = models;
    const California = await Region.findOne({ where: { name: 'California' } });
    const Texas = await Region.findOne({ where: { name: 'Texas' } });
    const seeds = [
      { name: 'Sonoma County', regionId: California.id },
      { name: 'High Plains', regionId: Texas.id },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Subregions', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Subregions', null, {});
  },
};
