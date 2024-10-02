var http=require('httpf')
http.createServer(function(req,res){
    console.log('server is running')
    res.write("welcom back.")

}).listen(6000)