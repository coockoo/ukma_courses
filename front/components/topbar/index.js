var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TopBar = React.createClass({
	render: function () {
		return (

			<nav className="navbar navbar-default">
				<div className="container-fulid">
					<div className="navbar-header">
					</div>
					<div className="navbar-collapse">
						<ul className="nav navbar-nav">
							<li><Link to="app">Root</Link></li>
							<li><Link to="authentication">Auth</Link></li>
							<li><Link to="courses">All courses</Link></li>
							<li><Link to="ratings">All ratings</Link></li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = TopBar;