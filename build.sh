#!/bin/sh
set -e
export SHELLOPTS

changedFiles () {
	git diff --name-only HEAD~1
}

npm install -g yarn;

if changedFiles | grep -q -e '^cs-ui-components' -e '^cs-form-v2' -e '^cs-ui-demo' ; then
	echo "Installing packages (cs-ui-components, cs-form-v2, cs-demo)"
	yarn install --ignore-engines;
	echo "Finished installing packages"
fi

if changedFiles | grep -q '^cs-ui-components'; then
	echo "Validating cs-ui-components"
	cd cs-ui-components;
	echo "Linting cs-ui-components"
	yarn lint;
	echo "Running cs-ui-components tests"
	yarn test;
	echo "Building cs-ui-components"
	yarn build;
	echo "Finished validating cs-ui-components"
	cd ..;
fi

if changedFiles | grep -q '^cs-ui-demo'; then
	echo "Validating cs-demo"
	cd cs-ui-demo;
	echo "Linting cs-demo"
	yarn lint;
	echo "Finished validating cs-demo"
	cd ..;
fi

if changedFiles | grep -q '^cs-form/'; then
	echo "Validating cs-form"
	cd cs-form;
	echo "Installing cs-form packages"
	npm ci;
	echo "Running cs-form tests"
	npm t;
	echo "Building cs-form"
	npm run build;
	echo "Finished validating cs-form"
	cd ..;
fi

if changedFiles | grep -q '^cs-grid'; then
	echo "Validating cs-grid"
	cd cs-grid;
	echo "Installing cs-grid packages"
	npm ci;
	echo "Linting cs-grid"
	npm run lint;
	echo "Running cs-grid tests"
	npm t;
	echo "Building cs-grid"
	npm run build;
	echo "Finished validating cs-grid"
	cd ..;
fi

if changedFiles | grep -q '^cs-form-v2'; then
	echo "Validating cs-form-v2"
	cd cs-form-v2;
	echo "Linting cs-form-v2"
	yarn lint;
	echo "Running cs-form-v2 tests"
	yarn test;
	echo "Building cs-form-v2"
	yarn build;
	echo "Finished validating cs-form-v2"
	cd ..;
fi
