const JobPosting = require("../../models/jobPosting");
const router = require("express").Router();

router.get("/", (req, res) => {
  try {
    JobPosting.findAll().then((employerData) => {
      res.json(employerData);
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      error: error.message,
    });
  }
});
module.exports = router;
