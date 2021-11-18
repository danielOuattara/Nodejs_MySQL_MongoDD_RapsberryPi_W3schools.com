
/* Create a Database
===================== */

const mysql = require("mysql2");

const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1_superPassword!"
});

connexion.connect (err => {
    if (err) throw err;
    console.log("... Connected !");
});

connexion.query("CREATE DATABASE w3schools_nodejs_db", (err, result) => {
    if(err) throw err;
    console.log("... Datbase created !");
})


