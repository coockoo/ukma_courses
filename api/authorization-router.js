var express = require('express');
var router = express.Router();

var authorizationController = require('./controllers/authorizations');

router.post('', authorizationController.create);
router.get('', authorizationController.query);
router.get('/:id', authorizationController.view);

module.exports = router;
