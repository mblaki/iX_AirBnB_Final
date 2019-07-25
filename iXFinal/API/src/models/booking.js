var mysqlConn = require("../database/database");

//Task object constructor
var Booking = (booking) => {
    this.id = booking.id;
    this.userId = booking.userId;
    this.listingId = booking.listingId;
    this.hostId = booking.hostId;
    this.status = booking.status;
    this.startDate = booking.startDate;
    this.endDate = booking.endDate;
};

// get all bookings
Booking.findAllBookings = (result) => {
    mysqlConn.query("Select * from bookings", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//create booking
Booking.createBooking = (newBooking, result) => {
    mysqlConn.query("INSERT INTO bookings set ?", newBooking, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// get Bookings with specific listingID and specific status
Booking.getBookingIdStat = (newBooking, result) => {
    mysqlConn.query("Select * from bookings where listingId = ? and status = ?", newBooking, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// get Bookings with specific userID and specific status
Booking.getBookingUserIdStat = (newBooking, result) => {
    mysqlConn.query("Select * from bookings where userId = ? and status = ?", [newBooking.userId, newBooking.status], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

// get Bookings with specific start date and specific en date
Booking.getBookingFromDates = (newBooking, result) => {
    mysqlConn.query("Select * from bookings where dateStart = ? and dateEnd = ?", [newBooking.dateStart, newBooking.dateEnd], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//delete a booking with a specific bookingID
Booking.deleteBooking = (bookingID, result) => {
    mysqlConn.query("DELETE FROM bookings WHERE id = ?", bookingID, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//update a booking 
Booking.updateBooking = (newBooking, result) => {
    mysqlConn.query("UPDATE bookings SET userid = ?, listingid = ?, hostid = ?, status = ?, dateStart = ?, dateEnd = ? WHERE id = ?", [newBooking.userId, newBooking.listingId, newBooking.hostId, newBooking.status, newBooking.dateStart, newBooking.dateEnd, newBooking.id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
 };
module.exports = Booking;