var React = require('react');
var routes = require('./routes');
var Router = require('react-router');


var $ = require('jquery');
$.ajaxSetup({
	contentType: 'application/json; charset=UTF-8'
});



Router.run(routes, function (Handler) {
	React.render(<Handler />, document.getElementById('container'));
});
