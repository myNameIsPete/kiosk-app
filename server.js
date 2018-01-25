const express = require('express');
const app = express();
const db = require('./modules/db');

app.use(express.static('./public'));

// ==| ROUTES |=======================================

// Get All Inductees
app.get('/api/getAllMembers', (request, response) => {
  const query = {};
  db.getAllMembers(query, 'members', response);
});

// Get All Inductees & Group By Year
app.get('/api/getAllMembers/groupBy/year', (request, response) => {
  const query = {};
  db.getMembersGroupedByYear(query, 'members', response);
});

// Get All Inductees by Member Type
app.get('/api/getAllMembers/inMemberType/:member_type', (request, response) => {
  const query = { member_type: request.params.member_type };
  db.getMembersByType(query, 'members', response);
});

// Get All Inductees by Sport
app.get('/api/getAllMembers/inSport/:sport', (request, response) => {
  const query = { sport: request.params.sport };
  db.getMembersBySport(query, 'members', response);
});

// Get All Inductees by Sport AND Group By Year
app.get(
  '/api/getAllMembers/inSport/:sport/groupBy/year',
  (request, response) => {
    const query = { sport: request.params.sport };
    db.getMembersBySportGroupedByYear(query, 'members', response);
  }
);

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
