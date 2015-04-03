var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var AuthorizationForm = React.createClass({
	_onSubmit: function (e) {
		e.preventDefault();
		this.props.onSubmit();
	},
	_onChange: function (e) {
		var update = {};
		update[e.target.name] = { $set: e.target.value };
		this.props.onChange(update);
	},
	render: function () {
		return (
			<form onSubmit={this._onSubmit}>
				<div className='form-group'>
					<label htmlFor="email">Email</label>
					<input type="text" id="email" name="email" className="form-control" value={this.props.credentials.email} onChange={this._onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" name="password" className="form-control" value={this.props.credentials.password} onChange={this._onChange}/>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Sign in" className='btn btn-primary'/>
					<span> or <Link to="new-user">create account</Link></span>
				</div>
			</form>
		);
	}
});

module.exports = AuthorizationForm;
