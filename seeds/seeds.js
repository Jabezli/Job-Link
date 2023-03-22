const sequelize = require("../config/connection");
const Employer  = require("../models/employer");
const employerData = require('./employerData.json')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Employer.bulkCreate(employerData);
//   await Employer.bulkCreate(employerData, {
//     individualHooks: true,
//     returning: true,
//   });
console.log('seeds Planted');
  process.exit(0);
};

seedDatabase();
