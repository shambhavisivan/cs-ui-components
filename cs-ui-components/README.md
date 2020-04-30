# cs-ui-components

Reusable React UI components.

## Scripts:

* `npm run lint`: check code for lint errors
* `npm run lint -- --fix`: run lint and automatically fix problems
* `npm run build`: compile and package source into the `dist/` folder
* `npm run watch`: continuous building of code as you write it
* `npm publish`: publish library to @cloudsense org on npmjs

## Publishing a new version:

0. Make sure you've got an npmjs account authorised to publish into the @cloudsense NPM org. (See [here](https://docs.google.com/document/d/1UjmJIR74ag0yWQ_IO39aQBPNYMacfi6E5b6FgVYl-OA/edit).)
1. In `webpack.config.js` on line 2, change the mode to `production`.
2. Upgrade package version in `package.json`.
3. Run `npm run lint` to make sure everything is good.
4. Run `npm run build` to package everything up.
5. Run `npm publish` to publish your package. (You can publish beta (or alpha) versions via `npm publish --tag beta` (or alpha), and to try them out in another project you can install them via `npm install @cloudsense/cs-ui-components@beta`)

## Adding new icon to icon sprite:

We have two icon sprites:
* Salesforce icons - all icons provided by SLDS - `cssfi` prefix
* CloudSense icons - custom icons we use that aren't part of SLDS - `csi` prefix

All icons that aren't part of SLDS need to be added to the CloudSense icon sprite.

The SLDS icon sprite should be updated only after Salesforce makes changes to their icons.

All the steps for adding new icon can be found [here](https://docs.google.com/document/d/1Rm8yiB9NOAw967yX73etfMaGabSr7xzGVOobJ1IprGk/edit?usp=sharing).