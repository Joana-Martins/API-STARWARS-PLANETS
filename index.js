const express = require("express");
const server = express();
server.listen(3000);
const mysql = require('mysql');
const db_functions = require("./db_functions");

const con = db_functions.createSqlConnection()
db_functions.createTable(con)

server.get('/', (req,res) => {
    res.send('Hello World jo');
});

