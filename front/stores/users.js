/**
 * Users store
 * @module users
 */
var $ = require('jquery');
var _ = require('lodash');

var EventEmitter = require('../event-emitter');

var events = {
	'USER_CREATED': 'users:created'
};

/** Create new user using input credentials */
function create (credentials) {
	var context = this;
	return $.ajax({
		url: '/api/users',
		method: 'POST',
		data: JSON.stringify(credentials)
	}).done(function (data) {
		context.emit(events.USER_CREATED, data);
	});
}

/** Add listener on user created */
function onUserCreated (handler) {
	this.on(events.USER_CREATED, handler);
}

module.exports = _.extend({}, EventEmitter, {
	create: create,
	onUserCreated: onUserCreated
});