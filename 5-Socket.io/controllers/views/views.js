var express=require("express"),
	app=module.exports=express();

app.set("views",__dirname+"/views")

app.get("/",function(req,res){
	res.render("views");
});