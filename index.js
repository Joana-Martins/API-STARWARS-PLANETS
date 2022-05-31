const express = require("express");
const server = express();
server.listen(3001);
const mysql = require('mysql');

const db = mysql.createPool({
    host:  'localhost',
    user: 'root',
    password: 'password',
    database: 'db_planets'
});

server.get('/', (req,res) => {
    res.send('Hello World jo');
    return res.json( { message: "Hello world"  } );
});

