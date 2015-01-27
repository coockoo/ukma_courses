var express = require('express');
var config = require('../config/app');

var app = express();

app.get('/', function (req, res) {
	console.log('Hello, world!');
	res.send('Hello, world!');
});

app.listen(config.port);

console.log('Server started on port', config.port);
