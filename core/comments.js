var db = require('./db');
var _ = require('lodash');

function findById (id) {
	return db('comments').where('id', id).first();
}

function create (comment) {
	comment.created_at = 'now()';
	return db('comments').insert(comment, 'id').then(_.first);
}

function count (params) {
	return db('comments').where(params).count().first().then(function (data) {
		return data.count;
	});
}

module.exports = {
	findById: findById,
	create: create,
	count: count
};
