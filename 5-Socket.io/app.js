var express=require('express'),
	app=express(),
	//creamos un servidor con el modulo http
  	server=require('http').Server(app),
  	//importamos socket.io  y le mandamos el servidor
  	io=require("socket.io")(server),
	views=require('./controllers/views/views.js');
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.static(__dirname+'/assets'));

app.use(views);
//	creamos la coneccion		io.on("connection")
io.on("connection",function(socket){
	//recuperamos la socket y emitimos un saludo
	//y le enviamos en json un mensaje
	socket.emit("saludo",{msg:"Hola!!! desde el servidor"});
	//vamos a estar ala escucha de cuando envien respserv
	socket.on("respserv",function(data){
		//nos muestre el mensaje de el cliente
		console.log(data.msg);
	});
});
//el server este escuchando
server.listen(80,function(){console.log("servidor creado")});