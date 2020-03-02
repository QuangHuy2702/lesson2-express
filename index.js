var express = require('express');
var app = express();
var port = 3000;

app.get('/', function(req, res){
	res.send('<h1>Hello my name is Huy<h1><a href="/users">User List<a>');
});

app.get('/users', function(req, res){
	res.send('User list');
})

app.listen(port , function(){
	console.log('Listening ' + port);
});