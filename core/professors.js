var db = require('./db');

function query (params) {
	var builder = db('professors');
	db.paginate(builder, params);
	builder.orderBy('id');
	return builder;
}

var countAll = db.count('professors');

module.exports = {
	query: query,
	countAll: countAll
};
