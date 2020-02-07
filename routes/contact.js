var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/', function(req, res) {
    // var Kitten = req.Kitten;
    console.log(req.body); // PROBLEM: it returns empty, while I expect req.body

    var transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: 'kendalljones99@yahoo.com',
        pass: 'pukvnuzghmjppyse'
      }
    });
    
    var mailOptions = {
      from: 'kendalljones99@yahoo.com',
      to: 'kenmail99@gmail.com',
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

    res.redirect('/contact');
});

module.exports = router;