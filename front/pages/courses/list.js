var React = require('react');
var CoursesList = require('../../components/courses/list');
var Course = require('../../resources/course');

var CoursesListPage = React.createClass({
	getInitialState: function () {
		return {
			courses: []
		}
	},
	componentDidMount: function () {
		var context = this;
		Course.query().then(function (courses) {
			context.setState({courses: courses});
		});
	},
	render: function () {
		return (
			<div>
				<CoursesList courses={this.state.courses}/>
			</div>
		);
	}
});
module.exports = CoursesListPage;
