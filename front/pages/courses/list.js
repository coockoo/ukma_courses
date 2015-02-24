var React = require('react');
var CoursesList = require('../../components/courses/list');
var Course = require('../../resources/course');

var Pagination = require('../../components/pagination');

var CoursesListPage = React.createClass({
	getInitialState: function () {
		return {
			courses: [],

			//Pagination
			limit: 10,
			offset: 0,
			totalCount: 0
		}
	},
	componentDidMount: function () {
		this._queryCourses();
	},
	_queryCourses: function () {
		var context = this;
		Course.query({limit: this.state.limit, offset: this.state.offset}).then(function (response) {
			context.setState({courses: response.data, totalCount: response.totalCount});
		});
	},
	_onPageChange: function (limit, offset) {
		this.setState({
			limit: limit,
			offset: offset
		}, this._queryCourses);

	},
	render: function () {
		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">

					<div className="text-center">
						<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
					</div>

					<CoursesList courses={this.state.courses}/>

					<div className="text-center">
						<Pagination limit={this.state.limit} offset={this.state.offset} totalCount={this.state.totalCount} onPageChange={this._onPageChange} />
					</div>

				</div>
			</div>
		);
	}
});
module.exports = CoursesListPage;
