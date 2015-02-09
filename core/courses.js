var db = require('./db');

function query (params) {
	var builder = db('courses');
	if (params.limit) {
		builder.limit(params.limit);
	}
	if (params.offset) {
		builder.offset(params.offset);
	}
	return builder;
}

function findAll () {
	return db('courses');
}

function findById (id) {
	return db('courses').where('id', id).first();
}

module.exports = {
	query: query,
	findAll: findAll,
	findById: findById
};
