
/* Insert Into Database
======================= */


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

// const sql = `INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway37')`;
// connexion.query(sql, (err, result) => {
//     if(err) throw err; 
//     console.log("... 1 customer successfully inserted !");
// })


/* Insert Multiple Records
=========================== */


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

// const sql = `INSERT INTO customers (name, address) VALUES ?`;
// const values = [
//     ['John'   , 'Highway 71'     ],
//     ['Peter'  , 'Lowstreet 4'    ],
//     ['Amy'    , 'Apple st 652'   ],
//     ['Hannah' , 'Mountain 21'    ],
//     ['Michael', 'Valley 345'     ],
//     ['Sandy'  , 'Ocean blvd 2'   ],
//     ['Betty'  , 'Green Grass 1'  ],
//     ['Richard', 'Sky st 331'     ],
//     ['Susan'  , 'One way 98'     ],
//     ['Vicky'  , 'Yellow Garden 2'],
//     ['Ben'    , 'Park Lane 38'   ],
//     ['William', 'Central st 954' ],
//     ['Chuck'  , 'Main Road 989'  ],
//     ['Viola'  , 'Sideway 1633'   ]
// ];
// connexion.query(sql, [values], (err, result) => {
//     if(err) throw err; 
//     console.log(` ${result.affectedRows} customers successfully inserted !`);
// });

/* The Result Object
====================

When executing a query, a "result object" is returned.
The "result object" contains information about how 
the query affected the table.

The "result object" returned from the example above 
looks like this:

{
  fieldCount: 0,
  affectedRows: 14,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '\'Records:14  Duplicated: 0  Warnings: 0',
  protocol41: true,
  changedRows: 0
} */


/* Get Inserted ID
==================== */


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

const sql = `INSERT INTO customers (name, address) VALUES ('Royal Pizza', 'Blue Village 1')`;
connexion.query(sql, (err, result) => {
    if(err) throw err; 
    console.log(` insertion ID: ${result.insertId}`);
})
