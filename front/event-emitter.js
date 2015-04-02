var _ = require('lodash');

var events = [];

module.exports = {
	on: function (eventName, handler) {
		if (!events[eventName]) {
			events[eventName] = [];
		}
		events[eventName].push(handler);
	},
	emit: function (eventName, params) {
		if (events[eventName]) {
			_.forEach(events[eventName], function (event) {
				event(params);
			});
		}
	}
};