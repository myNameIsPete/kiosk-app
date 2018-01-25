const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const _orderBy = require('lodash').orderBy;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'BASHR';

module.exports = {
  getData: function(request, response, query, collectionName) {
    MongoClient.connect(url, (err, client) => {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      collection.find().toArray((err, result) => {
        const results =
          result.length === 0 ? { message: 'No results found.' } : result;
        // results = _orderBy(results, ['year'], ['desc']);

        response.send(results);
      });

      client.close();
    });
  }
};
