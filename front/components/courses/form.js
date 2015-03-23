var React = require('react');

var CourseForm = React.createClass({
	_onSubmit: function (e) {
		e.preventDefault();
		this.props.onSubmit(this.state);
	},
	getInitialState: function () {
		return {
			name: '',
			description: ''
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
				<div className='form-group'>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this._onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea id="description" name="description" className="form-control" value={this.state.description} onChange={this._onChange} rows="5"></textarea>
				</div>
				<div className="form-group text-right">
					<input type="submit" value="Create" className="btn btn-primary"/>
				</div>
			</form>
		);
	}
});

module.exports = CourseForm;