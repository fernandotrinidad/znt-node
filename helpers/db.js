var mysql = require('mysql');

var pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'zenit',
        connectionLimit : 100
});
module.exports = pool;