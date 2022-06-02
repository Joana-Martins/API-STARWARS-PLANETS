const express = require("express");
const bodyParser = require('body-parser');
const { app } = require("faker/lib/locales/en");
const server = express();
const mysql = require('mysql');
//const db_functions = require("./db_functions");
//const con = db_functions.createSqlConnection()
//db_functions.createTable(con)

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_planets'
}) ;

var table = `CREATE TABLE if not exists planets (id int not null auto_increment, name VARCHAR(255), 
    climate VARCHAR(255), ground VARCHAR(255), times_movies int, primary key(id) )`;

server.use(bodyParser.urlencoded({extended: true}))

server.post("/api/insert", (req,res)=>{
    console.log("oiooiii");
    const sqlInsert = "INSERT INTO planets (name, climate, ground, times_movies) VALUES (?,?,?,?)"
    db.query(sqlInsert,[Name,Climate,Ground, TimesMovies], (err,result)=>{

    });
});

server.listen(3000, () => {
    console.log("running on port 3000");
});
