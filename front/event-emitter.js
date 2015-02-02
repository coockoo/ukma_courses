//requires lodash
function EventEmitter () {
	var events = {};
	return {
		on: function (eventName, handler) {
			if (!events[eventName]) {
				events[eventName] = [];
			}
			events[eventName].push(handler);
		},
		emit: function (eventName, params, context) {
			var self = this;
			if (events[eventName]) {
				events[eventName].each(function (event) {
					event.call(context || this, params);
				})
			}
		}
	}
}