/* 
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
30 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________




What is NPM ?
==============

NPM is a package manager for Node.js packages, or modules if you like.

www.npmjs.com hosts thousands of free packages to download and use.

The NPM program is installed on your computer when you install Node.js


What is a Package?
===================

A package in Node.js contains all the files you need for a module.

Modules are JavaScript libraries you can include in your project.


Download a Package
===================

Downloading a package is very easy.

Open the command line interface and tell NPM to download the package you want.

I want to download a package called "upper-case":



Download "upper-case":
-----------------------
_________________________________________
C:\Users\Your Name>npm install upper-case 

Now you have downloaded and installed your first package!

NPM creates a folder named "node_modules", where the package will be placed. 
All packages you install in the future will be placed in this folder.

My project now has a folder structure like this:

__________________________________________
C:\Users\My Name\node_modules\upper-case


Using a Package
================

Once the package is installed, it is ready to use.

Include the "upper-case" package the same way you include any other module:
*/

var http = require('http');
var uc = require('upper-case');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(uc.upperCase("Hello world"));
    res.end();
}).listen(8808);