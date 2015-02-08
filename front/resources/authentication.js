var $ = require('jquery');
var store = require('store');

function authenticate (credentials) {
	$.ajax({
		method: 'POST',
		url: '/authenticate',
		data: JSON.stringify(credentials),
		contentType: 'application/json; charset=UTF-8'
	}).done(function (data) {
		console.log('authenticated', data);
		setToken(data.token);
		setUser(data.user);
	}).fail(function () {
		console.log('fail', arguments);
	});
}

function setToken (token) {
	store.set('token', token);
}

function setUser (user) {
	store.set('user', user);
}

function getUser () {
	return store.get('user');
}

module.exports = {
	authenticate: authenticate,
	getUser: getUser
};
