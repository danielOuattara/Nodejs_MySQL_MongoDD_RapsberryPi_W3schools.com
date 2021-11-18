/*
___________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


Node.js HTTP Module
====================


The Built-in HTTP Module
=========================

Node.js has a built-in module called "HTTP", which allows Node.js
to transfer data over the Hyper Text Transfer Protocol (HTTP).

To include the HTTP module, use the "require()" method:

// var http = require('http');

Node.js as a Web Server
========================

The "HTTP" module can create an "HTTP server" that listens to server
ports and gives a response back to the client.

Use the "createServer()" method to create an HTTP server:

*/

// var http = require('http');

// http.createServer( function( req, res) {
//     res.write('Hello Node.js !\n')  // write a response to the client
//     res.end("Fin du message Serveur...");  // end the response
// }).listen(8805);  // the server object listens on port 8805


/*

The function passed into the "http.createServer()" method, will be
executed when someone tries to access the computer on port 8805.

Save the code above in a file and initiate it:


Add an HTTP Header
===================

If the response from the "HTTP server" is supposed to be displayed as HTML,
you should include an "HTTP header" with the correct content type:       */

// var http = require('http');
// http.createServer (function (req, res) {
//     res.writeHead( 200, {'Content-Type':'text/html'});
//     res.write('<h1>Hello World Of Node.js !</h1>');
//     res.end("</br> Fin du message Serveur...");  // end the response
// }).listen(8805);


/*
The first argument of the "res.writeHead()" method is the status
code: 200, meaning that all is OK,

The second argument of "res.writeHead()" is an object containing
the response headers.


Read the Query String
======================

The function passed into the "http.createServer()" has an object 
as argument: "req", that represents the 'request' from the client 
("http.IncomingMessage object).

This object has a property called "url" which holds the part of
the url that comes after the domain name:  */


// var http  = require('http');

// http.createServer( function(req, res){
//     res.writeHead (200, {'Content-Type':'text/html'});
//     res.write('<h3>req.url = </h3>');
//     console.log("req.url = ", req.url)
//     res.write(req.url);

//     res.end();
//     console.log(res)

// }).listen(8805);


/* Save the code above in a *js file then initiate it:

If you have followed the same steps on your computer,
you should see two different results when opening these two addresses:

http://localhost:8080/summer  --> /summer

http://localhost:8080/winter  --> /winter



Split the Query String
=======================

There are built-in modules to easily split the query string into
readable parts, such as the "URL" module.
*/

var http = require('http');
var url = require('url');

http.createServer( function( req, res) {
    res.writeHead( 200, {'Content-Type': 'text/html'});

    // console.log("req.url = ", req.url);
    // console.log("url.parse(req.url, true) = ", url.parse(req.url, true));
    var q = url.parse( req.url, true).query;
    console.table(q);

    var text = q.year + " " + q.month + " " + q.day;
    res.write(text);
    res.end();

}).listen(8805);


/* Save the code above in a js file and initiate it:

The address: http://localhost:8805/?year=2017&month=July

Will produce this result:  2017 July  */
