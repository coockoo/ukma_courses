# UKMA Courses

## Database

### Create database

`make create-db`

### Recreate database

`make recreate-db`

### Provide database with initial data

`make import`

Import data can be found in `postgres/import.sql`

### Access database

`psql <database_name> <username>`

`psql ukma_courses ukma_courses`

psql tool is installed automatically on first `vagrant up`
