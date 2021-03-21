const sgMail = require("@sendgrid/mail");
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

class send {
    constructor() {
        console.log("send class was created! ");
        this.sendGridKey = process.env.SENDGRID_API_KEY;
        this.email = process.env.EMAIL;
        this.phone = process.env.PHONE;

    }
    mail({ to, subject, text }) {
        try {
            sgMail.setApiKey(this.sendGridKey);
            const msg = {
                to,
                from: this.email,
                subject,
                text
            };
            // await sgMail.send(msg);
            console.log("mail was sent to > ", to);
        } catch (error) {
            console.log(error.response.body);
        }
    }
    SMS({ to, body }) {
        try {
            const sms = {
                to,
                body,
                from: this.phone
            }
            // await client.messages.create(sms);
            console.log("SMS was sent to > ", to);
        } catch (error) {
            console.log(error.response.body);
        }
    }

}


module.exports = send;