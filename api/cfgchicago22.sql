\echo 'Delete and recreate cfgchicago22 db?' 
\prompt 'Return for yes or control-C to cancel > ' answer
DROP DATABASE cfgchicago22;

CREATE DATABASE cfgchicago22;

\connect cfgchicago22

\i cfgchicago22_schema.sql




-- To recreate Database:
-- psql -f "./cfgchicago22.sql"
-- 
-- To see database and print all users:
-- psql
-- \c cfgchicago22
-- select * from users;
