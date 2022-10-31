
/* Select With a Filter: WHERE
===============================

When selecting records from a table you can filter the selection 
by using the "WHERE" statement: */

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

// connexion.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result);
// })


/* Wildcard Characters
======================

You can also select the records that 'starts', 'includes', or 'ends' 
with a given letter or phrase. 
Use the '%' wildcard to represent zero, one or multiple characters:
 */

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

// connexion.query("SELECT * FROM customers WHERE address LIKE'S%'", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result);
// })
// connexion.query("SELECT * FROM customers WHERE address LIKE '%d%'", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result);
// })
// connexion.query("SELECT * FROM customers WHERE address LIKE '%2'", (err, result, fields) => {
//     if(err) throw err; 
//     console.log(result);
// })


/* SECURITY: Escaping Users Query Values 
============================================

When query values are variables provided by user input, you should 
escape the values. This is to prevent SQL injections, which is 
a common web hacking technique to destroy or misuse your database.

The MySQL module has methods to escape query values:
*/

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

const userAddress = 'Mountain 21';
const userName = 'Amy';

// 1 : MySQL module has methods to escape query values:
const sql = 'SELECT * FROM customers where address = ' + mysql.escape(userAddress);
connexion.query(sql, (err, result, fields) => {
    if(err) throw err; 
    console.log(result);
})

// 2 : You can also use a '?' as a placeholder for the values you want to escape.
const sql2 = 'SELECT * FROM customers WHERE address = ?';
connexion.query(sql2, [userAddress], (err, result, fields) => {
    if(err) throw err; 
    console.log(result);
})

// 3 : If you have multiple placeholders, the array contains multiple values, in that order:

const sql3 = 'SELECt * FROM customers WHERE name = ? OR address = ?';
connexion.query(sql3, [userName, userAddress], (err, result)=> {
    if(err) throw err;
    console.log(result);
})