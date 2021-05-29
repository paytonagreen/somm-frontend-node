'use strict';

const { dateSeeds } = require('../../lib/utils');
const db = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //sync database for access
    await db.sequelize.sync();
    const { models } = db.sequelize;
    const { Country } = models;
    const US = await Country.findOne({where: { name: "United States"}})
    const France = await Country.findOne({where: { name: "France"}})
    const Italy = await Country.findOne({where: { name: "Italy"}})
    console.log(US.id);
    const seeds = [
      { name: 'Texas', countryId: US.id},
      { name: 'Beaujolais', countryId: France.id},
      { name: 'Veneto', countryId: Italy.id },
      { name: 'Champagne', countryId: France.id },
      { name: 'Alsace', countryId: France.id },
      { name: 'Emilia Romagna', countryId: Italy.id },
      { name: 'Loire', countryId: France.id },
      { name: 'Rhone', countryId: France.id },
      { name: 'California', countryId: US.id },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Regions', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Regions', null, {});
  },
};
