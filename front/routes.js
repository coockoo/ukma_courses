var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppViewPage = require('./pages/app');

var AuthenticationViewPage = require('./pages/authentication/view');
var DashboardViewPage = require('./pages/dashboard/view');

module.exports = (
	<Route name="app" path="/" handler={AppViewPage}>
		<Route name="authenticate" handler={AuthenticationViewPage} />

		<DefaultRoute handler={DashboardViewPage} />
	</Route>
);
