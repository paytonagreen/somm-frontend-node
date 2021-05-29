'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Wine.belongsToMany(models.Account, { through: 'AccountWines' });
      Wine.belongsToMany(models.Country, { through: 'WineCountries' });
      Wine.belongsToMany(models.Dish, { through: 'WineDishes' });
      Wine.belongsToMany(models.Grape, { through: 'WineGrapes' });
      Wine.belongsToMany(models.Producer, { through: 'WineProducers' });
      Wine.belongsToMany(models.Region, { through: 'WineRegions' });
      Wine.belongsToMany(models.Sauce, { through: 'WineSauces' });
      Wine.belongsToMany(models.Subregion, { through: 'WineSubregions' });
    }
  }
  Wine.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      vintage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Wine',
    }
  );
  return Wine;
};
