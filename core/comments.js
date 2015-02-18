var db = require('./db');
var _ = require('lodash');

function findById (id) {
	return db('comments').where('id', id).first();
}

function create (comment) {
	comment.created_at = 'now()';
	return db('comments').insert(comment, 'id').then(_.first);
}

module.exports = {
	findById: findById,
	create: create
};
