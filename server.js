const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(express.static(__dirname + '/build'));

// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
   
//     const db = client.db(dbName);
   
//     client.close();
//   });

// app.listen(PORT, function() {
//     console.log(`Listening on port ${PORT}`);
// });

module.exports.app = app;
