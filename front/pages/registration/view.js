var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var RegistrationViewPage = React.createClass({
	render: function () {
		return (
			<div>
				Registration page here.
				<Link to="authentication">Log in</Link>
			</div>
		);

	}
});

module.exports = RegistrationViewPage;
