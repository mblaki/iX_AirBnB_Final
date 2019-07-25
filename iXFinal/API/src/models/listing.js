var mysqlConn = require("../database/database");

//Task object constructor
var Listing = (listing) => {
    this.title = listing.title;
    this.location = listing.location;
    this.description = listing.description;
    this.capacipty = listing.capacipty;
    this.price = listing.price;
    this.hostId = listing.hostId;
};

Listing.findAllListings = (result) => {
    mysqlConn.query("Select * from listings", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

Listing.findListingByUserId = (userID, result) => {
    mysqlConn.query("Select * from listings where hostId = ?", userID, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

Listing.createListing = (newListing, result) => {
    mysqlConn.query("INSERT INTO listings set ?", newListing, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//update a listing 
Listing.updateListing = (newListing, result) => {
    mysqlConn.query("UPDATE listings SET id = ?, title = ?, location = ?, description = ?, capacity = ?, price = ?, hostId = ? WHERE id = ?", [newListing.id, newlisting.title, newlisting.location, newlisting.description, newlisting.capacity, newlisting.price, newlisting.hostId], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
 };

 Listing.updateListingById = (listing, result) => {

    // create query to update user
    let query = "UPDATE listings SET "; // update part of MySQL query
    let keys = Object.keys(listing); // get keys / parameters of user object
    let listingArray = []; // create empty array which will be our input parameters / columns for the MySQL query
    keys.forEach(key => { // loop through our array of user object keys
        if (key != "id") { // do not update the userId
            query = query + key + " = ?, " // add insert query parameter for each key / column
            listingArray.push(listing[key]); // push the value (associated with the key  parameter in the line above) that we want to insert into our MySQL table 
        }
    });
    query = query.substring(0, query.length-2); // remove the (, ) section at the end of our current query string so that the query syntax is correct
    query = query + " WHERE id = ?"; // add the part of the query to update by userId
    listingArray.push(listing.id); // this is the userId associated with the row we want to update

    mysqlConn.query(query, listingArray, (err, res) => { // perform our query. The userArray contains all the values we want to insert and the id specifying the row we want to update
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
};

module.exports = Listing;