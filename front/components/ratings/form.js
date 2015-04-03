var React = require('react/addons');

var RatingForm = React.createClass({
	_onSubmit: function (e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
		this._clearForm();
	},
	_clearForm: function () {
		this.setState({
			name: ''
		});
	},
	getInitialState: function () {
		return {
			name: ''
		}
	},
	_onChange: function (e) {
		var changed = {};
		changed[e.target.name] = e.target.value;
		this.setState(changed);
	},
	render: function () {
		return (
			<form onSubmit={this._onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Title</label>
					<input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this._onChange}/>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Create" className="btn btn-primary"/>
				</div>
			</form>
		);
	}
});

module.exports = RatingForm;