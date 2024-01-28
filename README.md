## Setup server

```
cd server/
```

### Setup your local DB

Create the db

```
psql -h localhost -p 5432 -f prisma/createDb.sql -U postgres -d postgres
```

Run migrations

```
npx prisma db push
```
