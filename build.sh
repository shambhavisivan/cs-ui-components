#!/bin/sh
set -e
export SHELLOPTS

echo "Validating CSForm"
cd CSForm;
npm ci;
echo "Running CSForm Tests"
npm t;
echo "Building CSForm"
npm run build;
echo "Finished validating CSForm"
cd ..;
