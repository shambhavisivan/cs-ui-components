#!/bin/sh
set -e
export SHELLOPTS

changedFiles () {
	git diff --name-only HEAD~1
}

npm install -g yarn;

if changedFiles | grep -q '^cs-ui-components'; then
    echo "Validating CS UI Components"
    cd cs-ui-components;
    yarn;
    echo "Running CS UI Components Lint"
    yarn lint;
    echo "Building CS UI Components"
    yarn build;
    echo "Finished validating CS UI Components"
    cd ..;
fi

if changedFiles | grep -q '^cs-ui-demo'; then
    echo "Validating CS UI Demo"
    cd cs-ui-demo;
    yarn;
    echo "Running CS UI Demo Lint"
    yarn lint;
    echo "Finished validating CS UI Demo"
    cd ..;
fi

if changedFiles | grep -q '^cs-form'; then
    echo "Validating cs-form"
    cd cs-form;
    npm ci;
    echo "Running cs-form Tests"
    npm t;
    echo "Building cs-form"
    npm run build;
    echo "Finished validating cs-form"
    cd ..;
fi

if changedFiles | grep -q '^cs-grid'; then
    echo "Validating cs-grid"
    cd cs-grid;
    npm ci;
    echo "Running cs-grid Tests"
    npm t;
    echo "Running cs-grid Lint"
    npm run lint;
    echo "Building cs-grid"
    npm run build;
    echo "Finished validating cs-grid"
    cd ..;
fi
