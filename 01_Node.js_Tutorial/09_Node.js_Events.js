/* 
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
30 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


Node.js is perfect for event-driven applications.


Events in Node.js
==================

Every action on a computer is an event. Like when a connection is made or 
a file is opened.

Objects in Node.js can fire events, like the readStream object fires events 
when opening and closing a file:

*/

// var fs = require('fs');

// var rs = fs.createReadStream('./09_demofile.txt');

// rs.on('open', function () {
//     console.log("The file is open")
// });

// rs.on('closed', function () {
//     console.log("The file is closed")
// });


/* Events Module
=================


Node.js has a built-in module called "Events", where you can: 'create', 'fire', and 
'listen' for your own events.

To include the built-in Events module use the "require()" method. 
In addition all events properties and methods are an instance of 
an "EventEmitter" object. 

To be able to access these properties and methods, create an "EventEmitter" object:

_______________________________________________
var events = require('events');
var eventEmitter = new events.EventEmitter();


The EventEmitter Object
=======================

You can assign event handlers to your own events with the "EventEmitter" object.

In the example below we have created a function that will be executed when 
a "scream" event is fired.

To fire an event, use the emit() method.                                */


var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an event handler : 

var myEventHAndler = function () {
    console.log(' I hear a scream')
}

// Assign the event  handler to an event : 
eventEmitter.on('scream', myEventHAndler);

// Fire the 'scream' event : 
eventEmitter.emit('scream');