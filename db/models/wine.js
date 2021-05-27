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
      Wine.belongsToMany(Grapes, { through: WineGrapes });
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
