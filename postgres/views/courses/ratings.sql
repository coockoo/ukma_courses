drop view if exists v_course_ratings;
create or replace view v_course_ratings as
select
	r.id,
	r.name,
	c.id as course_id,
	u.id as user_id,
	cr.value
from
	courses c
cross join
	ratings r
cross join
	users u
left join
	courses_ratings cr on cr.course_id = c.id and cr.rating_id = r.id and cr.user_id = u.id;
