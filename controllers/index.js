const router = require("express").Router();
const api = require('./api/index')

router.use('/api',api)


router.get('/homepage',(req,res)=>{
    return res.render('homepage');
});



module.exports = router;
