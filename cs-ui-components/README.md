# cs-ui-components

Reusable React UI components based on the Salesforce Lightning Design System.

## Previewing the Components:

1. Make sure to clone the git repository. If you've already cloned it before, pull the latest commit from the master branch.
2. Navigate to the current directory (`cs-ui-components`) in the terminal.
3. Install or update dependencies by running `npm install`.
4. Building the components:
    1. If you have just cloned the repository anew or simply do not want to track changes or enable live reloading, run `npm run build`.
    2. If you wish to continuously create builds, track changes as you code and enable live reloading, run `npm run watch`. __Note:__ You have to perform the previous step first if you're coming from a freshly cloned repository.
5. Continue with instructions from the `README.md` file in the `cs-ui-demo` directory.

## Available Commands

* `npm run lint`: Detect linting errors.
* `npm run lint -- --fix`: Fix detected linting errors.
* `npm run build`: Compile a static version of the code to the `dist` folder.
* `npm run watch`: Compile the code to the `dist` folder after every change.
* `npm publish`: Publish the code to the `@cloudsense/cs-ui-components` npm repository.

## Publishing New Versions

0. Make sure you've got an npmjs account authorised to publish into the @cloudsense npm org. (See [this](https://docs.google.com/document/d/1UjmJIR74ag0yWQ_IO39aQBPNYMacfi6E5b6FgVYl-OA/edit).)
1. In the `webpack.config.js` file, on line 2, set the mode to `production`.
2. Update the package version in `package.json`.
3. Run `npm run lint` to make sure there are no linting errors.
4. Run `npm run build` to package everything up.
5. Run `npm publish` to publish your package. (You can publish beta (or alpha) versions with `npm publish --tag beta` (or alpha). If you wish to try out the components in another project, you can install them using `npm install @cloudsense/cs-ui-components@beta`.)

## Adding Icons

Icons are separated into two sprites based on their source.
* Salesforce icons - all icons which are provided by SLDS - `cssfi` prefix
* CloudSense icons - custom icons we use that aren't part of SLDS - `csi` prefix

All icons that aren't part of SLDS need to be added to the CloudSense icon sprite.

The SLDS icon sprite should be updated only after Salesforce makes changes to their icons.

All the steps for adding new icons can be found [here](https://docs.google.com/document/d/1Rm8yiB9NOAw967yX73etfMaGabSr7xzGVOobJ1IprGk/edit?usp=sharing).