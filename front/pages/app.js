var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler,
	Link = Router.Link;


var AppViewPage = React.createClass({
	render: function () {
		return (
			<div>
				<Link to="app">Root</Link>
				<Link to="authenticate">Auth</Link>

				<RouteHandler />
			</div>
		);
	}
});

module.exports = AppViewPage;