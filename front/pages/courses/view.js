var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;

var Course = require('../../resources/course');

var CourseViewPage = React.createClass({
	mixins: [State],
	getInitialState: function () {
		return {
			course: {}
		};
	},
	componentDidMount: function () {
		var context = this;
		var id = this.getParams().id;
		Course.view(id).then(function (course) {
			context.setState({course: course});
		});
	},
	render: function () {
		return (
			<div>
				<h3>{this.state.course.name}</h3>
				<p>{this.state.course.description}</p>

				<Link to="courses">To courses</Link>
			</div>
		);
	}
});

module.exports = CourseViewPage;
