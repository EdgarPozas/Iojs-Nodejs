var express=require("express"),
	app=module.exports=express();

app.set("views",__dirname+"/views")

app.get("/",function(req,res){
	//consultar para tener todos los usuarios
	db.Users.find().exec(function(err,us){
		if(!err){
			//mandamos los usuarios
			res.render("views",{msg:"Bienvenido",us:us});
		}
	});
});
app.post("/altas",function(req,res){
	//Crear un nuevo registro
	db.Users({
		Nombre:req.body.nombre,
		Apellido:req.body.apellido,
		Edad:req.body.edad
	}).save(function(err,us){
		if(!err){
			//redireccionar
			res.redirect("/");
		}
	});
});
app.post("/bajas",function(req,res){
	//eliminar
	db.Users.remove({Nombre:req.body.nombre}).exec(function(err,us){
		if(!err){
			//redireccionar
			res.redirect("/");
		}
	});
});
app.post("/actualizaciones",function(req,res){
	//actualizar
	db.Users.update({Nombre:req.body.nombre},{$set:{Apellido:req.body.apellido,Edad:req.body.edad}}).exec(function(err,us){
		if(!err){
			//rediccionar
			res.redirect("/");
		}
	});
});