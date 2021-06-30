# cs-ui-components

Reusable React UI components based on the Salesforce Lightning Design System.

## Previewing the Components

See instructions in the `README.md` file in the root directory under the Starting the Demo App section.

## Available Commands

See a list in the `README.md` file in the root directory under the Available Commands / Components section.

## Publishing New Versions

0. Make sure you've got an npmjs account authorised to publish into the @cloudsense npm org. (See [this](https://docs.google.com/document/d/1UjmJIR74ag0yWQ_IO39aQBPNYMacfi6E5b6FgVYl-OA/edit).)
1. In the `webpack.config.js` file, on line 2, set the mode to `production`.
2. Update the package version in `package.json`.
3. Run `yarn components build` in the root directory to package everything up.
4. Run `yarn components publish` to publish your package. (You can publish beta (or alpha) versions with `yarn components publish --tag beta` (or alpha). If you wish to try out the components in another project, you can install them using `yarn add @cloudsense/cs-ui-components@beta`.)
- _Note: Yarn will display the latest published package version and prompt you to enter the new version number._

## Adding Icons

Icons are separated into two sprites based on their source.
* Salesforce icons - all icons which are provided by SLDS - `cssfi` prefix
* CloudSense icons - custom icons we use that aren't part of SLDS - `csi` prefix

All icons that aren't part of SLDS need to be added to the CloudSense icon sprite.

The SLDS icon sprite should be updated only after Salesforce makes changes to their icons.

All the steps for adding new icons can be found [here](https://docs.google.com/document/d/1Rm8yiB9NOAw967yX73etfMaGabSr7xzGVOobJ1IprGk/edit?usp=sharing).