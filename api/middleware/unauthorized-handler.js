function unauthorizedHandler (err, req, res, next) {
	if (err.name === 'UnauthorizedError') {
		res.status(401).send({status: 401, message: 'Unauthorized. Invalid token'});
	}
}

module.exports = unauthorizedHandler;
