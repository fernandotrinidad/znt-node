var mysql = require('mysql');

var pool = mysql.createPool({
        host     : 'localhost',
        user     : 'root',
        password : 'DB-No-Trouble',
        database : 'zenit',
        connectionLimit : 100
});
module.exports = pool;
