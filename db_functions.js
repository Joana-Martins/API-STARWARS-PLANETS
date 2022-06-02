const mysql = require('mysql');

function createSqlConnection(){
    const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'db_planets'
    }) ;
    return con;
}

function createTable(con){
    var sql = `CREATE TABLE if not exists planets (id int not null auto_increment, name VARCHAR(255), 
    climate VARCHAR(255), ground VARCHAR(255), times_movies int, primary key(id) )`;
    con.query(sql, function (err, result){
        process.on('uncaughtException', function (err) {
            console.log(err);
        }); 
    });
}

module.exports = {createSqlConnection, createTable};