'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TeacherStudentRelationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TeacherStudentRelationship.hasMany(models.Subjects, {
        foreignKey: "Subject_is"
      });
    }
  }
  TeacherStudentRelationship.init({
    Teacher_id: DataTypes.INTEGER,
    Student_id: DataTypes.INTEGER,
    Subject_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TeacherStudentRelationship',
  });
  return TeacherStudentRelationship;
};