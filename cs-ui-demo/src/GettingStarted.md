# Getting started
* Documentation for app setup and resolution of common issues

## .cs-app-wrapper<a name="cs-app-wrapper"></a>
* All apps that use the cs-ui-components library need to be wrapped in the class `.cs-app-wrapper` as shown here. The wrapper provides default styles and allows us to only target our own components.

```html
<div id="root">
  <div className="cs-app-wrapper">
    Hello world
  </div>
</div>
```

## cs- prefix<a name="cs- prefix"></a>
* <i>important</i> All class names from cs-ui-components library have a `cs-` prefix (`cs-modal`, `cs-tooltip`, etc.). The prefix should not be used in other projects in order to avoid bugs and conflicts.

## z-index<a name="z-index"></a>
* All z-index values across all projects should be declared as global CSS variables in the root element of the document (the `:root` pseudo-class) which represents the `<html>`
element. Variables should be self-explanatory and sorted by index in ascending order.

* These are the z-index variables used in the cs-ui-components package:
  * `--z-index-path-pseudo: -1;`
  * `--z-index-divider-label: 1;`
  * `--z-index-custom-select-dropdown: 1;`
  * `--z-index-progress-indicator: 1;`
  * `--z-index-transfer-list-item-focus: 1;`
  * `--z-index-button-focus: 2;`
  * `--z-index-button-icon: 2;`
  * `--z-index-button-label: 2;`
  * `--z-index-button-custom-content: 2;`
  * `--z-index-main-header: 3;`
  * `--z-index-table-header: 3;`
  * `--z-index-dropdown-items-wrapper: 5;`
  * `--z-index-sidebar-close: 10;`
  * `--z-index-path: 10;`
  * `--z-index-reset-zen-more-tabs-ul: 99;`
  * `--z-index-lookup-dropdown: 100;`
  * `--z-index-modal: 9000;`
  * `--z-index-toast: 9005;`
  * `--z-index-tooltip: 9025;`
  * `--z-index-spinner-wrapper: 9050;`
  * `--z-index-spinner: 9051;`



## Unit tests & UUID<a name="Unit tests & UUID"></a>
* This library's form components are using a UUID package for the semantic connection of a component and its label. The UUID package relies on JavaScript Crypto API and it can cause Jenkins test errors across projects.
* To resolve the error place the code below to tests setup file of your project:


```ts
Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr: string | Array<string>): Buffer => crypto.randomBytes(arr.length)
  }
});
```

* <i>important</i> When writing unit tests and comparing snapshots make sure to use shallow rendering since the unique id created by the UUID package will be recreated after each rerender, thus increasing the likelihood of failing a test.