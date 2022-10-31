

/* Delete a Table
==================

You can delete an existing table by using the "DROP TABLE" statement:
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

// const sql = "DROP TABLE customers";
// connexion.query(sql,(err, result) => {
//     if (err) throw err;
//     console.log("Table deleted !");
// });

/* Drop Only if Exist
======================

If the the table you want to delete is already deleted, 
or for any other reason does not exist, you can use the 
"IF EXISTS" keyword to avoid getting an error.
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

const sql = "DROP TABLE IF EXISTS customers";
connexion.query(sql,(err, result) => {
    if (err) throw err;
    console.log("Table deleted !");
});


/* If the table exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

If the table does not exist, the result object will look like this:

{
  fieldCount: 0,
  affectedRows: 0,
  insertId: 0,
  serverstatus: 2,
  warningCount: 1,
  message: '',
  protocol41: true,
  changedRows: 0
}
As you can see the only differnce is that the warningCount 
property is set to 1 if the table does not exist.

 */