var Promise = require('bluebird');
var _ = require('lodash');
var professorsService = require('../../core/professors');

function query (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	Promise.all([
		professorsService.query(params),
		professorsService.countAll()
	]).spread(function (professors, count) {
		res.json({
			data: professors,
			totalCount: count
		});
	});
}

module.exports = {
	query: query
};
