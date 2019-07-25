const express = require('express');
const userRoutes = require("./src/api/user-routes");
const authRoutes = require("./src/api/auth-routes");
const bookingRoutes = require("./src/api/booking-routes");
const listingRoutes = require("./src/api/listing-routes");
const jwtVerify = require('./src/middleware/jwt-verify');  // jwt token middleware 
const crossOrigin = require('./src/middleware/cross-origin'); // cross-origin middleware 
const logger = require('./src/middleware/logger'); // logger middleware - logs http request

const app = express(); // create an instance of our express server called app
 
const PORT = process.env.PORT || 5000; // set our listening port to 5000 or the Node.js default 

//Middleware execute:
app.use(logger);
app.use(crossOrigin);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//App routes
app.use("/api/auth", authRoutes); // redirect authRoutes file
app.use("/api/users", jwtVerify.checkToken, userRoutes); // redirect userRoutes file and apply jwt token verification middleware
app.use("/api/listings", listingRoutes);
app.use("/api/bookings", bookingRoutes);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`)); // start express server and listen on port
