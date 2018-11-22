const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');
const exampleData = require('../example-data.json');


const app = express();
const PORT = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/user/:id', function (req, res) {
  db.getUser(req.params.id)
  .then((rawUserData) => {
    const rawData = rawUserData[0];
    let userData = {
      "data": {
        "type": "users",
        "id": rawData.prof_id,
        "attributes": {
          "first_name": rawData.first_name,
          "last_name": rawData.last_name,
          "email": rawData.email,
          "location": rawData.location,
          "date_joined": rawData.date_joined.toJSON().substring(0,10),
          "favorite_activities": ["Hunting", "Hiking", "Fishing"], // Need to pull real data
          "bio": rawData.bio,
          "photo_url": rawData.photo_url,
          "pro": !!+rawData.pro
        }
      }
    }

    return userData;
  })
  .then((userData) => {
    res.send(userData);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
