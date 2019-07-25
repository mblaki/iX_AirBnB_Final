const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

//login
router.post('/login', (req,res) => {
    // asynchronous function call structure 
    authServe.login(req.body).then(token => {
        res.json(token); 
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: false,
            message: err});
    });
});

//register
router.post('/register', (req,res) => {
    // asynchronous function call structure 
    authServe.register(req.body).then(user => {
        res.json(user); 
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: false,
            message: err});
    });
});

module.exports = router;