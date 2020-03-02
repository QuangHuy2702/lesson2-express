var express = require('express');
var app = express();
var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res){
	res.render('index', {
		name: 'Huy',
	});
});
app.get('/users', function(req, res){
	res.render('./users/index', {
		users: [
		{name: 'coffee'},
		{name: 'bread'},
		{name: 'milk'}
		],
	});
})

app.listen(port , function(){
	console.log('Listening ' + port);
});