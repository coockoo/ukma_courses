var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var _ = require('lodash');

var CourseForm = React.createClass({
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
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" className="form-control" value={this.props.course.name} onChange={this._onChange}/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<textarea id="description" name="description" className="form-control" value={this.props.course.description} rows="5" onChange={this._onChange}></textarea>
				</div>
				<div className="form-group text-right">
					<input type="submit" value={this.props.submitName || "Submit"} className="btn btn-primary"/>
					<Link to="courses" className="btn btn-default">{this.props.rejectName || "Cancel"}</Link>
				</div>
			</form>
		);
	}
});

module.exports = CourseForm;