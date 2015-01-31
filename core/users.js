var Promise = require('bluebird');

function findById (id) {
	return Promise.resolve({
		id: id,
		name: 'Chief',
		email: 'superuser@mail.com',
		surname: 'Engineer',
		username: 'superuser',
		password: 'password'
	});
}

function findByEmail (email) {
	return Promise.resolve({
		id: 1,
		name: 'Chief',
		email: email,
		surname: 'Engineer',
		username: 'superuser',
		password: 'password'
	});
}

module.exports = {
	findById: findById,
	findByEmail: findByEmail
};
