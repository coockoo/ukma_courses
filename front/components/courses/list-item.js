var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var CourseListItem = React.createClass({
	render: function () {
		var course = this.props.data;
		return (
			<div className="list-group-item">
				<Link to="course" params={{id: course.id}}>{course.id} {course.name}</Link>
				<Link to="edit-course" params={{id: course.id}} className='pull-right'>Edit</Link>
			</div>
		);
	}
});

module.exports = CourseListItem;
