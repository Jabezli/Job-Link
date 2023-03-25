// const sequelize = require("../config/connection");
// const Employer  = require("../models/employer");
// const employerData = require('./employerData.json')

// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   await Employer.bulkCreate(employerData);
// //   await Employer.bulkCreate(employerData, {
// //     individualHooks: true,
// //     returning: true,
// //   });
// console.log('seeds Planted');
//   process.exit(0);
// };

// seedDatabase();

const sequelize = require("../config/connection");
const seedUserData = require("./user_seed");
const seedJobPostings = require("./jobPosting_seed");
const { User, JobPosting } = require("../models");
const jobData = require("./jobPostingTest.json");
const userData = require("./userTest.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await JobPosting.bulkCreate(jobData);
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};

seedDatabase();

// const seedAll = async () => {
//   try {
//     await sequelize.sync({ force: true });

//     await seedUserData();
//     console.log("\n------------- USERS SEED -------------\n");

//     await seedJobPostings();
//     console.log("\n------------- Job Posting SEED -------------\n");

//     process.exit(0);
//   } catch (err) {
//     console.log(err);
//   }
// };

// seedAll();
