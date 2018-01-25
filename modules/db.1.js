const mongoose = require('mongoose');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const ObjectId = require('mongodb').ObjectID;
const async = require('async');

const db_url = 'mongodb://localhost/BASHR';

module.exports = {
  getData(request, response, query, collectionName) {
    query = query || {};
    MongoClient.connect(db_url, function(err, db) {
      if (err)
        console.log('Unable to connect to the mongoDB server. Error:', err);
      else {
        const collection = db.collection(collectionName);
        collection.find(query).toArray(function(err, result) {
          if (result.length == 0) {
            result = { message: 'No results found.' };
          }
          response.send(result);
          db.close();
        });
      }
    });
  }
};
