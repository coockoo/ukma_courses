var $ = require('jquery');

function query () {
	return $.ajax({
		url: '/api/courses',
		method: 'GET'
	});
}

function view (id) {
	return $.ajax({
		url: ['/api/courses/', id].join(''),
		method: 'GET'
	});
}

module.exports = {
	query: query,
	view: view
};
