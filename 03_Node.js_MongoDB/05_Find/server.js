
/* Find
============

In MongoDB we use the "findOne()" and "find()" methods to find data 
in a collection; just like the SELECT statement is used to find data 
in a table in a MySQL database.*/


/* FindOne() 
============

The "findOne()" method returns the FIRST OCCURRENCE in the selection.
The first parameter of the "findOne()" method is a query object. 
In this example we use an empty query object, which selects all 
documents in a collection (but returns only the first document).*/

// const { MongoClient } = require("mongodb")
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   const database = db.db("w3schools_nodejs_database");

//   database.collection('customers').findOne( {}, (err, res) => {
//     if(err) throw err;
//     console.log(res.name);
//     db.close();
//   });
// });


/*  Find()
==============

The find() method returns all occurrences in the selection.
The first parameter of the "find()" method is a query object. 
In this example below we use an empty query object, which 
selects all documents in the collection. */

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({}).toArray( (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });

/* Find Some 
===============

The second parameter of the "find()" method is the "projection object" 
that describes which fields to include in the result.

This parameter is optional, and if omitted, all fields will be included 
in the result.*/

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({}, {projection: { _id: 0, name: 1, address: 1} }).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });

/*  IMPORTANT: You are not allowed to specify both 0 and 1 values in the same 
               object except if one of the fields is the _id field. 
               If you specify a field with the value 0, all other fields get 
               the value 1, and vice versa: */


/* This example will exclude "address" from the result: */

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({}, {projection: { address: 0} }).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });



/* This example will return only the "name" field: */

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({}, { projection: { _id: 0, name: 1} }).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });


/* This example will give you the same result as the first example: 
   return all fields except the _id field: */

// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     database.collection("customers").find({}, { projection: { _id: 0} }).toArray( function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         db.close()
//   })
// });


/* The Result Object
=====================

As you can see from the result of the example above, the result can be 
converted into an array containing each document as an object.

To return e.g. the address of the third document, just refer to the third 
array object's address property: */

const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").find({}, { projection: { _id: 0} }).toArray( function(err, result) {
        if (err) throw err;
        console.log(result);
        console.table(result[2])
        console.log(result[2].address)
        db.close()
  })
});
