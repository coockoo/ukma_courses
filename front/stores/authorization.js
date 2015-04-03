/**
 * Authorization module
 * @module authorization
 */
var $ = require('jquery');
var store = require('store');
var _ = require('lodash');
var EventEmitter = require('../event-emitter');

var events = {
	'TOKEN_CHANGE': 'authorization:token:change',
	'USER_CHANGE': 'authorization:user:change'
};

/** Add listener to token change event */
function onTokenChanged (handler) {
	this.on(events.TOKEN_CHANGE, handler);
}

/** Returns the current token that stored in the system */
function getToken () {
	return store.get('token');
}

/** Updates localstorage and sets token to token */
function setToken (token) {
	return store.set('token', token);
}

/** Make request to the server and creates session with this credentials */
function create (credentials) {
	var context = this;
	return $.ajax({
		method: 'POST',
		url: '/authorizations',
		data: JSON.stringify(credentials)
	}).done(function done (data) {
		if (data && data.token) {
			setToken(data.token);
			fetchCurrentUser();
			context.emit(events.TOKEN_CHANGE);
		}
	});
}

function fetchCurrentUser () {
	return $.ajax({
		method: 'GET',
		url: '/api/user'
	}).done(function done (user) {
		if (user) {
			setUser(user);
			context.emit(events.USER_CHANGE);
		}
	})
}

/** Returns the current user (authorized) by token in the localstorage */
function getCurrentUser () {
	return store.get('user');
}

/** Saves user into localstorage.user */
function setUser (user) {
	return store.set('user', user);
}

function isAuthorized () {
	return !!getToken() && !!getCurrentUser();
}

module.exports = _.extend({}, EventEmitter, {
	onTokenChanged: onTokenChanged,
	getToken: getToken,
	create: create,
	getCurrentUser: getCurrentUser,
	isAuthorized: isAuthorized
});
