

/* Sort the Result: ORDER BY
=============================

Use the ORDER BY statement to sort the result in ascending or descending order.
The ORDER BY keyword sorts the result ascending by default. 
To sort the result in descending order, use the DESC keyword.
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

// 1 : Order BY ASC = default 
const sql1 = 'SELECT * FROM customers ORDER BY name'
connexion.query(sql1, (err, result, fields) => {
    if(err) throw err; 
    console.log(result);
})

// 2 : Order BY DSC
const sql2 = 'SELECT * FROM customers ORDER BY  name DESC '
connexion.query(sql2, (err, result, fields) => {
    if(err) throw err; 
    console.log(result);
})
