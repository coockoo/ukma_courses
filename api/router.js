var express = require('express');
var router = express.Router();

router.get('/users', function (req, res) {
	res.json('[{"id": 1, "name": "superuser", "email": "test@mail.com"}]');

});
module.exports = router;

