/*
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________

Node.js Get Started
===================


Download Node.js
=================

The official Node.js website has installation instructions 
for Node.js: https://nodejs.org


Getting Started
================

Once you have downloaded and installed Node.js on your computer,
let's try to display "Hello World" in a web browser.

Create a Node.js file named "myfirst.js", and add the following code:  */

var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("Hello World Again - Node.js: Get Started- W3Schools.com");
}).listen(8803);


/* Save the file on your computer: C:\Users\Your Name\myfirst.js

The code tells the computer to write "Hello World..." if anyone
(e.g. a web browser) tries to access your computer on port "8803".

For now, you do not have to understand the code. It will be explained later.


Command Line Interface
========================

Node.js files must be initiated in the "Command Line Interface" program
of your computer.

How to open the command line interface on your computer depends on the
operating system. For Windows users, press the start button and look
for "Command Prompt", or simply write "cmd" in the search field.

Navigate to the folder that contains the file "myfirst.js"


Initiate the Node.js File
==========================

The file you have just created must be initiated by Node.js before any
action can take place.

Start your command line interface, write:          */

// node myFileName.js  // and hit enter:

/*

*************************************************

Now, your computer works as a server!

If anyone tries to access your computer on port 8803, they will get a
"Hello World..." message in return!

Start your internet browser, and type in the address: http://localhost:8803 */
