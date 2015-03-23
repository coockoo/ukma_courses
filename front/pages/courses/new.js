var React = require('react/addons');
var CourseForm = require('../../components/courses/form');
var Router = require('react-router');

var Course = require('../../resources/course');
var CourseNewPage = React.createClass({
	mixins: [Router.Navigation],
	getInitialState: function () {
		return {
			course: {
				name: '',
				description: ''
			}
		}
	},
	_onSubmit: function () {
		var context = this;
		Course.create(this.state.course).then(function () {
			context.transitionTo('courses');
		});
	},
	_onChange: function (update) {
		var newState = React.addons.update(this.state, {
			course: update
		});
		this.setState(newState);
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<CourseForm onSubmit={this._onSubmit} course={this.state.course} onChange={this._onChange} submitName="Create" />
				</div>
			</div>
		);
	}
});

module.exports = CourseNewPage;