var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler,
	Link = Router.Link;
var TopBar = require('../components/topbar');


var AppViewPage = React.createClass({
	render: function () {
		return (
			<div>
				<TopBar />

				<RouteHandler />
			</div>
		);
	}
});

module.exports = AppViewPage;