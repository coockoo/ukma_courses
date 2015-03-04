var React = require('react');

var CourseRatingListItem = React.createClass({
	_onChange: function (e) {
		e.preventDefault();
		var changed = {id: this.props.rating.id, value: e.target.value};
		this.props.onChange(changed);
	},
	getInitialState: function () {
		return {
			value: 0
		}
	},
	render: function () {
		return (
			<div className="form-group">
				<label htmlFor={'course-rating' + this.props.rating.id} className="col-xs-3">{this.props.rating.name}</label>
				<div className="col-xs-6">
					<input type="text" id={'course-rating' + this.props.rating.id} name={'course-rating' + this.props.rating.id} value={this.props.rating.value} className="form-control" onChange={this._onChange}/>
				</div>
			</div>
		);
	}
});

module.exports = CourseRatingListItem;