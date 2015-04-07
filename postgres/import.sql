insert into users (username, email, password) values
('admin', 'admin@mail.com', '$2a$10$6cjWH8Aba7tVT245pkxDgOZIDSIUGV1jdbS6LC2B4V4ErWLquGB6i'),
('user', 'user@mail.com', '$2a$10$z8adiQU1P1XG/Ij3jZurDub24Q05ujaevo.tz9IRB61bLsqVQ0bFm');

insert into courses (name, description) values
('Super Course 1', 'This is description to course 1'),
('English', 'This is description to english');

insert into professors (name, surname, degree) values
('Professor', 'Van Der Sar', 'sen. professor'),
('Helen', 'Malkovich', 'lecturer');

insert into comments (course_id, title, content, created_at) values
(1, 'This is my first comment', 'This is the test content of the comments', now());
