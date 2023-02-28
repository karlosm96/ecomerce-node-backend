const nodeMailer = require('nodemailer');

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: "login",
        user: process.env.EMAIL,
        pass: process.env.EMAIL_APP_PASS
    }
})

module.exports = transporter;