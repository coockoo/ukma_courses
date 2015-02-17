var React = require('react');

var CommentListItem = React.createClass({
	render: function () {
		var comment = this.props.data;
		return (
			<div className="list-group-item">
				<h3>{comment.title} ({comment.id})</h3>
				<p>{comment.content}</p>
			</div>
		);
	}
});

module.exports = CommentListItem;
