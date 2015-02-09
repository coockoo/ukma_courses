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

module.exports = db;