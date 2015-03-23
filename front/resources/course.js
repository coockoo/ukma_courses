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

function listRatings (params) {
	return $.ajax({
		url: ['/api/courses/', params.id, '/ratings'].join(''),
		method: 'GET'
	});
}

function updateRating (id, params) {
	var data =_.pick(params, ['id', 'value']);
	return $.ajax({
		url: ['/api/courses/', id, '/ratings'].join(''),
		data: JSON.stringify(data),
		method: 'PUT'
	});
}

function create (course) {
	var data = _.pick(course, ['name', 'description']);
	return $.ajax({
		url: '/api/courses',
		method: 'POST',
		data: JSON.stringify(data)
	});
}

module.exports = {
	query: query,
	getById: getById,
	queryComments: queryComments,
	listRatings: listRatings,
	updateRating: updateRating,
	create: create
};
