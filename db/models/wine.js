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
      // define association here
      this.belongsToMany(models.Account, { through: 'AccountWines' });
      this.belongsToMany(models.Country, { through: 'WineCountries' });
      this.belongsToMany(models.Dish, { through: 'WineDishes' });
      this.belongsToMany(models.Grape, { through: 'WineGrapes' });
      this.belongsToMany(models.Producer, { through: 'WineProducers' });
      this.belongsToMany(models.Region, { through: 'WineRegions' });
      this.belongsToMany(models.Sauce, { through: 'WineSauces' });
      this.belongsToMany(models.Subregion, { through: 'WineSubregions' });
    }
  }
  Wine.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      hasVintage: DataTypes.BOOLEAN,
      vintage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Wine',
    }
  );
  return Wine;
};
