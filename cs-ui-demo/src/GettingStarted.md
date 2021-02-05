# Getting started
* Documentation for app setup and resolving common issues

## .cs-app-wrapper<a name="cs-app-wrapper"></a>
* All apps that use the cs-ui-components library need to be wrapped in the class ".cs-app-wrapper" as shown here. This is in order to provide default styles for which to start from.

```html
    <div id="root">
      <div className="cs-app-wrapper">
        Hello world
      </div>
    </div>
```

## cs- prefix<a name="cs- prefix"></a>
* <i>important</i> All class names from cs-ui-components library have cs- prefix (cs-modal, cs-tooltip, etc.). As such the prefix shouldn't be used in other projects to avoid bugs.

## z-index<a name="z-index"></a>
* All z-index values across all projects should be declared as global CSS variables in root element of the document (:root pseudo-class) which represents the `<html>`
element. Variables should be self-explanatory and sorted in ascending order.

* z-index variables used in cs-ui-components package are visible in the list below:
  * --z-index-path-psuedo: -1;
  * --z-index-divider-label: 1;
  * --z-index-custom-select-dropdown: 1;
  * --z-index-progress-indicator: 1;
  * --z-index-transfer-list-item-focus: 1;
  * --z-index-button-focus: 2;
  * --z-index-button-icon: 2;
  * --z-index-button-label: 2;
  * --z-index-main-header: 3;
  * --z-index-table-header: 3;
  * --z-index-dropdown-items-wrapper: 5;
  * --z-index-sidebar-list-close: 10;
  * --z-index-path: 10;
  * --z-index-reset-zen-more-tabs-ul: 99;
  * --z-index-lookup-dropdown: 100;
  * --z-index-modal: 9000;
  * --z-index-toast: 9005;
  * --z-index-tooltip: 9025;
  * --z-index-spinner-wrapper: 9050;
  * --z-index-spinner: 9051;



## Unit tests & UUID<a name="Unit tests & UUID"></a>
* This library's form components are using UUID package for semantic connection of the component and it's label. UUID package relies on JavaScript Crypto API and it can cause Jenkins test errors across projects.
* To resolve the error place the code below to tests setup file of your project:

```js
  Object.defineProperty(global, 'crypto', {
    value: {
      getRandomValues: (arr: string | string[]): Buffer => crypto.randomBytes(arr.length)
    }
  });
```

* <i>important</i> When writing unit tests and comparing snapshots make sure to use shallow render since unique id created by UUID will be re-created after each re-render, therefore test might fail.