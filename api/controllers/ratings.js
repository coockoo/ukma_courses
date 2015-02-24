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

module.exports = {
	query: query
};
