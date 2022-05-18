import nodeMailer from 'nodemailer';
import appConfig from '../configs/appConfig';

const sendMail = (to, subject, html) => {
  const transporter = nodeMailer.createTransport({
    host: appConfig.mailer.MAIL_HOST,
    port: appConfig.mailer.MAIL_PORT,
    secure: false,
    auth: {
      user: appConfig.mailer.MAIL_USERNAME,
      pass: appConfig.mailer.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: appConfig.mailer.MAIL_FROM_ADDRESS,
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export { sendMail };
