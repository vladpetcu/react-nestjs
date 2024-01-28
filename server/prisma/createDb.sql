update pg_database
set datallowconn = 'false'
where datname = 'react_nestjs';

select pg_terminate_backend(pid)
from pg_stat_activity
where datname = 'react_nestjs';

drop database if exists react_nestjs;
create database react_nestjs;
drop role if exists reactnest;
create role reactnest with login password '12345';
