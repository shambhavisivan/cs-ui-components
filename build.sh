#!/bin/sh
set -e
export SHELLOPTS

changedFiles () {
	git diff --name-only HEAD~1
}

if changedFiles | grep -q '^cs-ui-components'; then
    echo "Validating CS UI Components"
    cd cs-ui-components;
    npm ci;
    echo "Running CS UI Components Lint"
    npm run lint;
    echo "Building CS UI Components"
    npm run build;
    echo "Finished validating CS UI Components"
    cd ..;
fi

if changedFiles | grep -q '^cs-ui-demo'; then
    echo "Validating CS UI Demo"
    cd cs-ui-demo;
    npm install --legacy-peer-deps;
    echo "Running CS UI Demo Lint"
    npm run lint;
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
