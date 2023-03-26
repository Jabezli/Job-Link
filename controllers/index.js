
// const User = require('../models/user');
// const JobPosting = require('../models/jobPosting');

const router = require("express").Router();
const api = require('./api/index');
const homeRoutes = require('./home');



router.use('/',homeRoutes)

 router.use("/api", api);

// router.get("/homepage", (req, res) => {
//   return res.render("homepage");
// });
// router.get('/', (req, res) => {
//   try {
//       User.findAll().then((employerData)=>{
//           res.json(employerData)
//       })
//   } catch (error) {
//       res.status(400).json({
//           status: 'error',
//           error: error.message
//       })
        
//   }

  
// })
// router.get('/job', (req, res) => {
//   try {
//       JobPosting.findAll().then((employerData)=>{
//           res.json(employerData)
//       })
//   } catch (error) {
//       res.status(400).json({
//           status: 'error',
//           error: error.message
//       })
        
//   }

  
// })
// router.get('/'(req,res))



module.exports = router;
