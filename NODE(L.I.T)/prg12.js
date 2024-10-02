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
    var qry="INSERT INTO tab1(roll,name ,address) VALUES ?";
    var values=[
        [1,'isha','bbst'],
        [2,'ishaa','bbsr'],
        [3,'isha2','bbsm']
    ];
    con.query(sql,[values],function(err,result){
        if (err)throw err;
        console.log("numbers of record inserted:" + result.affaectedRows);
    });
});

