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