var _ = require('lodash');
var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Course = require('../../resources/course');
var Comment = require('../../resources/comment');

var CommentsList = require('../../components/comments/list');
var CommentForm = require('../../components/comments/form');

var Pagination = require('../../components/pagination');
var CourseRatingsList = require('../../components/course-ratings/list');


var CourseViewPage = React.createClass({
	contextTypes: {
		router: React.PropTypes.func
	},
	getInitialState: function () {
		return {
			course: {},
			comments: [],
			ratings: [],

			//pagination
			limit: 10,
			offset: 0,
			totalCount: 0
		};
	},
	_queryComments: function () {
		var context = this;
		var id = context.context.router.getCurrentParams().id;
		Course.queryComments({id: id, limit: this.state.limit, offset: this.state.offset}).then(function (response) {
			context.setState({comments: response.data, totalCount: response.totalCount});
		});
	},
	_queryRatings: function () {
		var context = this;
		var id = context.context.router.getCurrentParams().id;
		Course.listRatings({id: id}).then(function (response) {
			context.setState({ratings: response.data})
		})
	},
	componentDidMount: function () {
		var context = this;
		var id = this.context.router.getCurrentParams().id;
		Course.getById(id).then(function (course) {
			context.setState({course: course});
		});
		context._queryComments();
		context._queryRatings();
	},
	_addComment: function (comment) {
		var context = this;
		comment.course_id = this.context.router.getCurrentParams().id;
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
	_onRatingChange: function (rating) {
		var context = this;
		console.log('view change', rating);
		var ratingToChange = _.find(this.state.ratings, function findRating (r) {
			return r.id == rating.id;
		});
		ratingToChange.value = rating.value;
		this.setState({ratings: this.state.ratings}, function onStateUpdated () {
			Course.updateRating(context.state.course.id, ratingToChange).then(function onRatingUpdated () {
				//todo: maybe replace this with returning rating value on update and updating only one rating
				context._queryRatings();
			});
		});
	},
	render: function () {
		return (
			<div className="col-xs-8 col-xs-offset-2">
				<h3>{this.state.course.name}</h3>
				<p>{this.state.course.description}</p>

				<div className="row">
					<div className="col-xs-12">
						<CourseRatingsList ratings={this.state.ratings} onChange={this._onRatingChange} />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-12">
						<h3>New Comment</h3>
						<CommentForm onSubmit={this._addComment}/>
					</div>
				</div>

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
