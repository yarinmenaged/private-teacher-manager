"use strict";
const { Model } = require("sequelize");
const teacher = require("./teacher");
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Settings.belongsTo(models.Teacher);
    }
  }
  Settings.init(
    {
      Sunday: DataTypes.STRING,
      Monday: DataTypes.STRING,
      Tuesday: DataTypes.STRING,
      Wednesday: DataTypes.STRING,
      Thursday: DataTypes.STRING,
      Friday: DataTypes.STRING,
      Saturday: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Settings",
    }
  );
  return Settings;
};
