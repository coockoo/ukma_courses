var React = require('react/addons');
var $ = require('jquery');
global.jQuery = $;
require('../../bower/bootstrap-star-rating/js/star-rating');

var CourseRatingListItem = React.createClass({
	_onChange: function (e, value) {
		e.preventDefault();
		if (value == '') {
			value = null;
		}
		var changed = {id: this.props.rating.id, value: value};
		this.props.onChange(changed);
	},
	componentDidMount: function () {
		var input = $(this.getDOMNode()).find('input');
		input.rating({
			stars: 10,
			min: 0,
			max: 10,
			step: 1,
			size: 'xs',
			showCaption: false,
			clearValue: ''
		});
		input.on('rating.change', this._onChange);
		input.on('rating.clear', this._onChange);
	},
	render: function () {
		return (
			<div className="form-group">
				<label htmlFor={'course-rating' + this.props.rating.id} className="col-xs-3">{this.props.rating.name}</label>
				<div className="col-xs-6">
					<input
						type="number"
						id={'course-rating' + this.props.rating.id}
						name={'course-rating' + this.props.rating.id}
						value={this.props.rating.value}
						className="rating"
						onChange={this._onChange} />
				</div>
				<div className="col-xs-1">
					<span>Total: {this.props.rating.total}</span>
				</div>
			</div>
		);
	}
});

module.exports = CourseRatingListItem;