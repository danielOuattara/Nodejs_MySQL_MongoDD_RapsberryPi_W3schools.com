/* 
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
31 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


Node.js Send an Email
=====================

The Nodemailer Module
---------------------

The "Nodemailer" module makes it easy to send emails from your computer.

The "Nodemailer" module can be downloaded and installed using :
 "npm install nodemailer"

After you have downloaded the "Nodemailer" module, you can include 
the module in any application:
_______________________________________
var nodemailer = require('nodemailer');


Send an Email
==============

Now you are ready to send emails from your server.

Use the username and password from your selected email provider to send 
an email. 
This tutorial will show you how to use your Gmail account to send an email: */

var nodemailer = require ('nodemailer');

 var transporter = nodemailer.createTransport( {
     service: 'gmail',
     auth: {
         user:  'ricatti.ricci@gmail.com',
         pass:  'CoplanFX15'
     }
 });

 var mailOptions = {
     from:  'ricatti.ricci@gmail.com',
     to:    'ricatti@gmx.com',
     subject:  'Sending email using Node.js',
     text: 'Node.js is fun !'
 };

 transporter.sendMail( mailOptions, function (error, info) {
     if (error) {
         console.log(error);
     }

     console.log('Email sent: ' + info.response);
 

 });


/* Multiple Receivers
======================

To send an email to more than one receiver, add them to the "to" 
property of the mailOptions object, separated by commas: */

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  } 


  /* Send HTML
  =============

To send HTML formatted text in your email, use the "html" property 
instead of the "text" property: */

var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
  } 