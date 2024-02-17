const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const product = sequelize.define("products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, defaultValue: 0 },
  novelty: { type: DataTypes.BOOLEAN, defaultValue: true },
  archive: { type: DataTypes.BOOLEAN, defaultValue: false },
  link: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING(500) },
});

module.exports = {
  product,
};
