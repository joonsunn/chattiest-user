up:
	docker compose -f docker-compose.yml up --build

down: 
	docker compose down --remove-orphans

up-prod:
	docker compose -f docker-compose.prod.yml up -d --build

up-prod-watch:
	docker compose -f docker-compose.prod.yml up --build

test:
	docker compose -f docker-compose.test.yml up --build

it:
	docker exec -it chattiest-user bash