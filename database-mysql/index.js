const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getUser = (id) => {
  connection.query(`SELECT * FROM profiles WHERE prof_id = ${id}`, function (err, rows, fields) {
    if (err) throw err
    
    console.log(rows);
  })

};

module.exports = {
  connection,
  getUser
};

