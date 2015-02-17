var $ = require('jquery');

function queryByCourseId (courseId) {
	return $.ajax({
		url: ['/api/courses/', courseId, '/comments'].join(''),
		method: 'GET'
	});
}

module.exports = {
	queryByCourseId: queryByCourseId

};
