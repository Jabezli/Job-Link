const Employer = require('../../models/employer');
const router = require('express').Router();





router.get('/homepage',(req,res)=>{
    return res.render('results',Employer);
});



module.exports = router;