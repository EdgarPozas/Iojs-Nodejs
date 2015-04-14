//si no hay una base de datos registrada
if(!global.hasOwnProperty("db")){
	//importamos mongoose
	var mongoose=require("mongoose");
	//conectamos con la base de datos
	mongoose.connect("mongodb://localhost/database1");
	global.db={
		//importamos los modelos
		mongoose:mongoose,
		Users:require("./Users")(mongoose)
	};
}
module.exports=global.db;