/* 
___________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


Node.js Modules
================


What is a Module in Node.js ?
============================= 

A set of functions you want to include in your application.

Consider modules to be the same as JavaScript libraries: 


Built-in Modules
=================

Node.js has a set of built-in modules which you can use without 
any further installation.

Look at our Built-in Modules Reference for a complete list of modules.


Include Modules
================

To include a module, use the "require()" function with the name of 
the module: */

 // var http = require('http');

/*

Now your application has access to the HTTP module, and is able 
to create a server:         */

//	http.createServer( function( req, res) {
//	    res.writeHead( 200, {'Content-Type':'text/html'});
//	    res.end('Hello World Again !');
//	}).listen(8800);


/*

Create Your Own Modules
=========================

You can create your own modules, and easily include them in your 
applications.

The following example creates a module that returns a date and time object: */

//	exports.myDateTime = function() {
//	    return Date();
//	};

/*
Use the "exports" keyword to make properties and methods available 
outside the module file.

Save the code above in a file called "myfirstmodule.js"

*/

var http = require('http');
var dateAndTime = require ('./04-02_Node.js_Own_Modules.js')


http.createServer( function ( req, res) {
    res.writeHead( 200, {'Content-Type':'text/html'});
    res.write('The date and time are curently:' + dateAndTime.myDateTime());
    res.end("</br></br> OK ?")
})
.listen(8804);

/*

Notice that we use './' to locate the module, that means that 
the module is located in the same folder as the Node.js file.

Save the code above in a file called "demo_module.js", and 
initiate the file:

*/
