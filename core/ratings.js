var db = require('./db');
var _ = require('lodash');

function query (params) {
	var builder = db('ratings');
	db.paginate(builder, params);
	return builder;
}
var count = db.count('ratings');
function create (params, t) {
	var builder = db('ratings');
	builder.insert(params, 'id');
	if (t) {
		builder.transacting(t);
	}
	return builder.then(_.first);
}
function findById (id) {
	return db('ratings').where('id', id).first();
}

module.exports = {
	query: query,
	count: count,
	create: create,
	findById: findById
};
