var express = require('express');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var appConfig = require('../config/app');
var authorizationConfig = require('../config/authorization');

// -- routers
var apiRouter = require('./api-router');
var authorizationRouter = require('./authorization-router');

// -- middlewares
var unauthorizedHandler = require('./middleware/unauthorized-handler');
var cors = require('./middleware/cors');

var app = express();
//TODO: replace this with nginx server and config or different location at all
app.use(express.static(__dirname + '/../front'));
app.use(bodyParser.json());
app.use(cors);

app.use('/api', expressJwt({secret: authorizationConfig.secret}));
app.use('/api', apiRouter);
app.use('/authorizations', authorizationRouter);
app.use('/api', unauthorizedHandler);


app.listen(appConfig.port);

console.log('Server started on port', appConfig.port);
