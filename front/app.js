var React = require('react/addons');
var routes = require('./routes');
var Router = require('react-router');

var $ = require('jquery');

var authorizations = require('./stores/authorization');

$.ajaxSetup({
	dataType: 'json',
	contentType: 'application/json; charset=UTF-8'
});
onTokenChanged();

authorizations.onTokenChanged(onTokenChanged);

function onTokenChanged () {
	var token = authorizations.getToken();
	if (token) {
		$.ajaxSetup({
			headers: {
				'Authorization':  token ? 'Bearer ' + authorizations.getToken() : null
			}
		});
	}
}

global.jQuery = $;

Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('container'));
});
