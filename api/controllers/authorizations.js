var _ = require('lodash');
var jwt = require('jsonwebtoken');
var config = require('../../config/authorization');
var bcrypt = require('bcrypt');

var authorizations = require('../../core/authorizations');
var users = require('../../core/users');

function create (req, res, next) {
	if (!req.body || !_.isObject(req.body)) {
		res.status(400).json({status: 400, message: 'Cannot process empty request'});
		return;
	}
	var credentials = _.pick(req.body, ['email', 'password']);
	if (_.isEmpty(credentials.email)) {
		res.status(400).json({status: 400, message: 'No email'});
		return;
	}
	if (_.isEmpty(credentials.password)) {
		res.status(400).json({status: 400, message: 'No password'});
		return;
	}
	console.log('got credentials %j', credentials);
	return users.findByEmail(credentials.email).then(function gotUser (user) {
		console.log('got user %j', user);
		if (!user) {
			res.status(404).json({status: 404, message: 'No such user'});
			return;
		}
		if (!bcrypt.compareSync(credentials.password, user.password)) {
			res.status(400).json({status: 400, message: 'Wrong password'})
		}
		var token = jwt.sign(user.email, config.secret);
		console.log('token for email %s is %s', user.email, token);
		var authorizationRecord = {user_id: user.id, token: token};
		return authorizations.find(authorizationRecord).then(function gotAuthorization (userAuthorization) {
			console.log('got user authorization %j', userAuthorization);
			if (!userAuthorization) {
				return authorizations.create(authorizationRecord).then(authorizations.findById);
			} else {
				return userAuthorization;
			}
		});
	}).then(function gotUserAuthorization (userAuthorization) {
		console.log('userAuth', userAuthorization);
		res.status(200).json(userAuthorization);

	});
}
function view (req, res, next) {
	res.status(200).json({});
}
function query (req, res, next) {
	res.status(200).json([]);
}

module.exports = {
	create: create,
	view: view,
	query: query
};
