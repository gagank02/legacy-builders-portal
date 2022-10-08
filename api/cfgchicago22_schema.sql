CREATE TABLE users( 
    id                      SERIAL PRIMARY KEY,
    username                TEXT NOT NULL UNIQUE,
    password                TEXT NOT NULL,
    first_name              TEXT NOT NULL,
    last_name               TEXT NOT NULL,
    email                   TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    created_at              TIMESTAMP NOT NULL DEFAULT NOW(),
    location                TEXT NOT NULL
);

CREATE TABLE courses( 
    id                      SERIAL PRIMARY KEY,
    content                 TEXT,
    title                   TEXT NOT NULL,                
    created_at              TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_courses( 
    id                      SERIAL PRIMARY KEY,
    user_id                 INTEGER NOT NULL REFERENCES users(id),
    course_id               INTEGER NOT NULL REFERENCES courses(id),
    progress                INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE pages( 
    id                      SERIAL PRIMARY KEY,
    course_id               INTEGER NOT NULL REFERENCES courses(id)
);

CREATE TABLE comments( 
    id                      SERIAL PRIMARY KEY,
    page_id                 INTEGER NOT NULL REFERENCES pages(id),
    user_id                 INTEGER NOT NULL REFERENCES users(id),
    date                    TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE quizzes (
    id                      SERIAL PRIMARY KEY,
    courses_id              INTEGER NOT NULL REFERENCES courses(id)
);

CREATE TABLE quiz_results (
    id                      SERIAL PRIMARY KEY,
    quiz_id                 INTEGER NOT NULL REFERENCES quizzes(id),
    user_courses_id         INTEGER NOT NULL REFERENCES user_courses(id),
    quiz_score              INTEGER 
);