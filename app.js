/*
 |--------------------------------------------------------------------------
 | Require Dependencies
 |--------------------------------------------------------------------------
 */
const express = require("express"),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    Api = require("./Api/Api"),
    port = process.env.PORT || 3000;


application = express();



/*
|--------------------------------------------------------------------------
|  Middleware
|--------------------------------------------------------------------------
*/
console.clear();


// to log requests
 application.use(morgan('dev'));
 
// parse application/json
application.use(bodyParser.json());
// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }));

require('dotenv').config();





/*
|--------------------------------------------------------------------------
| Api
|--------------------------------------------------------------------------
*/
application.use("/api/v1", Api);



/*
|--------------------------------------------------------------------------
| Start Server
|--------------------------------------------------------------------------
*/
application.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});