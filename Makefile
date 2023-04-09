install:
	npm ci

lint:
	npx eslint .

test:
	npm run -s test

test-coverage:
	npm run test -s -- --coverage --coverageProvider=v8
