const router = require("express").Router();
const employer = require('./Employer');
const userRoute = require('./userRoute')


router.use('/employer', employer);
router.use('/user', userRoute)



module.exports = router;