var db = require('./db');

function query (params) {
	var builder = db('courses');
	db.paginate(builder, params);
	return builder;
}

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

module.exports = {
	query: query,
	queryComments: queryComments,
	findAll: findAll,
	findById: findById
};
