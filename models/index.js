const Cars = require("./cars");
const User = require("./User");

User.hasMany(Cars, {
  foreignKey: "user_id",
});

Cars.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = { Cars, User };
