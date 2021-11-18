

/* MySQL Database
================== 
You can download a free MySQL database at 
https://www.mysql.com/downloads/.
*/


/* Install MySQL Driver
======================== 
npm init -y 
npm install msql2
const mysql = require("mysql2");

*/


/* Create Connection
===================== */

const mysql = require("mysql2");

const connexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1_superPassword!"
});

connexion.connect (err => {
    if (err) throw err;
    console.log("Connected");
});


/* Query a Database
=====================  */
// connexion.connect (err => {
//     if (err) throw err;
//     console.log("Connected");
//       connexion.query(SQL_COMMAND_HERE, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });

