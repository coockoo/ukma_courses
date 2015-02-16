create table courses_ratings (
	id bigserial primary key,

	course_id bigint not null references courses,
	rating_id bigint not null references ratings,
	user_id bigint not null references users,

	value int check (value is null or (value >= 1 and value <= 10))
);