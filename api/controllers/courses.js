var service = require('../../core/courses');
var commentsService = require('../../core/comments');
var _ = require('lodash');
var Promise = require('bluebird');

function query (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	Promise.all([
		service.query(params),
		service.count()
	]).spread(function (courses, count) {
		res.json({
			data: courses,
			totalCount: count
		});

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
	Promise.all([
		service.queryComments(params),
		commentsService.count({course_id: params.id})
	]).spread(function (comments, count) {
		res.json({
			data: comments,
			totalCount: count
		});
	});
}

module.exports = {
	query: query,
	view: view,
	queryComments: queryComments
};
