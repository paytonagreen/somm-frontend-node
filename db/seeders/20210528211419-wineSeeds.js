'use strict';

const db = require('../models');
const { dateSeeds } = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await db.sequelize.sync();
    const { models } = db.sequelize;
    const { Wine, Producer, Country, Region, Subregion, Grape, Dish, Account } =
      models;
    const seeds = [
      {
        name: "Don't Forget To Soar",
        vintage: 2020,
      },
      {
        name: 'Les Bruyeres',
        vintage: 2018,
      },
      {
        name: 'Venegazzu',
      },
      {
        name: 'La Cuvee',
      },
      {
        name: "Cremant d'Alsaace Brut",
      },
      {
        name: 'Dandy Rose',
        vintage: 2019,
      },
      {
        name: 'Lambrusco Di Sorbara',
      },
      {
        name: "'Exile' Petillant Naturel",
        vintage: 2019,
      },
      {
        name: 'Tempranillo',
        vintage: 2019,
      },
      {
        name: 'Skeleton Key',
      },
      {
        name: "P'tit Gaby",
        vintage: 2018,
      },
      {
        name: 'Astral',
        vintage: 2020,
      },
    ];
    const datedSeeds = dateSeeds(seeds);

    await queryInterface.bulkInsert('Wines', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wines', null, {});
  },
};
