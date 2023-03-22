const router = require("express").Router();
const employer = require('./api/Employer');


router.use('/employer', employer)
router.get('/', (req,res)=>{
    res.send('hi')
   
})

// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);

module.exports = router;
