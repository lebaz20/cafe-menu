export REACT_APP_CI=0

## start with fresh containers, comment it if not needed.
docker-compose down
docker-compose up -d database backend

yarn
## wait till hasura is fully operational, comment it if not needed.
sleep 15
yarn apply-metadata
yarn apply-migrations

docker-compose up frontend