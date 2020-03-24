install:
	npm install

start:
	npx node bin/brain-games.js

calc:
	npx node bin/brain-calc.js

video:
	asciinema rec

git:
	git add *
	git commit -m "last" 
	git push

lint:
	npx eslint .