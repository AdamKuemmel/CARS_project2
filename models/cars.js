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
    car_make: {
      type: DataTypes.STRING,
      len: [2, 15],
      isAlpha: true,
      allowNull: false,
    },
    car_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    car_color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    car_mileage: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    car_price: {
      type: DataTypes.INTEGER,
      len: [2, 10],
      allowNull: false,
    },
    new_used: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
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

module.exports = Cars;
