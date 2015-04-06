var service = require('../../core/courses');
var commentsService = require('../../core/comments');
var coursesRatingsService = require('../../core/courses-ratings');
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

function listRatings (req, res) {
	coursesRatingsService.listRatings({course_id: req.params.id, totals: true, user_id: req.user.id}).then(function gotUserCourseRatings (ratings) {
		res.json({
			data: ratings,
			totalCount: ratings.length
		});
	});
}

function updateRating (req, res) {
	var data = {
		course_id: req.params.id,
		rating_id: req.body.id,
		value: req.body.value,
		user_id: req.user.id
	};
	coursesRatingsService.createOrUpdate(data).then(function onCourseRatingUpdated (id) {
		//todo: what to return?
		res.json({id: id});
	});
}

function create (req, res) {
	var data = _.pick(req.body, ['name', 'description']);
	service.create(data).then(function (ids) {
		res.json({ids: ids});
	});
}

function update (req, res) {
	var data = _.pick(req.body, ['name', 'description']);
	var id = req.params.id;
	service.update(id, data).then(_.first).then(function (id) {
		res.json({id: id});
	});
}

module.exports = {
	query: query,
	view: view,
	queryComments: queryComments,
	listRatings: listRatings,
	updateRating: updateRating,
	create: create,
	update: update
};
