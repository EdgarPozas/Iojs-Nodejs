var express=require("express"),
	app=module.exports=express();

//indicamos en que ruta estan las vistas
app.set("views",__dirname+"/views")

app.get("/",function(req,res){
	//se muestre la vista
	res.render("views");
});