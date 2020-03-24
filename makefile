install:
	npm install

start:
	npx node bin/brain-games.js

calc:
	npx node bin/brain-calc.js

publish:
	npm publish --dry-run

pr:
	npx node bin/brain-progression.js

video:
	asciinema rec

git:
	git add *
	git commit -m "last" 
	git push

lint:
	npx eslint .

fix:
	npx eslint . --fix