const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cars extends Model {}

Cars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    make: {
      type: DataTypes.STRING,
      len: [2, 30],
      isAlpha: true,
    },
    year: {
      type: DataTypes.STRING,
      len: [2, 30],
      isAlpha: true,
    },
    color: {
      type: DataTypes.INTEGER,
      references: {
        model: "role",
        key: "id",
      },
    },
    milage: {
      type: DataTypes.INTEGER,
      // allowNull: true,
      // references: {
      //   model: "employee",
      //   key: "id",
      // },
    },
    price: {
      type: DataTypes.STRING,
      len: [2, 30],
      isAlpha: true,
    },
    new: {
      type: DataTypes.BOOLEAN,
      len: [2, 30],
      isAlpha: true,
    },
    user_id: {
      type: DataTypes.STRING,
      len: [2, 30],
      isAlpha: true,
    },
  },
  {
    sequelize: sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "cars",
  }
);

module.exports = Employee;
