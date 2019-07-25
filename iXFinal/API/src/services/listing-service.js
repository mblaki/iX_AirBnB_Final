const Listing = require("../models/listing");

module.exports = class ListingService {
    
    constructor() {}

createListing(new_listing) {
    // return promise (asynchronous function method)
    // https://developers.google.com/web/fundamentals/primers/promises
    return new Promise((resolve, reject) => {
            Listing.createListing(new_listing, (err, res) => {
                if (err) {
                  reject(err);
                }
                resolve(res);
            });
        });
    }


findAllListings()
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Listing.findAllListings((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }


findListingByUserId(userID)
   {        
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {        
            Listing.findListingByUserId(userID,(err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   updateListing(new_listing) {
    return new Promise((resolve, reject) => {
            Listing.updateListingById(new_listing, (err, res) => {
                if (err) {
                  reject(err);
                }
                resolve(res);
            });
        });
    }

}

