install:
	npm install

start:
	npx node bin/brain-games.js

calc:
	npx node bin/brain-calc.js

even:
	npx node bin/brain-even.js

publish:
	npm publish --dry-run

git:
	git add *
	git commit -m "last" 
	git push

lint:
	npx eslint .