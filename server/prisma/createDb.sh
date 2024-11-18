#!/bin/bash
set -e
source "${BASH_SOURCE%/*}/../.env"

psql -h "$DB_HOST" -p "$DB_PORT" -U postgres -d postgres -c "
update pg_database
set datallowconn = 'false'
where datname = '$DB_NAME';
" -c "
select pg_terminate_backend(pid)
from pg_stat_activity
where datname = '$DB_NAME';
" -c "
drop database if exists $DB_NAME;
" -c "
create database $DB_NAME;
" -c "
drop role if exists $DB_USER;
" -c "
create role $DB_USER with login password '$DB_PASSWORD';
" -c "
grant all privileges on database $DB_NAME to $DB_USER;
"