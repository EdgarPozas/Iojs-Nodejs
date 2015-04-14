//importamos express despues de haberlo instalado
var express=require('express'),
//creamos la aplicacion
	app=express();
	//debido a que la estructura es una especie de MVC
	//en la carpeta controllers tendremos los controladores
	//importamos el archivo views.js
	views=require("./controllers/views/views.js");
//con esta linea indicamos que express va a usar la ruta que esta en esta raiz
//pero con nombre assets que van a ser donde se encuentre nuestros
//css
//js
//fonts
//images
app.use(express.static(__dirname+'/assets'));

//con esto decimos a express que use lo que contenga views
app.use(views);
//le decimos al servidor que escuche el puerto
//si lo esta escuchando imprima en la consola servidor creado
app.listen(80,function(){console.log("servidor creado")});