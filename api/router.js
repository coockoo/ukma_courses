var express = require('express');
var router = express.Router();

router.get('/users', function (req, res) {
	res.json('[{"id": 1, "name": "superuser", "email": "test@mail.com"}]');
});


var coursesController = require('./controllers/courses');

router.get('/courses', coursesController.query);
router.get('/courses/:id', coursesController.view);
router.get('/courses/:id/comments', coursesController.queryComments);
router.get('/courses/:id/ratings', coursesController.listRatings);
router.put('/courses/:id/ratings', coursesController.updateRating);

var commentsController = require('./controllers/comments');

router.post('/comments', commentsController.create);

var ratingsController = require('./controllers/ratings');

router.get('/ratings', ratingsController.query);
router.post('/ratings', ratingsController.create);

module.exports = router;

