var mysql=require('mysql');
const { createConnection } = require("mysql");

var con=musql.createConnection({
    host:"localhost",
    user:"root",
    password:"yoongi39"
}) ;
con.connect(function(err){
    if(err)throw err;
    console.log("connected successfully");


});