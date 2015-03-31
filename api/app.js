var express = require('express');
var bodyParser = require('body-parser');
var jwtExpress = require('express-jwt');
var config = require('../config/app');

var apiRouter = require('./api-router');
var authorizationRouter = require('./authorization-router');

var app = express();
//TODO: replace this with nginx server and config
app.use(express.static(__dirname + '/../front'));
app.use(bodyParser.json());
//CORS:
app.use(function (req, res, next) {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

app.use('/api', apiRouter);
app.use('/authorizations', authorizationRouter);

app.listen(config.port);

console.log('Server started on port', config.port);
