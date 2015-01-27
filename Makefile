create-db:
	cd postgres && sudo -u postgres psql -q < create.sql && psql ukma_courses root < init.sql
