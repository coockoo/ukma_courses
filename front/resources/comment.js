var $ = require('jquery');

function create (data) {
	return $.ajax({
		method: 'POST',
		url: '/api/comments',
		data: JSON.stringify(data)
	});
}

module.exports = {
	create: create
};
