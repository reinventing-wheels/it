PATH := node_modules/.bin:$(PATH)

all: lint test clean build

lint: node_modules
	eslint --ext .ts src

test: node_modules
	jest

clean:
	rm -rf dist

build: node_modules
	tsc -m esnext --outDir dist/esm
	tsc -m commonjs --outDir dist/cjs
	rollup -c

release: all
	git add dist
	standard-version -a

node_modules: package.json
	npm i && touch $@

.PHONY: all lint test clean build release
