var express = require('express');
var bodyParser = require('body-parser');
var jwtExpress = require('express-jwt');
var config = require('../config/app');
var unauthorizedHandler = require('./middleware/unauthorized-handler');
var router = require('./router');
var _ = require('lodash');
//var debug = require('debug')('api/app');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../front'));

//app.use('/api', jwtExpress({secret: config.token}));
app.use('/api', unauthorizedHandler);

app.use('/api', router);


//TODO: move this to separate file
//TODO: move auth to promise-based thing. And react in router on errors thrown
var users = require('../core/users');
var jwt = require('jsonwebtoken');
app.post('/authenticate', function (req, res, next) {
	console.log('auth');
	console.log('body: ', req.body);
	console.log('params: ', req.params);

	var userToAuthenticate = req.body;
	if (_.isEmpty(userToAuthenticate)) {
		//TODO: replace this with error throw;
		res.status(400).json({status: 400, message: 'Cannot process empty request'});
		return;
	}
	if (_.isEmpty(userToAuthenticate.email) || _.isEmpty(userToAuthenticate.password)) {
		//TODO: replace this with error throw;
		res.status(400).json({status: 400, message: 'No email/password'});
		return;
	}
	return users.findByEmail(userToAuthenticate.email).then(function (user) {
		if (!user) {
			res.status(404).json({status: 404, message: 'No such user'});
			return;
		}
		//TODO: make password encryption
		if (user.password !== userToAuthenticate.password) {
			res.status(404).json({status: 404, message: 'Wrong password'});
			return;
		}
		user = _.omit(user, 'password');
		var token = jwt.sign(user, config.token);
		res.status(200).json({status: 200, data: {user: user, token: token}});
	});
});

app.listen(config.port);

console.log('Server started on port', config.port);
