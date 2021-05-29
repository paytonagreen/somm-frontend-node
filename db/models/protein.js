'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Protein extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Protein.belongsToMany(models.Wine, { through: 'WineProteins' });
    }
  }
  Protein.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Protein',
    }
  );
  return Protein;
};
