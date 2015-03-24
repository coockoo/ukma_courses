var db = require('./db');

function query (params) {
	var builder = db('courses');
	db.paginate(builder, params);
	builder.orderBy('id');
	return builder;
}

var count = db.count('courses');

function findAll () {
	return db('courses');
}

function findById (id) {
	return db('courses').where('id', id).first();
}

function queryComments (params) {
	var builder = db('comments').where('course_id', params.id).orderBy('created_at', 'desc');
	db.paginate(builder, params);
	return builder;
}

function listRatings (params) {
	var builder = db('v_course_ratings');
	builder.where('course_id', params.id);
	//TODO: replace this with user_id
	builder.where('user_id', 1);
	builder.orderBy('id');
	return builder;
}

function create (course) {
	return db('courses').insert(course, 'id');
}

function update (id, data) {
	return db('courses').update(data, 'id').where({id: id});
}


module.exports = {
	query: query,
	count: count,
	queryComments: queryComments,
	findAll: findAll,
	findById: findById,
	listRatings: listRatings,
	create: create,
	update: update
};
