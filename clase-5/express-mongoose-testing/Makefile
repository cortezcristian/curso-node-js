REPORTER = spec


# Global
test: test-unit test-functional

test-functional: test-headless

test-unit: test-unit-db

# Functional Tests
test-headless:
	./node_modules/.bin/mocha ./test/functional/headless/* \
        --reporter $(REPORTER) 

# Unit Tests
test-unit-db:
	./node_modules/.bin/mocha ./test/unit/db/* \
        --reporter $(REPORTER) \

