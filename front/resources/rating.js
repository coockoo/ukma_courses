var $ = require('jquery');
var _ = require('lodash');

function query (params) {
	var data = _.pick(params, ['limit', 'offset']);
	return $.ajax({
		url: '/api/ratings',
		method: 'GET',
		data: data
	});
}

module.exports = {
	query: query
};
