var _ = require('lodash');

var service = require('../../core/comments');

function create (req, res) {
	var fields = ['course_id', 'title', 'content'];
	var params = _.pick(req.body, fields);
	service.create(params).then(function (id) {
		return service.findById(id);
	}).then(function (comment) {
		res.json(comment);
	});

}

module.exports = {
	create: create
};