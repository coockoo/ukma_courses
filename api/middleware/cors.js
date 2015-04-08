function cors (req, res, next) {
	res.append('Access-Control-Allow-Origin', '*');
	res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.append('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	next();
}

module.exports = cors;
