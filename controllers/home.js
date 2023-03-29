const router = require('express').Router();
const jobPosting = require('../models/jobPosting');
const moment = require('moment');

// homepage
router.get("/results", (req, res) => {
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

//rendering the job posting
router.get('/', async (req, res) => {
    const jobData = await jobPosting.findAll().catch((err) => {
        res.status(500).json(err)
    });

    const mutijobs = jobData.map((job) => {
        const formattedJob = job.get({ plain: true });
        formattedJob.createdAt = moment(job.createdAt).startOf('day').fromNow()
        formattedJob.updatedAt = moment(job.updatedAt).startOf('day').fromNow()
        return formattedJob;
    });
    // const mutijobs = jobData.map((job) => job.get({ palin: true }));
    res.render('results', { mutijobs, loggedIn: req.session.loggedIn })

    req.session.save(() => {

    })
});

// create job posting
router.post("/create", async (req, res) => {
    try {
        const newProject = await jobPosting.create(req.body);

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err);
    }
});

//json in 
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