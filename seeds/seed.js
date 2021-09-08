const sequelize = require("../config/connection");
const { Cars, User } = require("../models");

const carsSeedData = require("./carsSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeedData, { individualHooks: true });
  await Cars.bulkCreate(carsSeedData);

  process.exit(0);
};

seedDatabase();
