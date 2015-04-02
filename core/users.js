var db = require('./db');
var _ = require('lodash');
var bcrypt = require('bcrypt');

function findById (id) {
	return db('users').where('id', id).first();
}

function findByEmail (email) {
	return db('users').where('email', email).first();
}

function create (user) {
	user.password = bcrypt.hashSync(user.password, 10);
	return db('users').insert(user, 'id').then(_.first);
}

module.exports = {
	findById: findById,
	findByEmail: findByEmail,
	create: create
};
