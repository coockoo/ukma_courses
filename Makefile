create-db:
	cd postgres && sudo -u postgres psql -q < create.sql && psql ukma_courses root < init.sql

create-tables:
	cd postgres && psql ukma_courses root < tables.sql

drop-db:
	cd postgres/utils && sudo -u postgres psql -q < drop.sql

recreate-db: drop-db create-db

import:
	cd postgres && psql ukma_courses root < import.sql

