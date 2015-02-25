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

function create (params) {
	var data = _.pick(params, ['name']);
	return $.ajax({
		url: '/api/ratings',
		method: 'POST',
		data: JSON.stringify(data)
	});

}

module.exports = {
	query: query,
	create: create
};
