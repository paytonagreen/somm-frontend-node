'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Region.belongsTo(models.Country, {
        foreignKey: 'countryId'
      });
      Region.belongsToMany(models.Wine, { through: 'WineRegions' });
    }
  }
  Region.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Region',
    }
  );
  return Region;
};
