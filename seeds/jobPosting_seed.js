const { JobPosting } = require("../models");

const jobPostingData = [
  {
    Companyname: "Apple",
    Job_Title: "Senior Developer",
    Salary_Range: "> 200K",
    Office_Location: "Culver City",
    Years_of_Experience: "5 years",
    Description: "Come to our company to build a cool application",
   
  },
  {
    Companyname: "Bpple",
    Job_Title: "Senior Developer",
    Salary_Range: "> 500K",
    Office_Location: "Culver City",
    Years_of_Experience: "10 years",
    Description: "Come to our company to build a cool application",

  },
  {
    Companyname: "Apple",
    Job_Title: "Full Stack Developer",
    Salary_Range: "> 1000K",
    Office_Location: "Culver City",
    Years_of_Experience: "15 years",
    Description: "Come to our company to build a cool application",
    
  },
];

const seedJobPostings = () => {
  JobPosting.bulkCreate(jobPostingData);
};

module.exports = seedJobPostings;
