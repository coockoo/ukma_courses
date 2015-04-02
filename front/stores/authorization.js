/**
 * Authorization module
 * @module authorization
 */
var $ = require('jquery');
var store = require('store');
var _ = require('lodash');
var EventEmitter = require('../event-emitter');

var events = {
	'TOKEN_CHANGE': 'authorization:token:change'
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
			context.emit(events.TOKEN_CHANGE);
		}
	});
}

module.exports = _.extend({}, EventEmitter, {
	onTokenChanged: onTokenChanged,
	getToken: getToken,
	create: create
});
