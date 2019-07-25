const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    userServer.findUsers().then(users => {
        res.json({ // return object in specific formation {success: boolean, message: string, data: any} if there are no errors
            success: true,
            message: 'Authentication successful!',
            data: users
          });
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: true,
            message: err
        });
    });
});

//create
router.post('/create', (req,res) => {
    // asynchronous function call structure 
    userServer.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: true,
            message: err
        });
    });
});

//delete
router.post('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    userServer.deleteUser(req.params.id).then(user => {
        res.json({ // return object in specific formation {success: boolean, message: string, data: any} if there are no errors
            success: true,
            message: 'Authentication successful!',
            data: user
          });
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: true,
            message: err
        });
    });
});

//update
router.post('/update', (req,res) => {
    // asynchronous function call structure 
    userServer.updateUser(req.body).then(user => {
        res.json({ // return object in specific formation {success: boolean, message: string, data: any} if there are no errors
            success: true,
            message: 'Authentication successful!',
            data: user
          });
    }).catch(err => {
        res.json({ // return object in specific formation {success: boolean, message: string} if there are errors
            success: true,
            message: err
        });
    });
});

module.exports = router;