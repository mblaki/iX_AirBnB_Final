const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();


// get all bookings
router.get('/', (req,res) => {
    // asynchronous function call structure 
    bookingServer.findAllBookings().then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

//create booking
router.post('/add', (req,res) => {
    // asynchronous function call structure 
    bookingServer.createBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});

// get Bookings with specific listingID and specific status
router.get('/listing/:listingID/:status', (req,res) => {
    // asynchronous function call structure 
    bookingServer.getBookingIdStat(req.params.listingID,req.params.status).then(bookings => {
         res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

// get Bookings with specific userID and specific status
router.get('/user/:userID/:status', (req,res) => {
    // asynchronous function call structure 
    bookingServer.getBookingUserIdStat(req.params.userID,req.params.status).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

// get Bookings with specific start date and specific en date
router.get('/listing/:start/:end', (req,res) => {
    // asynchronous function call structure 
    bookingServer.getBookingFromDates(req.params.start,req.params.end).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

//delete a booking with a specific bookingID
router.delete('/delete/:bookingID/', (req,res) => {
    // asynchronous function call structure 
    bookingServer.deleteBooking(req.params.bookingID).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

//update a booking with specific bookingID
router.post('/update/:bookingID', (req,res) => {
    // asynchronous function call structure 
    bookingServer.updateBooking(req.params.bookingID).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;

