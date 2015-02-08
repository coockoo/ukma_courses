var events = {};

module.exports = {
	on: function (eventName, handler) {
		if (!events[eventName]) {
			events[eventName] = [];
		}
		events[eventName].push(handler);
	},
	emit: function (eventName, params) {
		if (events[eventName]) {
			events[eventName].each(function (event) {
				event(params);
			})
		}
	}
};