'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subregion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Region);
      this.belongsToMany(models.Wine, { through: 'WineSubregions' });
    }
  }
  Subregion.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Subregion',
    }
  );
  return Subregion;
};
