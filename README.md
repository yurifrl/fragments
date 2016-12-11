# With docker-compose
docker volume create --name=node_modules
docker-compose run --rm web npm install
docker-compose up

# Whitout docker
npm install
npm test
