const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'tln123fk@yahoo.com',
      pass: 'ulcf wdon yvts apqq'
    }
  });

let mailOptions = {
    from: 'tln123fk@yahoo.com',
    to: 'tln123fk@gmail.com',
    subject: 'message from',
    text: 'That was easy!'
  };

app.get('/submit', (req, res)=> {
    mailOptions.subject = 'message from ' + req.query.name;
    mailOptions.text = (req.query.message + " from " + req.query.email);
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          return res.redirect(301, 'https://www.tomsisserman.com/error.html');   
        } else {
          return res.redirect(301, 'https://www.tomsisserman.com/thankyou.html');
        }
      });   
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('app is running on port ', process.env.PORT);
  })