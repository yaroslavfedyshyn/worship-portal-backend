const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

const {
  smtpEmailFrom,
  smtpService,
  smtpUser,
  smtpPassword,
} = require('../../config');


const options = {
  viewEngine: {
    extname: '.hbs',
    layoutsDir: `${__dirname}/views/email/`,
    defaultLayout : '',
    partialsDir : `${__dirname}/views/partials/`
  },
  viewPath: `${__dirname}/views/email/`,
  extName: '.hbs'
};



const transport = nodemailer.createTransport({
  service: smtpService,
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

transport.use('compile', hbs(options));

async function sendEmail(to, subject, templater, context) {

  const message = {
    from: smtpEmailFrom, // Sender address
    to, // List of recipients
    subject, // Subject line
    template: templater || 'welcome',
    context
  };

  await transport.sendMail(message, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
      transport.close();
    }
  });
}

module.exports = sendEmail;
