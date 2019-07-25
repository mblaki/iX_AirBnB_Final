const UserService = require('./user-service');
const User = require("../models/user");
const userServer = new UserService();
const jwt = require('jsonwebtoken'); // jwt library
const config = require('../config/config'); // jwt token secret

module.exports = class AuthService {
    constructor() {}

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

    login(userInput) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
            User.findUserByEmailAndPassword([userInput.email, userInput.password], (err, res) => {
                if (err) {
                    reject(err);
                }
                else if (res.length > 0) { // database returns a user or an array larger than length 0

                    let token = jwt.sign({username: userInput.email},
                        config.secret,
                        { expiresIn: '24h' // expires in 24 hours
                        }
                      );
                      // return the JWT token for the future API calls
                      resolve({ // return object in specific formation {success: boolean, message: string, data: any} if there are no errors
                        success: true,
                        message: 'Authentication successful!',
                        data: token
                      });
                }
                else {
                    reject("user does not exist");
                }
            });
       });    
    }

    register(user) {
        let userName = user.email;
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => { 
            userServer.createUser(user).then(userReturned => {
                let token = jwt.sign({username: userName},
                    config.secret,
                    { expiresIn: '24h' // expires in 24 hours
                    }
                  );
                  // return the JWT token for the future API calls
                  resolve({ // return object in specific formation {success: boolean, message: string, data: any} if there are no errors
                    success: true,
                    message: 'Authentication successful!',
                    data: token
                  });
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}