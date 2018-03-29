"use strict"
var express=require("express"),
    app=express(),
    path=require("path");


app.use(express.static('public'));

app.get("/",function(req,res){
  res.sendFile(path.resolve(__dirname,'public',index.html));
})

app.listen(3000,function(){
  console.log("server started at 3000");
})
