install:
	npm ci
z:
	node bin/brain-games.js
be:
	node bin/brain-even.js
bc:
	node bin/brain-calc.js
g:
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .