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
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<CoursesList courses={this.state.courses}/>
				</div>
			</div>
		);
	}
});
module.exports = CoursesListPage;
