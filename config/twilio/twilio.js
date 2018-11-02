const twilio = require("twilio");


var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'; // Your Account SID from www.twilio.com/console
var authToken = 'your_auth_token';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: process.env.MOBILE_NUMBER,  // Text this number
    from: process.env.MOBILE_NUMBER // From a valid Twilio number
})
.then((message) => console.log(message.sid));