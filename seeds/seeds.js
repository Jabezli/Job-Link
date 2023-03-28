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
// const seedUserData = require("./user_seed");
// const seedJobPostings = require("./jobPosting_seed");





const sequelize = require("../config/connection");
// const { User, JobPosting } = require("../models");
const JobPosting = require('../models/jobPosting')
const User = require('../models/user')
const jobData = require("./jobPostingTest.json");
const userData = require("./userTest.json");
const { v4: uuidv4 } = require('uuid');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const usersWithUuid = userData.map(user => ({
    ...user,
    id: uuidv4()
  })); 

  const empolyers = await User.bulkCreate(usersWithUuid );
  // for(const i of Jo)
  // await JobPosting.bulkCreate(jobData);
  for (const job  of jobData) {
    await JobPosting.create({
      ...job,
      user_id: empolyers[Math.floor(Math.random() * empolyers.length)].id,
    });
  }
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
