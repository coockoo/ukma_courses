var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseListItem = React.createClass({
	render: function () {
		var course = this.props.data;
		return (
			<li><Link to="course" params={{id: course.id}}>{course.id} {course.name}</Link></li>
		);
	}
});

module.exports = CourseListItem;
