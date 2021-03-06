'use strict';
const { Model } = require('sequelize');
const Account = require('./account');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Account);
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.BOOLEAN,
      accountId: DataTypes.INTEGER,
      resetPasswordToken: DataTypes.STRING,
      resetPasswordSentAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
