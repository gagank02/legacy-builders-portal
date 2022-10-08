-- To log into these you must not use a SECRET_KEY in your .env

INSERT INTO users (email, username, first_name, last_name, password, location)
VALUES ('davidjack@gmail.com',
        'davidjack2',
        'David',
        'Jack',
        '$2b$13$COGtW16FBSE/JOzoEzJzjuPEOUwnDY81d/BikiG6pntLziKSb8/7W',
        'helllo'
);

INSERT INTO courses(name)
VALUES ('Name');

INSERT INTO user_courses(user_id, course_id)
VALUES (
        1,
        1
);