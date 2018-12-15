.PHONY: install start

install:
	docker-compose run --rm app yarn

start:
	/bin/bash -c "./start-dev.sh"

sh:
	docker-compose exec app sh
