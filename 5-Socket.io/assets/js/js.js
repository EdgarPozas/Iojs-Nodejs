$(document).on("ready",function(){
	//creamos la variable socket que se va a conectar al localhost
	//al servidor
	var socket=io.connect("http://localhost");
	//el socket va a escuchar el saludo de el servidor
	socket.on("saludo",function(data){
		//va a mostrar el saludo
		alert(data.msg);
		//va a emitir una respuesta
		socket.emit("respserv",{msg:"Hola desde El cliente"});
	});
});