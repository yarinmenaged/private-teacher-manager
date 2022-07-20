'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messages.belongsTo(models.Students);
      Messages.belongsTo(models.Teacher);
    }
  }
  Messages.init({
    Sender_id: DataTypes.NUMBER,
    Getter_id: DataTypes.NUMBER,
    Message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Messages',
  });
  return Messages;
};