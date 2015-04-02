var React = require('react/addons');
var Router = require('react-router');
var AuthorizationForm = require('../../components/authorizations/form');

var users = require('../../stores/users');

var NewUserPage = React.createClass({
	mixins: [Router.Navigation],
	_onSubmit: function () {
		users.create(this.state.credentials);
	},
	_onChange: function (update) {
		var newState = React.addons.update(this.state, {
			credentials: update
		});
		this.setState(newState);
	},
	_onCreated: function () {
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
	componentDidMount: function () {
		users.onUserCreated(this._onCreated);
	},
	render: function () {
		//TODO: change template to more sexy one
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


module.exports = NewUserPage;