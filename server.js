const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./modules/db');

app.use(express.static('./public'));
app.use(cors());

// ==| ROUTES |=======================================

// Get All Inductees
app.get('/api/getAllMembers', (request, response) => {
  const query = {};
  db.getData(query, 'members', response);
});

// Get All Inductees & Group By Year
app.get('/api/getAllMembers/groupBy/year', (request, response) => {
  const query = {};
  db.getDataGroupedByYear(query, 'members', response);
});

// Get All Inductees by Member Type
app.get('/api/getAllMembers/inMemberType/:member_type', (request, response) => {
  const query = { member_type: request.params.member_type };
  db.getData(query, 'members', response);
});

// Get All Inductees by Sport
app.get('/api/getAllMembers/inSport/:sport', (request, response) => {
  const query = { sport: request.params.sport };
  db.getData(query, 'members', response);
});

// Get All Inductees by Sport AND Group By Year
app.get(
  '/api/getAllMembers/inSport/:sport/groupBy/year',
  (request, response) => {
    const query = { sport: request.params.sport };
    db.getMembersBySportGroupedByYear(query, 'members', response);
  }
);

// Get All Sport Categories
app.get('/api/getAllSports', (request, response) => {
  const query = {};
  db.getData(query, 'sports', response);
});

/* ===| POST DATA ==================================== */

// Create a new inductee member
app.post('/api/createMember/', function(request, response) {
  db.postData(request, response, 'members');
});

app.listen(3000, () => {
  console.log('Server is running on localhost:3000');
});
