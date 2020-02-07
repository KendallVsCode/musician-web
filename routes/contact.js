var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/', function(req, res, next) {
    // var Kitten = req.Kitten;
    console.log(req.body); // PROBLEM: it returns empty, while I expect req.body

    var transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
            port: 587,
            service:'yahoo',
            secure: false,
            auth: {
               user: 'kendalljones99@yahoo.com',
               pass: 'pukvnuzghmjppyse'
            },
            debug: false,
            logger: true 
    });
    
    var mailOptions = {
      from: 'kendalljones99@yahoo.com',
      to: 'kenmail99@yahoo.com',
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

    //res.redirect('/meow_response');
    next();
});

module.exports = router;