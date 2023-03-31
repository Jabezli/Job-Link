const sequelize = require("../config/connection");
const JobPosting = require("../models/jobPosting");
const User = require("../models/user");
const jobData = require("./jobPostingTest.json");
const userData = require("./userTest.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  const usersWithUuid = userData.map((user) => ({
    ...user,
    id: uuidv4(),
  }));

  const empolyers = await User.bulkCreate(usersWithUuid);
  for (const job of jobData) {
    await JobPosting.create({
      ...job,
      user_id: empolyers[Math.floor(Math.random() * empolyers.length)].id,
    });
  }
  process.exit(0);
};

seedDatabase();
