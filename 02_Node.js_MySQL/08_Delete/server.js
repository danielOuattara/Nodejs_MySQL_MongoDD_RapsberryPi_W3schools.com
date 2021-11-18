

/* Delete Record
=================

You can delete records from an existing table by using 
the "DELETE FROM" statement:
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

const sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
connexion.query(sql,(err, result) => {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
});

/* Notice: The WHERE clause in the DELETE syntax specifies which 
           record or records that should be deleted. If you omit 
           the WHERE clause, all records will be deleted! 
*/

/* The Result Object
=======================

When executing a query, a result object is returned.
The result object contains information about how the query affected the table.
The result object returned from the example above looks like this: 

{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 34,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}

*/