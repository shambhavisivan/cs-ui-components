#!/bin/sh
set -e
export SHELLOPTS

echo "Validating cs-form"
cd cs-form;
npm ci;
echo "Running cs-form Tests"
npm t;
echo "Building cs-form"
npm run build;
echo "Finished validating cs-form"
cd ..;
