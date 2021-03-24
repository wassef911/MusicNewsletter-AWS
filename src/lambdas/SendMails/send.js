const sgMail = require("@sendgrid/mail");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const mail = ({ to, subject, text }) => {
    try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to,
            from: process.env.EMAIL,
            subject,
            text
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
            from: process.env.PHONE
        }
        // await client.messages.create(sms);
        console.log("SMS was sent to > ", to);
    } catch (error) {
        console.log(error.response.body);
    }
}


module.exports = { mail, SMS };