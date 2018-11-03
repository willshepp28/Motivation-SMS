const twilio = require("twilio");
const axios = require("axios");
require('dotenv').load();



var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_TOKEN;   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: "Hello how are you doing",
    to: process.env.MOBILE_NUMBER,  // Text this number
    from: process.env.TWILIO_NUMBER // From a valid Twilio number
})
.then((message) => console.log(message.sid));