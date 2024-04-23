 var http=require("http")

 http.createServer(function(rep,res){

    res.write("Hello my Freind ")
     res.end()

 }).listen(8080)
