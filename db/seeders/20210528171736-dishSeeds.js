'use strict';

const dateSeeds = require('../../lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const seeds = [
      {
        name: 'Seared Tri-Tip',
        description:
          'Brussels Sprouts, Celery, Shallots, Tomato, Spiced Steak Sauce, Soy-Lime Vinaigrette',
      },
      {
        name: 'Contigo Burger',
        description: 'Challah Bun, Windy Bar Ranch Beef, Fries',
      },
      {
        name: 'Fish & Curry',
        description:
          'Farm Vegetables, Coconut Green Curry Borth, Mushroom Tare, Crispy Onion,',
      },
      {
        name: 'Grilled Kale Salad',
        description:
          'Freekeh, Strawbrry, Spring Onion, Lime, Ginger, Black Garlic, Hazelnuts',
      },
      {
        name: 'Chorizo Kofta',
        description: 'Jalapeno Crema, Napa Cabbage Slaw, Camp Bread, Fries',
      },
      {
        name: 'Rabbit Gnocchi',
        description:
          'Sage Parisian Gnocchi, Carrots, Cippolini Onions, Spiced Rabbit Jus, Parmesan, Parsley',
      },
      {
        name: 'Smash Burger',
        description:
          'Double Meat, Double Cheese, Grilled Onions, Romaine, Potato Bun, Fries',
      },
    ];
    const datedSeeds = dateSeeds(seeds);
    await queryInterface.bulkInsert('Dishes', datedSeeds, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Dishes', null, {});
  },
};
