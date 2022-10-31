
/* Selecting from a table 
=====================================*/

// const mysql = require("mysql2");

// const connexion = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1_superPassword!",
//     database: "w3schools_nodejs_db"
// });

// connexion.connect (err => {
//     if (err) throw err;
//     console.log("... Connected !");

//     connexion.query("SELECT * FROM customers", (err, result, fields) => {
//         if(err) throw err; 
//         console.log(result);
//     })
// });



/* Selecting Some Columns
=========================*/

// const mysql = require("mysql2");

// const connexion = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1_superPassword!",
//     database: "w3schools_nodejs_db"
// });

// connexion.connect (err => {
//     if (err) throw err;
//     console.log("... Connected !");
// });

// connexion.query("SELECT name, address FROM customers", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result);
// })


/* The Result Object
======================= 

As you can see from the result of the example above, the "result object" 
is an array containing each row as an object.*/

// const mysql = require("mysql2");
// const connexion = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "1_superPassword!",
//     database: "w3schools_nodejs_db"
// });

// connexion.connect (err => {
//     if (err) throw err;
//     console.log("... Connected !");
// });

// connexion.query("SELECT name, address FROM customers", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result[2].address);
// })


/* The Fields Object
====================

The third parameter of the callback function is an array containing 
information about each field (columns) in the table */


const mysql = require("mysql2");
const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1_superPassword!",
    database: "w3schools_nodejs_db"
});

connexion.connect (err => {
    if (err) throw err;
    console.log("... Connected !");
});

connexion.query("SELECT * FROM customers", (err, result, fields) => {
    if(err) throw err; 
    console.log(fields);
    console.log("--------------------");
    console.log(fields[1].name);
})