var mysql=require('mysql');

var con=musql.createConnection({
    host:"localhost",
    user:"root",
    password:"yoongi39", 
    database:"student"
}) ;
con.connect(function(err){
    if(err)throw err;
    console.log("connected! ");
    var qry="INSERT INTO tab1(roll,name ,address) VALUES(1,isha,bbsr)";
    con.query(sql,function(err,result){
        if (err)throw err;
        console.log("1 record inserted ");
    });
});

