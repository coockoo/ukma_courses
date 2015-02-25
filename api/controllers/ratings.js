var Promise = require('bluebird');
var _ = require('lodash');

var ratingsService = require('../../core/ratings');

function query (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	Promise.all([
		ratingsService.query(params),
		ratingsService.count()
	]).spread(function (ratings, count) {
		res.json({
			data: ratings,
			totalCount: count
		});
	});
}

function create (req, res) {
	var params = _.pick(req.body, ['name']);
	ratingsService.create(params).then(function (id) {
		console.log('created', id);
		return ratingsService.findById(id);
	}).then(function gotRating (data) {
		console.log('found by id', data);
		res.json(data);
	});
}

module.exports = {
	query: query,
	create: create
};
