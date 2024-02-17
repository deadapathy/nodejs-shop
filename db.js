const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    // dialect:'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectModule: require("mysql2"),
    max: 30, // максимальное количество соединений в пуле
    idleTimeoutMillis: 60000, // время ожидания до закрытия неиспользуемого соединения
    connectionTimeoutMillis: 2000,
    dialectOptions: {
      connectTimeout: 5000, // set connect timeout to 5 seconds
      requestTimeout: 5000, // set request timeout to 5 seconds
      timezone: "+06:00",
    },
  }
);
//FOR mysql you must download mysql and mysql2
