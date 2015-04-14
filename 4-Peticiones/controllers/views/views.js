var express=require("express"),
	app=module.exports=express();

app.set("views",__dirname+"/views")

//rutas get
//cuando en la url ingreses esos daots
app.get("/",function(req,res){
	//el segundo parametro son datos a enviar ala vista
	res.render("views",{msg:"Inicial"});
});
app.get("/ruta1",function(req,res){
	//el segundo parametro son datos a enviar ala vista
	res.render("views",{msg:"ruta1"});
});
app.get("/ruta2",function(req,res){
	//el segundo parametro son datos a enviar ala vista
	res.render("views",{msg:"ruta2"});
});
//Post del formulario
app.post("/enviar",function(req,res){
	//req.body -> recibir datos de la vista
	// .txt es el name de el input
	console.log(req.body.txt);
	res.render("views",{msg:req.body.txt});
});