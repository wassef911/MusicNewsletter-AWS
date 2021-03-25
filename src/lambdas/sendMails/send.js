const sgMail = require("@sendgrid/mail");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const email = ({ to, subject, html }) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to,
            from: "1.wassef911@gmail.com",
            subject,
            html
        };
        // await sgMail.send(msg);
        console.log("mail was sent to > ", to);
    } catch (error) {
        console.log(error.response.body);
    }
};
const SMS = ({ to, body }) => {
    try {
        const sms = {
            to,
            body,
            from: "+14807507830"
        }
        // await    
        console.log("SMS was sent to > ", to);
    } catch (error) {
        console.log(error.response.body);
    }
}


module.exports = { email, SMS };