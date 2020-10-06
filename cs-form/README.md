# CSForm

Generic configurable React form component.

### 1.0.0-alpha.112:
* 0 is now a valid value for the simple field type.

### 1.0.0-alpha.111:
* Moved timeInterval from DateTime prop to descriptor. The descriptor can be different for every attribute where as the props are passed in to the whole cs-form.
* Fixed duplicated labelling on fields.

### 1.0.0-alpha.110:
* Replaced standard buttons, SimpleField, BooleanField SelectField and NumberField with cs-ui-components.
* All attribute types now have titles.
* Added a date time field type.

### 1.0.0-alpha.109:
* Added fixes for numberfield to display 0.

### 1.0.0-alpha.108:
* Added simple fixes for numberfield and simplefield.
* Added fix for handleclickoutside overriding other fields' click.

### 1.0.0-alpha.107:
* Added styles for referenceField, numberField and selectField

### 1.0.0-alpha.106:
* Made fetchReferenceOptions an optional prop to CSForm.
* Minor bug fixes.

### 1.0.0-alpha.105:
* Added support to ReferenceField.
* Bumped react to 16.12.

### 1.0.0-alpha.104:
* Added support to NumberField.

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

## typings:
* The typings folder should eventually have all the typings that are exposed by csform.