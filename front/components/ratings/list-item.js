var React = require('react');

var RatingListItem = React.createClass({
	render: function () {
		var rating = this.props.data;
		return (
			<p className="list-group-item">{rating.id} {rating.name}</p>
		);
	}
});

module.exports = RatingListItem;