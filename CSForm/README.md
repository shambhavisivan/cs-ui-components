# CSForm

Generic configurable React form component.

## Scripts:

* `npm test`: run all tests
* `npm run build`: compile and package source into the `dist/` folder
* `npm publish`: publish library to @cloudsense org on npmjs.
* `npm watch`: continuous typescript checking of code as you write it.

## Publishing a new version:

0. Make sure you've got an npmjs account authorised to publish into the @cloudsense NPM org. (See [here](https://docs.google.com/document/d/1UjmJIR74ag0yWQ_IO39aQBPNYMacfi6E5b6FgVYl-OA/edit).)
1. Upgrade package version in `package.json`.
2. Run `npm run build` to package everything up.
3. Run `npm test` to make sure everything still works.
4. Run `npm publish` to publish your package. (You can publish beta (or alpha) versions via `npm publish --tag beta` (or alpha), and to try them out in another project, you can install them via `npm install @cloudsense/csform@beta`)