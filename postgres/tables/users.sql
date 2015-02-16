create table users (
	id bigserial primary key,

	email text not null unique,
	username text,
	password text
);

create unique index users_username on users (username) where username is not null;