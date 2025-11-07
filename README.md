# Tech Exercise

repository for the Tech Exercise Assignment

- Frontend: Angular served w/ nginx
- Backend: Flask served w/ gunicorn

## Prisma setup
- try following guide by starting from scratch: https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch
- run `docker compose up` for mysql database, see `docker-compose.yml` for connection details
    - remember to set database connection string in `prisma.config.ts` and `prisma/schema.prisma`

## TODO
- maybe allow searching for range of values for quantity/price
- add field for link?
- add setup instructions to readme