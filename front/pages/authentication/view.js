var React = require('react');
var AuthenticationForm = require('../../components/authentication/form');
var Authentication = require('../../resources/authentication');

var AuthenticationViewPage = React.createClass({
	_onSubmit: function (credentials) {
		Authentication.authenticate(credentials);
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-6 col-xs-offset-3">
					<div className="well">
						<AuthenticationForm onSubmit={this._onSubmit} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AuthenticationViewPage;