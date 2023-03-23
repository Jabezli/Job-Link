const router = require("express").Router();
const employer = require('./api/Employer');


router.use('/employer', employer)
router.get('/', (req,res)=>{
    res.send('hi')
   
})

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;
