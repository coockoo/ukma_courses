var React = require('react/addons');
var Router = require('react-router');
var AuthorizationForm = require('../../components/authorizations/form');

var authorizations = require('../../stores/authorization');

var AuthorizationNewPage = React.createClass({
	mixins: [Router.Navigation],
	_onSubmit: function () {
		authorizations.create(this.state.credentials).then(this._onAuthorizationSuccess);
	},
	_onChange: function (update) {
		var newState = React.addons.update(this.state, {
			credentials: update
		});
		this.setState(newState);
	},
	_onAuthorizationSuccess: function () {
		this.transitionTo('app');
	},
	getInitialState: function () {
		return {
			credentials: {
				email: '',
				password: ''
			}
		}
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-6 col-xs-offset-3">
					<div className="well">
						<AuthorizationForm onSubmit={this._onSubmit} onChange={this._onChange} credentials={this.state.credentials} />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = AuthorizationNewPage;