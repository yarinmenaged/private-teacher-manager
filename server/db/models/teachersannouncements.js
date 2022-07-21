'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachersAnnouncements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeachersAnnouncements.hasMany(models.Subjects, {
        foreignKey: "Subject_id"
      });
    }
  }
  TeachersAnnouncements.init({
    Teacher_id: DataTypes.INTEGER,
    Message: DataTypes.STRING,
    Subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeachersAnnouncements',
  });
  return TeachersAnnouncements;
};