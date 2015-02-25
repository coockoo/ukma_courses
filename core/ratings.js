var db = require('./db');
var _ = require('lodash');

function query (params) {
	var builder = db('ratings');
	db.paginate(builder, params);
	return builder;
}
function count (params) {
	var where = params || {};
	return db('ratings').where(where).count().first().then(function (data) {
		return data.count;
	});
}
function create (params, t) {
	var builder = db('ratings');
	console.log('inserting params');
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
