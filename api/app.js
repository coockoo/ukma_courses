var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var appConfig = require('../config/app');
var authorizationConfig = require('../config/authorization');

var apiRouter = require('./api-router');
var authorizationRouter = require('./authorization-router');
var unauthorizedHandler = require('./middleware/unauthorized-handler');

var app = express();
//TODO: replace this with nginx server and config or different location at all
app.use(express.static(__dirname + '/../front'));
app.use(bodyParser.json());
//CORS:
app.use(function (req, res, next) {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.append('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
});

app.use('/api', expressJwt({secret: authorizationConfig.secret, userProperty: 'email'}));
app.use('/api', apiRouter);
app.use('/authorizations', authorizationRouter);
app.use('/api', unauthorizedHandler);


app.listen(appConfig.port);

console.log('Server started on port', appConfig.port);
