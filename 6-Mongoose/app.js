//importamos los modelos
require("./models");
var express=require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	views=require('./controllers/views/views.js');

app.set('views',__dirname+'/views');
app.set('view engine','jade');
//usamos bodyparser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname+'/assets'));

app.use(views);

app.listen(80,function(){console.log("servidor creado")});