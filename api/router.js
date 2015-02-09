var express = require('express');
var router = express.Router();

router.get('/users', function (req, res) {
	res.json('[{"id": 1, "name": "superuser", "email": "test@mail.com"}]');
});

var coursesController = require('./controllers/courses');

router.get('/courses', coursesController.query);

module.exports = router;

