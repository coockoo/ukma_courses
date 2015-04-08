create table courses_professors (
	id bigserial primary key,

	course_id bigint references courses not null,
	professor_id bigint references professors not null
);