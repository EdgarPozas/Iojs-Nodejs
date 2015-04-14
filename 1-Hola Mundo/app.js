//importamos la libreria http
//para crear el servidor
var http = require('http');
//creamos el servidor y esre recibe 2 parametros
//req,res
//req -> peticiones que nos envian desde el cliente
//res -> respuestas que le damos desde el servidor
http.createServer(function (req, res) {
	//mandamos a escribir un archivo de texto plano
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//se va a escribir Hola mundo
	res.end('Hola mundo');
//el servidor va a estar escuchando en el puerto 80 de el localhost:80 o localhost
}).listen(80);
//si no hay ningun error se imprimira en la consola hola mundo
console.log('Hola mundo');