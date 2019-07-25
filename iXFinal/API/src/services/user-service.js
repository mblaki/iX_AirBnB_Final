const User = require("../models/user");

module.exports = class UserService {
    
    constructor() {}
   
   findUsers()
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findAllUsers((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserByEmail()
   {        
       // return promise (asynchronous function method)
       // https://developbyers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            User.findUserByEmail((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }
    createUser(userReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            User.findUserByEmailAndPassword([userReq.email, userReq.password], (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    User.createUser(userReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("user already exists");
                }
            })
        });
    }

    deleteUser(userId) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
            User.removeUser(userId, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
    }

    updateUser(user) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
            User.updateUserById(user, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
    }

}