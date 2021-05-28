'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User);
      this.belongsToMany(models.Wine, { through: 'AccountWines' });
    }
  }
  Account.init(
    {
      username: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Account',
    }
  );
  return Account;
};
