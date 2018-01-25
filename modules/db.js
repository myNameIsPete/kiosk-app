const MongoClient = require('mongodb').MongoClient;
const async = require('async');
const groupArray = require('group-array');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'BASHR';

function getData(query, collectionName, callback) {
  query = query || {};
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
}

function orderByYear(data, callback) {
  const members = groupArray(data, 'year');
  callback(null, members);
}

module.exports = {
  getAllMembers: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(getData, query, collectionName)],
      (err, result) => response.send({ result })
    );
  },

  getMembersGroupedByYear: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(getData, query, collectionName), orderByYear],
      (err, result) => response.send({ result })
    );
  },

  getMembersByType: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(getData, query, collectionName)],
      (err, result) => response.send({ result })
    );
  },

  getMembersBySport: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(getData, query, collectionName)],
      (err, result) => response.send({ result })
    );
  },

  getMembersBySportGroupedByYear: function(query, collectionName, response) {
    async.waterfall(
      [async.apply(getData, query, collectionName), orderByYear],
      (err, result) => response.send({ result })
    );
  }
};
