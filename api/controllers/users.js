var _ = require('lodash');
var usersService = require('../../core/users');

function create (req, res, next) {
	var data = _.pick(req.body, ['email', 'password']);
	// TODO: move to validators on email existence
	usersService.findByEmail(data.email).then(function (user) {
		if (user) {
			res.status(400).json({status: 400, message: 'User with this email exists'});
			return;
		}
		usersService.create(data).then(usersService.findById).then(function (user) {
			user = _.omit(user, ['password']);
			res.status(200).json(user);
		});
	});
}

module.exports = {
	create: create
};