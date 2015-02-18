create table comments (
	id bigserial primary key,

	course_id bigint references courses not null,

	title text,
	content text,
	created_at timestamp with time zone not null
);
