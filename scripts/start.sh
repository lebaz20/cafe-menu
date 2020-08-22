export REACT_APP_CI=0

docker-compose up -d database backend
yarn apply-metadata
yarn apply-migrations

docker-compose up frontend