//importamos nuevamente express
//indicamos que se cree la aplicacion
var express=require("express"),
	app=module.exports=express();

//cuando obtenga / se ejecute una funcion
app.get("/",function(req,res){
	//como respuesta vamos a enviarle el archivo views.html
	//que esta en la carpeta views
	res.sendFile(__dirname+"/views/views.html");
});