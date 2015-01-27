-- privileges
grant connect on database ukma_courses to ukma_courses;
alter default privileges in schema public grant all on sequences to ukma_courses;
alter default privileges in schema public grant select, insert, update, delete on tables to ukma_courses;
