var $ = require('jquery');

function query () {
	return $.ajax({
		url: '/api/courses',
		method: 'GET'
	});
}

module.exports = {
	query: query
};
