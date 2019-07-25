const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();

// get all listings
router.get('/', (req,res) => {
    // asynchronous function call structure 
    listingServer.findAllListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});

//create
router.post('/create', (req,res) => {
    // asynchronous function call structure 
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//get listing by userID or hostID
router.get('/:userID', (req,res) => {
    // asynchronous function call structure 
    listingServer.findListingByUserId(req.params.userID).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//update listing 
router.post('/update', (req,res) => {
    // asynchronous function call structure 
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});



module.exports = router;