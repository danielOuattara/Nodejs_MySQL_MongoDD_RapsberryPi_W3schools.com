
/* Create a Database
===================== */

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

// const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255) )";
// connexion.query(sql, (err, result) => {
//     if(err) throw err; 
//     console.log("... customers table created !");
// })



/* Primary Key
=============== */

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

// const sql = `CREATE TABLE users (userId INT AUTO_INCREMENT PRIMARY KEY, 
//              name VARCHAR(255), address VARCHAR(255) )`;
// connexion.query(sql, (err, result) => {
//     if(err) throw err; 
//     console.log("... users table created !");
// })


/* If the table already exists, use the ALTER TABLE keyword:
------------------------------------------------------------ */

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

// const sql = `ALTER TABLE customers ADD COLUMN customerID INT AUTO_INCREMENT PRIMARY KEY`;
// connexion.query(sql, (err, result) => {
//     if(err) throw err; 
//     console.log("... customers table altered !");
// })