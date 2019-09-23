const nodemailer = require('nodemailer');

const {
  smtpService,
  smtpUser,
  smtpPassword,
} = require('../config');

const transport = nodemailer.createTransport({
  service: smtpService,
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

async function sendEmail(email, subject, content) {
  const message = {
    from: 'worship-rock@gmail.com', // Sender address
    to: email, // List of recipients
    subject, // Subject line
    text: content, // Plain text body
  };

  await transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
}

module.exports = sendEmail;
