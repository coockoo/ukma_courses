var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var State = Router.State;

var Course = require('../../resources/course');
var Comment = require('../../resources/comment');

var CommentsList = require('../../components/comments/list');
var CommentForm = require('../../components/comments/form');

var CourseViewPage = React.createClass({
	mixins: [State],
	getInitialState: function () {
		return {
			course: {},
			comments: []
		};
	},
	_queryComments: function () {
		var context = this;
		var id = context.getParams().id;
		Course.queryComments({id: id}).then(function (comments) {
			context.setState({comments: comments});
		});
	},
	componentDidMount: function () {
		var context = this;
		var id = this.getParams().id;
		Course.getById(id).then(function (course) {
			context.setState({course: course});
		});
		context._queryComments();
	},
	_addComment: function (comment) {
		var context = this;
		comment.course_id = this.getParams().id;
		Comment.create(comment).then(function () {
			context._queryComments();
		});
	},
	render: function () {
		return (
			<div className="col-xs-8 col-xs-offset-2">
				<h3>{this.state.course.name}</h3>
				<p>{this.state.course.description}</p>

				<CommentForm onSubmit={this._addComment}/>

				<CommentsList comments={this.state.comments} />

				<Link to="courses">To courses</Link>
			</div>
		);
	}
});

module.exports = CourseViewPage;
