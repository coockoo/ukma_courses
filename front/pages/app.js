var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler,
	Link = Router.Link;
var TopBar = require('../components/topbar');


var AppViewPage = React.createClass({
	render: function () {
		return (
			<div>
				<TopBar />

				<div className="container-fluid">
					<RouteHandler />
				</div>
			</div>
		);
	}
});

module.exports = AppViewPage;