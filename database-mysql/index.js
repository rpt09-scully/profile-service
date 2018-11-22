const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getAllUsers = () => {
  connection.query('SELECT * FROM profiles');
};

module.exports = {
  connection,
  getAllUsers
};

