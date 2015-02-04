var React = require('react');
//var AuthenticationForm = require('../../components/authentication/form');
//<AuthenticationForm />

var AuthenticationViewPage = React.createClass({
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-6 col-xs-offset-3">
					<div className="well">
						Auth
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AuthenticationViewPage;