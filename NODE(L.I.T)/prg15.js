//database connection with nodejs and mysql (checking connection)
//alter user 'root'@'localhost' identified with mysql_native_password by 'root12345';
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root12345"
});
  
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected successfully!");
});