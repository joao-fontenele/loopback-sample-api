.PHONY: build start

build:
	docker-compose run --rm app yarn

start:
	docker-compose up -d
	docker logs -f --since 1h loopback-sample-api
