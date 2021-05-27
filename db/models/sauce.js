'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sauce extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(Wine, { through: WineSauces });
    }
  }
  Sauce.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sauce',
    }
  );
  return Sauce;
};