var React = require('react');
var _ = require('lodash');
var CourseListItem = require('./list-item');

var CoursesList = React.createClass({
	render: function () {
		var courses = this.props.courses;
		var courseItems = _.map(courses, function (course) {
			return <CourseListItem key={course.id} data={course} />;
		});
		return (
			<ul>
				{courseItems}
			</ul>
		);
	}
});

module.exports = CoursesList;