create table authorizations (
	id bigserial primary key,

	user_id bigint references users not null,
	token text not null,

	created_at timestamp with time zone not null default current_timestamp
);