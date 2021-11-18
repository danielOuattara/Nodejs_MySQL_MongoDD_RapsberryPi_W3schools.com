
/* Filter the result
===================== 

When searching documents in a collection, you can filter the result 
by using a query object.

The first argument of the "find()" method is a query object, 
and is used to limit the search.                                    */


// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({address: "Park Lane 38"}).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });


/* Filter With Regular Expressions
=================================== 

You can write regular expressions to find exactly what 
you are searching for.

IMPORTANT: Regular expressions can only be used to query strings.
----------                                                       */

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").find({address: /^S/}).toArray( function(err, result) {
        if (err) throw err;
        console.log(result);
        console.table(result);
        db.close()
  })
});