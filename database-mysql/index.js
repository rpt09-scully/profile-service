const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getUser = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM profiles WHERE prof_id = ${id}`, function (err, rows, fields) {
      if (err) throw err
      resolve(rows);
    })
  });

};

module.exports = {
  connection,
  getUser
};

