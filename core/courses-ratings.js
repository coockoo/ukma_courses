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

function getCourseTotals (params) {
	var where = _.pick(params, ['course_id']);
	return db('courses_ratings')
		.select('rating_id', db.raw('sum(case when value is not null then 1 else 0 end) as total'))
		.where(where)
		.groupBy('rating_id')
		.first();
}

function listRatings (params) {
	var builder = db('v_course_ratings');
	builder.select('v_course_ratings.*');
	builder.where({ course_id: params.course_id, user_id: params.user_id });
	builder.orderBy('id');
	if (params.totals) {
		var joinRaw = db.raw(getCourseTotals({course_id: params.course_id}).toString()).wrap('(', ') t');
		builder.select(db.raw('coalesce(t.total, 0) as total'));
		builder.leftJoin(joinRaw, 't.rating_id', 'v_course_ratings.id')
	}
	return builder;
}

var count = db.count('courses_ratings');

module.exports = {
	createOrUpdate: createOrUpdate,
	getCourseTotals: getCourseTotals,
	listRatings: listRatings
};
