var React = require('react');
var CourseForm = require('../../components/courses/form');
var Router = require('react-router');

var Course = require('../../resources/course');
var CourseNewPage = React.createClass({
	mixins: [Router.Navigation],
	_onSubmit: function (course) {
		var context = this;
		Course.create(course).then(function () {
			context.transitionTo('courses');
		});
	},
	render: function () {
		return (
			<div>
				<CourseForm onSubmit={this._onSubmit} />
			</div>
		);
	}
});

module.exports = CourseNewPage;