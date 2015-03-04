var React = require('react');
var _ = require('lodash');

var CourseRatingListItem = require('./list-item');

var CourseRatingsList = React.createClass({
	_onChange: function (rating) {
		this.props.onChange(rating);
	},
	render: function () {
		var context = this;
		var ratingItems = _.map(context.props.ratings, function (rating) {
			return <CourseRatingListItem key={rating.id} rating={rating} onChange={context._onChange} />;
		});
		return (
			<form className="form form-horizontal">
				{ratingItems}
			</form>
		)
	}
});

module.exports = CourseRatingsList;