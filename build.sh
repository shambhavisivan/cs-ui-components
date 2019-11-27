#!/bin/sh
set -e
export SHELLOPTS

echo "Validating CS UI Components"
cd cs-ui-components;
npm ci;
echo "Running CS UI Components Lint"
npm run lint;
echo "Building CS UI Components"
npm run build;
echo "Finished validating CS UI Components"
cd ..;

echo "Validating cs-form"
cd cs-form;
npm ci;
echo "Running cs-form Tests"
npm t;
echo "Building cs-form"
npm run build;
echo "Finished validating cs-form"
cd ..;
