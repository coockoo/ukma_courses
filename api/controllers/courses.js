var service = require('../../core/courses');
var _ = require('lodash');

function query (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	service.query(params).then(function (courses) {
		res.json(courses);
	});
}

function view (req, res) {
	var id = req.params.id;
	service.findById(id).then(function (course) {
		res.json(course);
	});
}

module.exports = {
	query: query,
	view: view
};
