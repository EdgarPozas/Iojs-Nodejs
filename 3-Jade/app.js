var express=require('express'),
	app=express(),
	views=require('./controllers/views/views.js');

//indicamos que se va a usar jade como motor de vistas
app.set('view engine','jade');

app.use(express.static(__dirname+'/assets'));

app.use(views);
app.listen(80,function(){console.log("servidor creado")});