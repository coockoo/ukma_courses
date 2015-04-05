var _ = require('lodash');

var usersService = require('../../core/users');

function view (req, res, next) {
	usersService.findById(req.user.id).then(function gotUser (user) {
		user = _.omit(user, ['password']);
		res.status(200).json(user);
	});
}

module.exports = {
	view: view
};
