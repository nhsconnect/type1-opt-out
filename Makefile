SHELL := /bin/bash

.PHONY: all
all: test build-all

build-all:
	npm run build -ws
	
build-p:
# short hand for build-prototype
	npm run build -w prototype

build-f:
# short hand for build-frontend
	npm run build -w frontend
	
build-%:
	npm run build -w $*

test:
	npm test -ws
	
test-p:
# short hand for test-prototype
	npm test -w prototype

test-%:
	npm test -w $*

start:
	PORT=3000 node src/prototype/app.js > /dev/null 2>&1 &

watch:
	npm run watch -w prototype
	
stop:
	kill -9 $(ps aux | grep '[n]ode src/prototype/app.js' | awk '{print $2}')
	
restart:
	kill -9 $(ps aux | grep '[n]ode src/prototype/app.js' | awk '{print $2}')
	$(MAKE) start