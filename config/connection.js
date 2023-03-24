const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;
console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASSWORD,
    'employee_db',
    'root',
    'Mw113741@',
    
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
 
