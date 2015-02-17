var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;

var Course = require('../../resources/course');

var CommentsList = require('../../components/comments/list');

var CourseViewPage = React.createClass({
	mixins: [State],
	getInitialState: function () {
		return {
			course: {},
			comments: []
		};
	},
	componentDidMount: function () {
		var context = this;
		var id = this.getParams().id;
		Course.getById(id).then(function (course) {
			context.setState({course: course});
		});
		Course.queryComments({id: id}).then(function (comments) {
			context.setState({comments: comments});

		})
	},
	render: function () {
		return (
			<div>
				<h3>{this.state.course.name}</h3>
				<p>{this.state.course.description}</p>

				<CommentsList comments={this.state.comments} />

				<Link to="courses">To courses</Link>
			</div>
		);
	}
});

module.exports = CourseViewPage;
