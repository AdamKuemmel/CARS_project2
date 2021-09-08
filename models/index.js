const Cars = require("./Cars");
const User = require("./User");

Cars.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Cars, {
  foreignKey: "user_id",
});

module.exports = { Cars, User };
