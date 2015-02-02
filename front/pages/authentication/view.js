var AuthenticationForm = require('../../components/authentication/form');

var AuthenticationViewPage = React.createClass({
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-6 col-xs-offset-3">
					<div className="well">
						<AuthenticationForm />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AuthenticationViewPage;