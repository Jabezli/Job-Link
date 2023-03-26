const router = require('express').Router();
const User = require('../models/user');
const jobPosting = require('../models/jobPosting');
const JobPosting = require('../models/jobPosting');


router.get("/results ", (req, res) => {
    try {
      JobPosting.findAll().then((userData) => {
        res.json(userData);
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        error: error.message,
      });
    }
  });
router.get('/', async (req, res) => {
    const jobData = await jobPosting.findAll().catch((err) => {
        res.status(500).json(err)
    });
    const mutijobs = jobData.map((job) => job.get({ palin: true }));
    res.render('results', { mutijobs, loggedIn: req.session.loggedIn }) 

req.session.save(()=>{

})
})


router.get("/users", async (req, res) => {
    try {
        User.findAll().then((userData) => {
            res.json(userData);
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            error: error.message,
        });
    }
});


router.post("/create", async (req, res) => {
    try {
        const newProject = await JobPosting.create(req.body);

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.get("/job", async (req, res) => {
    try {
        jobPosting.findAll().then((userData) => {
            res.json(userData);
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            error: error.message,
        });
    }
});
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  


module.exports = router;