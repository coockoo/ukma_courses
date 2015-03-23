var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppViewPage = require('./pages/app');

var AuthenticationViewPage = require('./pages/authentication/view');
var RegistrationViewPage = require('./pages/registration/view');
var DashboardViewPage = require('./pages/dashboard/view');

var CoursesListPage = require('./pages/courses/list');
var CourseViewPage = require('./pages/courses/view');
var NewCoursePage = require('./pages/courses/new');

var RatingsListPage = require('./pages/ratings/list');
var NewRatingPage = require('./pages/ratings/new');

module.exports = (
	<Route name="app" path="/" handler={AppViewPage}>
		<Route name="authentication" handler={AuthenticationViewPage} />
		<Route name="registration" handler={RegistrationViewPage} />

		<Route name="courses" handler={CoursesListPage} path="courses" />
		<Route name="new-course" handler={NewCoursePage} path="courses/new" />
		<Route name="course" handler={CourseViewPage} path="courses/:id" />

		<Route name="ratings" handler={RatingsListPage} path="ratings" />
		<Route name="new-rating" handler={NewRatingPage} path="ratings/new" />

		<DefaultRoute handler={DashboardViewPage} />
	</Route>
);
