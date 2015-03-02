var React = require('react');
var _ = require('lodash');

var RatingListItem = require('./list-item');

var RatingsList = React.createClass({
	render: function () {
		var ratings = this.props.ratings;
		var ratingItems = _.map(ratings, function (rating) {
			return <RatingListItem key={rating.id} data={rating} />;
		});
		return (
			<div className="list-group">
				{ratingItems}
			</div>
		)
	}
});

module.exports = RatingsList;