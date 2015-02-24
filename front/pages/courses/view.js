var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Course = require('../../resources/course');
var Comment = require('../../resources/comment');

var CommentsList = require('../../components/comments/list');
var CommentForm = require('../../components/comments/form');

var Pagination = require('../../components/pagination');

var CourseViewPage = React.createClass({
	mixins: [Router.State],
	getInitialState: function () {
		return {
			course: {},
			comments: [],

			//pagination
			limit: 10,
			offset: 0,
			totalCount: 0
		};
	},
	_queryComments: function () {
		var context = this;
		var id = context.getParams().id;
		Course.queryComments({id: id, limit: this.state.limit, offset: this.state.offset}).then(function (response) {
			context.setState({comments: response.data, totalCount: response.totalCount});
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
	_onPageChange: function (limit, offset) {
		this.setState({
			limit: limit,
			offset: offset
		}, this._queryComments);
	},
	render: function () {
		return (
			<div className="col-xs-8 col-xs-offset-2">
				<h3>{this.state.course.name}</h3>
				<p>{this.state.course.description}</p>

				<CommentForm onSubmit={this._addComment}/>

				<div className="text-center">
					<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
				</div>

				<CommentsList comments={this.state.comments} />

				<div className="text-center">
					<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
				</div>

				<Link to="courses">To courses</Link>
			</div>
		);
	}
});

module.exports = CourseViewPage;
