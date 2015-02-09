var service = require('../../core/courses');
var _ = require('lodash');

function query (req, res) {
	var params = _.pick(req.query, ['limit', 'offset']);
	service.query(params).then(function (courses) {
		res.json(courses);
	});
}

module.exports = {
	query: query
};
