const Sequelize = require("sequelize");
require("dotenv").config();
const cloudinary = require('cloudinary').v2;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
  cloud_name: '<ddytkmu7p>',
  api_key: 'AIzaSyCyiOlGdSCVfMoWHFJYNwCJg7JoRNp2VZU',
  api_secret: 'O206pLZIzlnespDuvHFQc9mAS9E',
  secure: true
});

exports.myconfig = myconfig;

