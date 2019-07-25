var mysqlConn = require("../database/database");

//Task object constructor
var User = (user) => {
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
};

User.createUser = (newUser, result) => {
    mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findUserByEmail = (userEmail, result) => {
    mysqlConn.query("Select * from user where email = ?", userEmail, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findUserByEmailAndPassword = (userLogin, result) => {
    mysqlConn.query("Select * from user where email = ? and password = ?", userLogin, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.findAllUsers = (result) => {
    mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

User.updateUserById = (user, result) => {

    // create query to update user
    let query = "UPDATE user SET "; // update part of MySQL query
    let keys = Object.keys(user); // get keys / parameters of user object
    let userArray = []; // create empty array which will be our input parameters / columns for the MySQL query
    keys.forEach(key => { // loop through our array of user object keys
        if (key != "id") { // do not update the userId
            query = query + key + " = ?, " // add insert query parameter for each key / column
            userArray.push(user[key]); // push the value (associated with the key  parameter in the line above) that we want to insert into our MySQL table 
        }
    });
    query = query.substring(0, query.length-2); // remove the (, ) section at the end of our current query string so that the query syntax is correct
    query = query + " WHERE id = ?"; // add the part of the query to update by userId
    userArray.push(user.id); // this is the userId associated with the row we want to update

    mysqlConn.query(query, userArray, (err, res) => { // perform our query. The userArray contains all the values we want to insert and the id specifying the row we want to update
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
};

User.removeUser = (userId, result) => {
    mysqlConn.query("DELETE FROM user WHERE id = ?", userId, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(null, err);
        } else {
        result(null, res);
        }
    });
};

module.exports = User;