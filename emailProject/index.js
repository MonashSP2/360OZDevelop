const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) =>{
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Name: ${req.body.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `
    let transporter = nodemailer.createTransport({
      host: 'smtp.live.com',
      port: 587,
      secure: false,
      auth: {
        user: 'threesixtyoz@hotmail.com', // generated ethereal user
        pass: 'Developweb3600' // generated ethereal password
      },

    });
    let mailOptions = {
      from: 'threesixtyoz@hotmail.com', // sender address
      to: req.body.email, // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: htmlEmail // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg:'Email has been sent'});
    });

  })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
  console.log(`listen to 3000`);
})
