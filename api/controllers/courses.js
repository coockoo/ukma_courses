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

function queryComments (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	params.id = req.params.id;
	service.queryComments(params).then(function (comments) {
		res.json(comments);
	})

}

module.exports = {
	query: query,
	view: view,
	queryComments: queryComments
};
