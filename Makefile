up:
	docker compose -f docker-compose.dev.yml up --build

down: 
	docker compose down --remove-orphans

up-prod:
	docker compose -f docker-compose.yml up -d --build

up-prod-watch:
	docker compose -f docker-compose.yml up --build

test:
	docker compose -f docker-compose.test.yml up --build

test-it:
	docker exec -it chattiest-user npm run test:watch

it:
	docker exec -it chattiest-user bash