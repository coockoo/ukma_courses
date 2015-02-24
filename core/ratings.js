var db = require('./db');

function query (params) {
	var builder = db('ratings');
	db.paginate(builder, params);
	return builder;
}
function count (params) {
	var where = params || {};
	return db('ratings').where(where).count().first().then(function (data) {
		return data.count;
	});
}

module.exports = {
	query: query,
	count: count
};
