
/* Update Document
====================
You can update a document in MongoDBby using the 
"updateOne()" method.

"updateOne()" first parameter is a query object 
defining which document to update.

Note: If the query finds more than one record, 
      only the first occurrence is updated.

The second parameter is an object defining the new 
values of the document.                          */

// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if(err) throw err;
//     const database = db.db("w3schools_nodejs_database");
//     const target =  { address: "Valley 345" };
//     const newData = { $set: {name: "Mickey", address: "Canyon 123"} };
//     database.collection("customers").updateOne(target, newData, (err, res) => {
//         if (err) throw err;
//         // if(!res) throw ("Operation failed ! Try again");
//         console.log("Collection updated !");
//         db.close()
//     })
// });


 /* Update Only Specific Fields
 ===============================
When using the "$set" operator, only the specified 
fields are updated: */

// see above

/* Update Many Documents
=========================
To update all documents that meets the criteria of 
the query, use the updateMany() method. */

const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if(err) throw err;
    const database = db.db("w3schools_nodejs_database");
    const target =  { address: /^S/};
    const newValues = { $set: {name: "Minnie"} };
    database.collection("customers").updateMany(target, newValues, (err, res) => {
        if (err) throw err;
        console.log(`${res.result.nModified} document(s) updated !`);
        db.close()
    })
});


/* The Result Object
======================
The "updateOne()" and the "updateMany()" methods return 
an object which contains information about how the execution 
affected the database.

Most of the information is not important to understand, 
but one object inside the return object is called "result" 
which tells us if the execution went OK, and how many 
documents were affected.

The "result" object looks like this:

{ n: 1, nModified: 2, ok: 1 }

You can use this object to return the number of updated documents:

console.log(res.result.nModified);  // 2 
*/