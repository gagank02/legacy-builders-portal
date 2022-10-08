CREATE TABLE users( 
    id              SERIAL PRIMARY KEY,
    username        TEXT NOT NULL,
    password        TEXT NOT NULL,
    first_name      TEXT NOT NULL,
    last_name       TEXT NOT NULL,
    email           TEXT NOT NULL UNIQUE CHECK(POSITION('@' IN email) > 1),
    created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
    location        TEXT NOT NULL
);

CREATE TABLE courses( 
    id              SERIAL PRIMARY KEY,
    content         TEXT,
    name            TEXT NOT NULL,                
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_courses( 
    id              SERIAL PRIMARY KEY,
    user_id         INTEGER NOT NULL REFERENCES users(id),
    course_id       INTEGER NOT NULL REFERENCES courses(id)
);

