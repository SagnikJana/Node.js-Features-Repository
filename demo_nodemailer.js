var nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sagnikjn@gmail.com',
    pass: 'santu@96'
  }
});

var mailOptions = {
  from: 'sagnikjn@gmail.com',
  to: 'sagnikjn@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});