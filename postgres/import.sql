insert into users (username, email, password) values
('admin', 'admin@mail.com', 'password'),
('user', 'user@mail.com', 'password');

insert into courses (name, description) values
('Super Course 1', 'This is description to course 1'),
('English', 'This is description to english');

insert into comments (course_id, title, content, created_at) values
(1, 'This is my first comment', 'This is the test content of the comments', now());
