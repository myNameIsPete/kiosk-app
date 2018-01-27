const MongoClient = require('mongodb').MongoClient;
const async = require('async');
const groupArray = require('group-array');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'BASHR';

function executeQuery(query, collectionName, callback) {
  query = query || {};
  try {
    MongoClient.connect(url, (err, client) => {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);

      collection.find(query).toArray((err, result) => {
        const members =
          result.length === 0 ? { message: 'No results found.' } : result;
        callback(null, members);
      });

      client.close();
    });
  } catch (err) {
    console.log(err);
  }
}

function orderByYear(data, callback) {
  const members = groupArray(data, 'year');
  callback(null, members);
}

module.exports = {
  getData: (query, collectionName, response) => {
    executeQuery(query, collectionName, (err, data) => {
      if (err) return err;
      response.send({ data });
    });
  },

  getDataGroupedByYear: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(executeQuery, query, collectionName), orderByYear],
      (err, result) => response.send({ result })
    );
  },

  postData: function(request, response, collectionName) {
    MongoClient.connect(url, (err, client) => {
      try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        collection.insert(request.body, function(err, result) {
          response.send({ _id: result.ops[0]._id });
          db.close();
        });
      } catch (err) {
        console.log(err);
      }
    });
  }
};
