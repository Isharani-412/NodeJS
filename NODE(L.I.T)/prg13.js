var mysql=require('mysql');

var con=musql.createConnection({
    host:"localhost",
    user:"root",
    password:"yoongi39", 
    database:"student"
}) ;
con.connect(function(err){
    if(err)throw err;
    con.qry="SELECT * FROM tab1",function(err,result,fields){
        if (err) throw err;
        console.log(result);
    }
   
});

