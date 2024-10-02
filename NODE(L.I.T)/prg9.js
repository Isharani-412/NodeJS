var mysql=require('mysql');
const {createConnection} = require("mysql");

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"yoongi39"
}) ;
con.connect(function(err){
    if(err)throw err;
    console.log("connected successfully");
    var qry="CREATE DATABASE employee"
    con.query(qry,function(err,result){
        if (err)throw err;
        console.log("database created");
    });
    });

