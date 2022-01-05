/*__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
30 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


The Built-in URL Module
=======================

The "URL" module splits up a web address into readable parts.

To include the "URL" module, use the "require()" method:
__________________________
var url = require('url');

Parse an address with the "url.parse()" method, and it will return 
a URL object with each part of the address as properties:  */

// var url = require('url');

// var adress = 'http://localhost:8807/default.htm?year=2020&month=february&time=zulu&season=winter';
// var q = url.parse(adress, true);
// console.log(`q =`, q);


/*The parse method returns an object containing url properties*/

// console.log(q.host);     //returns 'localhost:8807'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search);   //returns '?year=2017&month=february'


/* The query property returns an object with all the querystring 
parameters as properties  */ 

// var qdata = q.query;  // return an object :  {year: 2020 , month: 'february' }
// console.log(qdata.month);



/* Node.js File Server
======================

Now we know how to parse the query string, and in the previous chapter we learned 
how to make Node.js behave as a file server. Let us combine the two, and serve 
the file requested by the client.

Create two html files and save them in the same folder as your node.js files. */


var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer( function( req, res){
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." +  q.pathname;
    console.log(filename);

    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type' : ' text/html'});
            return res.end("Error 404 : Page Not Found");
        }
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        return res.end()
    });

}).listen(8807);


// http://localhost:8807/07_summer.html
// http://localhost:8807/07_winter.html