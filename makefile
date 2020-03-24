install:
	npm install

publish:
	npm publish --dry-run

video:
	asciinema rec

lint:
	npx eslint .

fix:
	npx eslint . --fix