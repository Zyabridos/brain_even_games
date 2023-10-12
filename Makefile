install:
	npm ci
publish:
	npm publish --dry-run
lint:
	npx eslint .
make brain-even:
	node src/brain-even.js
make brain-calc:
	node src/brain-calc.js
make brain-progression:
	node src/brain-progression.js
make brain-calc:
	node src/brain-calc.js