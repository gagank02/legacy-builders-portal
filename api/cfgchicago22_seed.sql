-- To log into these you must not use a SECRET_KEY in your .env

INSERT INTO users (email, username, first_name, last_name, password, location)
VALUES ('davidjack@gmail.com',
        'davidjack2',
        'David',
        'Jack',
        '$2b$13$COGtW16FBSE/JOzoEzJzjuPEOUwnDY81d/BikiG6pntLziKSb8/7W',
        'helllo'
);

INSERT INTO courses(title)
VALUES ('Name');

INSERT INTO user_courses(user_id, course_id)
VALUES (
        1,
        1
);

INSERT INTO pages(course_id)
VALUES (
    1
);


-- INSERT INTO comments(page_id, user_id, comment)
-- VALUES (
--     1,
--     1,
--     "test comment"
-- );

INSERT INTO quizzes(courses_id)
VALUES (
    1
);

INSERT INTO quiz_results(quiz_id, user_courses_id)
VALUES (
    1,
    1
);