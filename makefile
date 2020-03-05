install:
	npm install

start:
	npx node bin/brain-games.js

publish:
	npm publish --dry-run

git:
	git add *
	git commit -m "last" 
	git push