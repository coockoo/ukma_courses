var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var AuthenticationForm = React.createClass({
	_onSubmit: function (e) {
		console.log('state', this.state);
		e.preventDefault();
	},
	_onChange: function (e) {
		var changed = {};
		changed[e.target.name] = e.target.value;
		this.setState(changed);
	},
	getInitialState: function () {
		return {
			email: null,
			password: null
		};
	},
	render: function () {
		return (
			<form onSubmit={this._onSubmit}>
				<div className='form-group'>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" className="form-control" value={this.state.email} onChange={this._onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" className="form-control" value={this.state.password} onChange={this._onChange}/>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Sign in" className='btn btn-primary'/>
					<span> or <Link to="registration">create account</Link></span>
				</div>
			</form>
		);
	}
});

module.exports = AuthenticationForm;
