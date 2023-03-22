const Employer = require('./employer');
// const jobApplication = require('./jobApplication');
const JobPosting = require('./jobPosting');
const User = require('./user');
User.belongsToMany(JobPosting,{
    through:{
        model
    }
})