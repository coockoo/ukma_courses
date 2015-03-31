var Promise = require('bluebird');
var db = require('./db');

function findById (id) {
	return db('users').where('id', id).first();
}

function findByEmail (email) {
	return db('users').where('email', email).first();
}

module.exports = {
	findById: findById,
	findByEmail: findByEmail
};
