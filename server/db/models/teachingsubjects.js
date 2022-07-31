'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeachingSubjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeachingSubjects.belongsTo(models.Teacher);
      TeachingSubjects.belongsTo(models.Subjects);
    }
  }
  TeachingSubjects.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'TeachingSubjects',
  });
  return TeachingSubjects;
};