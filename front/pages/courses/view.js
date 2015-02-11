var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var CourseViewPage = React.createClass({
	render: function () {
		return (
			<div>
				<p>Course view page</p>
				<Link to="courses">To courses</Link>
			</div>
		);
	}
});

module.exports = CourseViewPage;
