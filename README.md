# Tech Exercise

repository for the Tech Exercise Assignment

- Frontend: Angular served w/ nginx
- Backend: Flask served w/ gunicorn

## Final project setup notes
- figure out if backend can run on "local" docker network, only frontend is exposed but can still reach backend internally
    - static ip on docker internal interface?
- run `docker compose up` for mysql database, see `docker-compose.yml` for connection details
    - remember to set database connection string in `app.py`
    - test with aws + whatever database RDS uses

## TODO
- maybe allow searching for range of values for quantity/price
- add field for link?
- add setup instructions to readme
