//Modelo de usuarios
module.exports=function(mongoose){
	//creamos un Schema
	var Users=new mongoose.Schema({
		//Los campos
		Nombre:String,
		Apellido:String,
		Edad:String
	});
	//regresamos el modelo ya creado
	return mongoose.model("Users",Users);
}