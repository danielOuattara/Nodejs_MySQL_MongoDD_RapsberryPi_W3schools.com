/*
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 12 2020
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________


Node.js File System Module
===========================


Node.js as a File Server
=========================

The Node.js "file system module" allows you to work with the file
system on your computer.

To include the File System module, use the "require()" method:
_________________________
var  fs = require('fs');

NOTE:

Common use for the File System module:
--------------------------------------
    > Create files
    > Read files
    > Rename files
    > Update files
    > Delete files


Read Files
===========

The "fs.readFile()" method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder
as Node.js): "06_demo.html"

Then create a Node.js file that reads the HTML file, and return
the content:  */

// var http = require('http');
// var fs   = require('fs');

// http.createServer( function( req, res) {
//     fs.readFile( './06_demo.html', function( err, data) {
//         if (err) throw err;
//         res.writeHead( 200,  {'Content-Type':'text/html'});
//         res.write(data);
//         console.log('06_demo.html fs.read() : DONE !')
//         return res.end();
//     })

// }).listen(8806);


/*
Save the code above in a js file and initiate it:


Create Files
=============

The File System module has methods for creating new files:

   > fs.appendFile()
   > fs.open()
   > fs.writeFile()


==> The "fs.appendFile()" method appends specified content to a file.
If the file does not exist, the file will be created:  */

// var fs = require('fs');

// fs.appendFile(
//     '06-02_demo.txt', 
//     " Testing fs.appendFile() function", 
//     function (err) {
//     if (err) {
//         throw err;
//     }
//     console.log('fs.appendFile(): DONE !');
// });


// fs.appendFile(
//     '06-03_demo.html',
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Creating File with Node.js</title>
//     </head>
//     <body>
//         <h1>Node.js File System Module Tutorial</h1>
//         <p>My paragraph.</p>

//     </body>
//     </html>`, 
//     function (err) {
//         if (err) throw err;
//     console.log('Saved');
// });


/*
==> The "fs.open()" method takes a "flag" as the second argument, 
if the flag is "w" for "writing", the specified file is opened for writing.
If the file does not exist, an empty file is created:           */


// var fs = require('fs');

// fs.open('06-03_demo.txt', 'w', function( err, file) {
//     if (err) throw err;
//     console.log('06-03_demo.txt fs.open(): DONE !')
// });



/*
==> The "fs.writeFile()" method replaces the specified file and content
if it exists. If the file does not exist, a new file, containing
the specified content, will be created:
*/


// var fs =  require('fs');

// fs.writeFile(
//     '06-04_demo.txt', 
//     'fs.writefile(): content changed! or creted if none', 
//     function(err){
//         if (err) throw err;
//         console.log('fs.writeFile() : DONE !');
// });


/* Update Files
================

The File System module has methods for updating files:

  >  fs.appendFile()
  >  fs.writeFile()


==> The "fs.appendFile()" method appends the specified content
at the end of the specified file: */


// var fs = require ('fs');

// fs.appendFile(
//     '06-02_demo.txt', 
//     'This text is update by appendFile()', 
//     function(err) {
//         if (err) throw err;
//         console.log('fs.appendFile() | 06-02_demo.txt : update DONE ! ')
// });



/*
==> The "fs.writeFile()" method replaces the specified file and
content: */

// var fs = require('fs');

// fs.writeFile(
//     '06-05_demo.txt', 
//     'File (create) update by writeFile() !', 
//     function (err) {
//         if (err) throw err;
//         console.log('fs.writeFile() | 06-05_demo.txt UPDATED !');
// });



/* Delete Files
=================

To delete a file with the File System module, use the
"fs.unlink()" method. This method deletes the specified file:
*/

// var fs = require('fs');

// fs.unlink(
//     '06_06_to_delete.txt', 
//     function(err) {
//         if (err) throw err;
//         console.log('Filed Unlinked DONE !')
// })


/* Rename Files
================

To rename a file with the File System module,  use the "fs.rename()"
 method that renames the specified file: */

// var fs = require('fs');

// fs.rename('06-toto.txt', '06-tutu.txt', function(err) {
//     if(err)  {
//         throw err;
//     };
//     console.log(' 06-toto.txt RENAMED to 06-tutu.txt ! DONE')
// });


/* Upload Files
  =============

You can also use Node.js to upload files to your computer.

Read how in our Node.js Upload Files chapter.
*/
