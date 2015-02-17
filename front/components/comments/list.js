var React = require('react');
var _ = require('lodash');

var CommentListItem = require('./list-item');

var CommentsList = React.createClass({
	render: function () {
		var comments = this.props.comments;
		var commentItems = _.map(comments, function (comment) {
			return <CommentListItem key={comment.id} data={comment} />;
		});
		return (
			<div className="list-group">
				{commentItems}
			</div>
		);
	}
});

module.exports = CommentsList;

