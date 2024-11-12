const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Management', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false
});

module.exports = sequelize;



// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node-complete',
//   password: 'Management'
// });

// module.exports = pool.promise();