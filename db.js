const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'CyprienDeRoef',
    password: 'password',
    database: 'wild_circus'
});

module.exports = connection;