var $ = require('jquery');
var _ = require('lodash');

function query (params) {
	var data = _.pick(params, ['limit', 'offset']);
	return $.ajax({
		url: '/api/courses',
		method: 'GET',
		data: data
	});
}

function getById (id) {
	return $.ajax({
		url: ['/api/courses/', id].join(''),
		method: 'GET'
	});
}

function queryComments (params) {
	var data = _.pick(params, ['limit', 'offset']);
	return $.ajax({
		url: ['/api/courses/', params.id, '/comments'].join(''),
		data: data,
		method: 'GET'
	});
}

module.exports = {
	query: query,
	getById: getById,
	queryComments: queryComments
};
