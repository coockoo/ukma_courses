var express = require('express');
var router = express.Router();

var usersController = require('./controllers/users');
router.post('/users', usersController.create);

var currentUserController = require('./controllers/current-user');
router.get('/user', currentUserController.view);

var coursesController = require('./controllers/courses');

router.get('/courses', coursesController.query);
router.get('/courses/:id', coursesController.view);
router.post('/courses', coursesController.create);
router.put('/courses/:id', coursesController.update);
router.get('/courses/:id/comments', coursesController.queryComments);
router.get('/courses/:id/ratings', coursesController.listRatings);
router.put('/courses/:id/ratings', coursesController.updateRating);

var commentsController = require('./controllers/comments');

router.post('/comments', commentsController.create);

var ratingsController = require('./controllers/ratings');

router.get('/ratings', ratingsController.query);
router.post('/ratings', ratingsController.create);

module.exports = router;

