// Cross-Origin Middleware
const crossOrigin = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // allow all http clients to make http requests to our api
    // allow requests with these types of http header options (important for jwt token authentication)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
    next();
};

module.exports = crossOrigin;

