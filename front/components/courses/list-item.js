var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseListItem = React.createClass({
	render: function () {
		var course = this.props.data;
		return (
			<Link to="course" params={{id: course.id}} className="list-group-item">{course.id} {course.name}</Link>
		);
	}
});

module.exports = CourseListItem;
