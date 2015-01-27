var express = require('express');
var jwt = require('express-jwt');
var config = require('../config/app');
var unauthorizedHandler = require('./middleware/unauthorized-handler');

var app = express();

app.use('/api', jwt({secret: config.token}));
app.use(unauthorizedHandler);

app.get('/', function (req, res) {
	console.log('Hello, world!');
	res.send('Hello, world!');
});

app.listen(config.port);

console.log('Server started on port', config.port);
