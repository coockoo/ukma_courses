var db = require('./db');
var _ = require('lodash');

function createOrUpdate (params) {
	var where = _.pick(params, ['course_id', 'rating_id', 'user_id']);
	var updateData = _.pick(params, ['value']);
	var insertData = _.pick(params, ['course_id', 'rating_id', 'user_id', 'value']);
	return db('courses_ratings').update(updateData, 'id').where(where).then(function (ids) {
		if (ids && ids.length > 0) {
			return ids;
		}
		return db('courses_ratings').insert(insertData, 'id');
	}).then(_.first);
}

module.exports = {
	createOrUpdate: createOrUpdate
};
