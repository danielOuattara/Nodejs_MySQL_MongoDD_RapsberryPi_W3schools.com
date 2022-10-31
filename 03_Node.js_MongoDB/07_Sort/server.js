
/* Sort the Result
=====================

Use the "sort()" method to sort the result in ascending or 
descending order.

The "sort()" method takes one parameter: an object defining 
the sorting order.  */

/* Sorting ascending on name value
================================= */

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find().sort({name: 1}).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         console.table(result);
//         db.close()
//   })
// });


/* Sort Descending
==================

Use the value -1 in the sort object to sort descending.

{ name: 1 } // ascending
{ name: -1 } // descending */


const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").find().sort({name:-1}).toArray( function(err, result) {
        if (err) throw err;
        console.table(result);
        db.close()
  })
});
