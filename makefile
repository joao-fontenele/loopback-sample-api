.PHONY: build start

build:
	docker-compose run --rm app npm i

start:
	docker-compose up -d
	docker logs -f --since 1h loopback-sample-api
