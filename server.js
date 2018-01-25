const express = require('express');
const app = express();
const db = require('./modules/db');

app.use(express.static('./public'));

// ==| ROUTES |=======================================

// Get All Inductees
app.get('/api/members', (request, response) => {
  const query = {};
  db.getData(request, response, query, 'members');
});

// Get All Inductees & Order by Year
app.get('/api/members/orderedBy/year', (request, response) => {
  const query = {};
  db.getData(request, response, query, 'members');
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
