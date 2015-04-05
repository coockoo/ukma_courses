var React = require('react/addons');
var CourseForm = require('../../components/courses/form');
var Router = require('react-router');

var Course = require('../../resources/course');
var CourseEditPage = React.createClass({
	contextTypes: {
		router: React.PropTypes.func.isRequired
	},
	_getCourse: function () {
		var context = this;
		var id = this.context.router.getCurrentParams().id;
		Course.getById(id).then(function (course) {
			context.setState({course: course});
		});
	},
	_onSubmit: function () {
		var context = this;
		var id = this.context.router.getCurrentParams().id;
		Course.update(id, this.state.course).then(function () {
			context.context.router.transitionTo('courses');
		});
	},
	_onChange: function (update) {
		var newState = React.addons.update(this.state, {
			course: update
		});
		this.setState(newState);
	},
	getInitialState: function () {
		return {
			course: {
				name: '',
				description: ''
			}
		}
	},
	componentDidMount: function () {
		this._getCourse();
	},
	render: function () {
		return (
			<div className="row">
				<div className="col-xs-8 col-xs-offset-2">
					<CourseForm onSubmit={this._onSubmit} course={this.state.course} onChange={this._onChange} submitName="Update" />
				</div>
			</div>
		);
	}
});

module.exports = CourseEditPage;