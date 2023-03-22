const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/user')





router.post('/', async (req, res) => {
    try {
            const newUser =req.body 
            newUser.password = await bcrypt.hash(req.body.password, 3);
            const userData = await User.create(newUser);
            res.status(200).json(userData);
    } catch (error) {
        res.status(400).json(err)

    }
})