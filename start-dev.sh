#!/bin/bash

APP="loopback-sample-api"

trap "docker-compose down" SIGINT SIGTERM
echo "pid is $$"

docker-compose up -d
docker logs -f --since 1h ${APP} | node_modules/.bin/pino-pretty
