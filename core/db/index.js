var knex = require('knex');

//TODO: move this to config
var db = knex({
	client: 'pg',
	connection: {
		host: 'localhost',
		user: 'ukma_courses',
		password: 'ukma_courses',
		database: 'ukma_courses'
	}
});

db.paginate = function (builder, params) {
	if (params.limit) {
		builder.limit(params.limit);
	}
	if (params.offset) {
		builder.offset(params.offset);
	}
	return builder;
};
db.count = function (tablename) {
	return function count (params) {
		var where = params || {};
		return db(tablename).where(where).count().first().then(function (data) {
			return data.count;
		});
	}
};

module.exports = db;