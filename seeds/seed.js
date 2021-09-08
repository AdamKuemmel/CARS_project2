const sequelize = require("../config/connection");
const { Cars, User } = require("../models");

const carsSeedData = require("./carsSeedData.json");
const userSeedData = require("./userSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Cars.bulkCreate(carsSeedData);
  await User.bulkCreate(userSeedData);

  process.exit(0);
};

seedDatabase();
