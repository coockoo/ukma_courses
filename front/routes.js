var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppViewPage = require('./pages/app');

var NewUserPage = require('./pages/users/new');

var AuthorizationNewPage = require('./pages/authorizations/new');
var DashboardViewPage = require('./pages/dashboard/view');

var CoursesListPage = require('./pages/courses/list');
var CourseViewPage = require('./pages/courses/view');
var NewCoursePage = require('./pages/courses/new');
var CourseEditPage = require('./pages/courses/edit');

var RatingsListPage = require('./pages/ratings/list');
var NewRatingPage = require('./pages/ratings/new');

module.exports = (
	<Route name="app" path="/" handler={AppViewPage}>

		<Route name="new-user" handler={NewUserPage} path="users/new" />

		<Route name="new-authorization" handler={AuthorizationNewPage} path="authorizations/new" />

		<Route name="courses" handler={CoursesListPage} path="courses" />
		<Route name="new-course" handler={NewCoursePage} path="courses/new" />
		<Route name="course" handler={CourseViewPage} path="courses/:id" />
		<Route name="edit-course" handler={CourseEditPage} path="courses/:id/edit" />

		<Route name="ratings" handler={RatingsListPage} path="ratings" />
		<Route name="new-rating" handler={NewRatingPage} path="ratings/new" />

		<DefaultRoute handler={DashboardViewPage} />
	</Route>
);
