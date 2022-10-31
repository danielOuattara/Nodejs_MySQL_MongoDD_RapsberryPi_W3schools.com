
/*
__________________________________________________
Daniel OUATTARA- daniel.ouattara_AT_gmx.com
03 01 2021
Node.js Tutorial :
https://www.w3schools.com/nodejs/
___________________________________________________



/* Delete Document
==================

To delete a record, or document as it is called in MongoDB, 
we use the "deleteOne()" method. The first parameter of the 
"deleteOne()" method is a query object defining which 
document to delete.

Note: If the query finds more than one document,
only the first occurrence is deleted. */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").deleteOne({address:'Mountain 21'}, function(err, object) {
        if (err) throw err;
        console.log("deleted = ", object.deletedCount);
        db.close()
  })
});


/* Delete Many
==============

To delete more than one document, use the "deleteMany()" method.
The first parameter of the "deleteMany()" method is a query object 
defining which documents to delete. */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    database.collection("customers").deleteMany({address:/^O/}, function(err, object) {
        if (err) throw err;
        console.log(result);
        console.log("deleted = ", object.result.n);
        db.close()
  })
});

