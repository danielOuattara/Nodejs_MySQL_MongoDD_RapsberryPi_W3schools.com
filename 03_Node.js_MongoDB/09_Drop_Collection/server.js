
/* Drop Collection
===================

You can delete a collection (a table) by using the "drop()" method.

"drop()" takes a callback function containing the error object 
and the result parameter which returns "true" if the collection 
was dropped successfully, otherwise it returns "false".         */

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").drop(function(err, res) {
//         if (err) throw err;
//         if(!res) throw ("Operation failed ! Try again");
//         console.log("Collection deleted !");
//         db.close()
//   })
// });


/* db.dropCollection()
=======================

You can also use the "dropCollection()" method to delete a table (collection).

The "dropCollection()" method takes two parameters: the "name" of the collection 
and a "callback function". */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.dropCollection("w3schools_nodejs_database_blablabla", function(err, res) {
        if (err) throw err;
        if(!res) throw ("Operation failed ! Try again");
        console.log("Collection deleted !");
        db.close()
  })
});