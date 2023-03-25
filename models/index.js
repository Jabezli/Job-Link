const User = require("./user");
const JobPosting = require("./jobPosting");

User.hasMany(JobPosting, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

JobPosting.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, JobPosting };
