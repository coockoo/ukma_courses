-- root user

do
$body$
begin
	if not exists (select * from pg_catalog.pg_user where usename = 'root')
	then
		create user root with password 'root';
	end if;
end;
$body$;

-- app users

create user ukma_courses with password 'ukma_courses';

-- db

create database ukma_courses template template0 owner root
	encoding 'utf8'
	lc_collate = 'en_US.UTF-8'
	lc_ctype = 'en_US.UTF-8';

\connect ukma_courses

--create extension if not exists hstore;
