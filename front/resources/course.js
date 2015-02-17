var $ = require('jquery');

function query () {
	return $.ajax({
		url: '/api/courses',
		method: 'GET'
	});
}

function getById (id) {
	return $.ajax({
		url: ['/api/courses/', id].join(''),
		method: 'GET'
	});
}

function queryComments (params) {
	return $.ajax({
		url: ['/api/courses/', params.id, '/comments'].join(''),
		method: 'GET'
	});
}

module.exports = {
	query: query,
	getById: getById,
	queryComments: queryComments
};
