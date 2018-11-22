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
  const test = db.getUser(req.params.id);
  res.send(exampleData);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
