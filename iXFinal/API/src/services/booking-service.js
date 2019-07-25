const Booking = require("../models/booking");

module.exports = class BookingService {
    
    constructor() {}
    
    // get all bookings
    findAllBookings()
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.findAllBookings((err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    //create booking
    createBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
                Booking.createBooking(bookingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
            });
        }

    // get Bookings with specific listingID and specific status
    getBookingIdStat(newBooking)
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.getBookingIdStat(newBooking, (err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    // get Bookings with specific userID and specific status
getBookingUserIdStat(newBooking)
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.getBookingUserIdStat(newBooking, (err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    // get Bookings with specific start date and specific en date
    getBookingFromDates(newBooking)
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.getBookingFromDates(newBooking, (err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    //delete a booking with a specific bookingID
    deleteBooking(newBooking)
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.deleteBooking(newBooking, (err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    //update a booking with specific bookingID
    updateBooking(newBooking)
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
             Booking.updateBooking(newBooking, (err, res) => {
                 if (err) {
                 reject(err);
                 }
                 resolve(res);
             });
        });
    }

    
}