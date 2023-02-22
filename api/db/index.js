const Sequelize = require("sequelize");

const db = new Sequelize("axl", "micaelalozano", "6ataLgSRyxaIlz4BpHxANxldFFPD5hkP", {
  host: "localhost" ,
  dialect: "postgres",
  logging: false,
});

module.exports = db;