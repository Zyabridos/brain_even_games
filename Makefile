install:
	npm ci
z:
	node bin/brain-games.js
be:
	node bin/brain-even.js
bc:
	node bin/brain-calc.js
bg:
	node bin/brain-gcd.js
bp:
	node bin/brain-progression.js
bpr:
	node bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .