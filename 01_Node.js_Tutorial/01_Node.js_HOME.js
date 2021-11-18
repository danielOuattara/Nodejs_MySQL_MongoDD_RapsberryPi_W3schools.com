/*
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________

Node.js Tutorial
=================

Node.js is an open source server environment.

Node.js allows you to run JavaScript on the server.
*/

var http = require ('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end("Hello World Of Server !");
}).listen(8801);

