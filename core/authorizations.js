var db = require('./db');
var _ = require('lodash');

function create (params) {
	return db('authorizations').insert(params, 'id').then(_.first);
}
function findByToken (token) {
	return find({token: token});
}
function findById (id) {
	return find({id: id});
}
function find (params) {
	return db('authorizations').where(params).first();
}

module.exports = {
	create: create,
	findById: findById,
	findByToken: findByToken,
	find: find
};
