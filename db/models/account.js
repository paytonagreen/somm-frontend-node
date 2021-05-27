'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      this.hasMany(model.Account)
    }
  };
  Account.init({
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};