var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var authorizations = require('../../stores/authorization');

var TopBar = React.createClass({
	getInitialState: function () {
		return {
			user: {
				username: '',
				email: ''
			}
		}
	},
	componentDidMount: function () {
		var user = authorizations.getCurrentUser();
		if (user) {
			var newState = React.addons.update(this.state, {
				user: {
					username: { $set: user.username },
					email: { $set: user.email }
				}
			});
			this.setState(newState);
		}
	},
	render: function () {
		var authorizationItem = null;
		if (authorizations.isAuthorized()) {
			authorizationItem = (
				<li><p className="navbar-text">Signed In as {this.state.user.username}</p></li>
			);
		} else {
			authorizationItem = (
				<li><Link to="new-authorization">Auth</Link></li>
			);
		}
		return (

			<nav className="navbar navbar-default">
				<div className="container-fulid">
					<div className="navbar-header">
					</div>
					<div className="navbar-collapse">
						<ul className="nav navbar-nav">
							<li><Link to="app">Root</Link></li>
							<li><Link to="courses">All courses</Link></li>
							<li><Link to="ratings">All ratings</Link></li>
						</ul>
						<ul className="nav navbar-nav pull-right">
							{authorizationItem}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = TopBar;