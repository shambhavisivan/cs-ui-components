# Getting started
* App setup documentation and resolution of common issues

## HTML App Wrapper
* All apps that use the cs-ui-components library need to make use of the HTML wrapper with the `.cs-app-wrapper` class as shown here. The wrapper provides default styles and allows us to only target our own components.

```html
<div id="root">
  <div className="cs-app-wrapper">
    Hello world
  </div>
</div>
```

## CSS Class Prefix
* All class names from the cs-ui-components library have a `cs-` prefix (`cs-modal`, `cs-tooltip`, etc.). The prefix should not be used in other projects in order to avoid bugs and conflicts.

## z-index
* All z-index values across all projects should be declared as global CSS variables in the root element of the document (the `:root` pseudo-class) which represents the `<html>`
element. Variable names should be self-explanatory and sorted by index in ascending order.

* These are the z-index variables used in the cs-ui-components package:
  * `--z-index-path-pseudo: -1;`
  * `--z-index-sidebar-hidden-wrapper: -1;`
  * `--z-index-divider-label: 1;`
  * `--z-index-progress-indicator: 1;`
  * `--z-index-transfer-list-item-focus: 1;`
  * `--z-index-sidebar-visible-wrapper: 1;`
  * `--z-index-list-active: 1;`
  * `--z-index-slider-thumb: 1`;
  * `--z-index-button-icon: 2;`
  * `--z-index-button-label: 2;`
  * `--z-index-dropdown-button: 2;`
  * `--z-index-button-focus: 3;`
  * `--z-index-main-header: 3;`
  * `--z-index-table-header: 3;`
  * `--z-index-button-custom-content: 4;`
  * `--z-index-sidebar-toggle: 10;`
  * `--z-index-path: 10;`
  * `--z-index-reset-zen-more-tabs-ul: 99;`
  * `--z-index-modal: 9000;`
  * `--z-index-dropdown-items-wrapper: 9001;`
  * `--z-index-custom-select-dropdown: 9001;`
  * `--z-index-lookup-dropdown: 9001;`
  * `--z-index-toast: 9005;`
  * `--z-index-tooltip: 9025;`
  * `--z-index-spinner-wrapper: 9050;`
  * `--z-index-spinner: 9051;`



## Unit Tests & UUID
* The library's form components use a UUID package for semantic connections of components and their respective labels. The UUID package relies on the JavaScript Crypto API and it can cause Jenkins test errors across products.
* To bypass such errors, place the following code chunk in the test setup file of the product:

```ts
Object.defineProperty(global, 'crypto', {
  value: {
    getRandomValues: (arr: string | Array<string>): Buffer => crypto.randomBytes(arr.length)
  }
});
```

* <i>important</i> When writing unit tests and comparing snapshots, make sure to use shallow rendering. This is required because the unique id created by the UUID package will be recreated after each rerender, which increases the likelihood of failing a test.

## Documenting Components
Due to the ever-growing and continuously-changing nature of the cs-ui-components library, it is necessary	to document all components methodically and uniformly. Each component or component family (such as `CSTab` and `CSTabGroup`, which are closely related) should have its own dedicated page for various previews, examples, use cases and code snippets. In code, this is referred to as a preview component or a preview file, following the `CSNamePreview` naming convention.

All relevant documentation is placed inside the `getDoc` method of the preview component, which returns an object of type `CSUIPreviewInterface`. All relevant props and attributes are typechecked and typehinted. Their definitions can be found in the `types.ts` file.

This is an example of all possible first-level attributes of the documentation object.

```
getDoc = () => ({
  name: 'Alert',
  usage: 'Alert banners communicate...',
  alerts: {...} | [...],
  accessible: 'yes',
  components: [...],
  api: [...]
  accessibility: {...},
})
```

The name should be the conversational, user-facing name of the component or the component family (e.g. `CSTabGroup` and `CSTab` would go by `Tab`).

The usage attribute should communicate the component’s purpose in not more than a few sentences in order to provide an at-a-glance description.

When the accessible attribute is set to `'yes'` or `'partially'`, it will render an indicator of the extent of accessibility conformance requirements satisfaction. Otherwise, it will mark it as not accessible.

The components attribute is an array of objects containing data about the current component or all the components within the component family.

The accessibility attribute holds data and references about the accessibility conformance criteria related to the component family and explains how they are being met and supported.

Finally, the API attribute is optional and it may contain data on any API methods the component exposes.

The components attribute is an array of objects, each describing one of the components inside the current family. For instance, the alert page describes only one component, therefore its components attribute should contain only one object. At the same time, the Tab page contains two components (`CSTabGroup` and `CSTab`) and its components attribute should contain two distinct objects. In the case of multiple component within a family, they should be ordered hierarchically (e.g. `CSTabGroup` then `CSTab` or `CSModal`, `CSModalHeader`, `CSModalBody` and then `CSModalFooter`).

The object is typed as `ComponentInterface` inside of `types.ts` and an array of them should look something like this:

```
components: [
  {
    name: 'CSTabGroup',
    examples: [...],
    properties: [...]
  }, {
    name: 'CSTab',
    examples: [...],
    properties: [...]
  }
]
```

The component name, unlike the user-facing name used for the page, should match the exact component name and include the `CS` prefix. The examples attribute contains objects which define visual renders of the component alongside their code counterparts in order to demonstrate various component variants and props. All the props a component uses are documented inside the properties attribute.

### Writing Previews

Each individual component contains an examples attribute containing an array of objects of type `ExampleInterface`. The objects correlate to component props and should be sorted so that the required ones come first, followed by optional props, the id and class name props and finally children, if the component accepts them. Note that the id and class name previews, as well the children previews, should encompass all components within a component family under the hierarchically first example (e.g. children for the modal component family should be displayed as one example inside the `CSModal` component only).

```
examples: [
  {
    propName: 'closeButton',
    alert: {
      variant: 'info',
      text: 'This prop should only be used...'
    },
    description: 'This prop enables...',
    variations: [...]
  }
]
```

The prop name attribute should exactly match the prop name as defined in code. The prop can have an optional alert to draw the reader's attention. The use of alerts should generally be avoided. If you must use an alert, try to use the `info` variant, unless you are trying to indicate a deprecated or WIP prop. The description is also an optional attribute which should be used in case the prop’s usage or purpose are not eminently clear. In any case, it is encouraged to use consistent and friendly language when writing any user-facing content. Avoid using exclamation marks or similar as they make it seem as though the reader is being yelled at.

The variations attribute contains the actual examples and code for each of the prop’s use cases. It is an array of objects typed `PreviewVariation`.

```
variations: [
  {
    primaryVariants: 'loading={true}',
    secondaryVariants: [
      'labelHidden={true}',
      'btnStyle="brand"'
    ],
    quickLink: 'true',
    component: <CSButton ... />,
    code: '<CSButton ... />'
  }
]
```

The primary variants prop takes on either a string or an array of strings. Each of the variants should reflect the value of the prop or props in question. For example, if you are trying to show the error variant for an alert, you should use `variant="error"` as the string value. Please note that, unlike in TypeScript, prop values are wrapped in double quotes when used in JSX and the same convention should be followed here. If the property in question needs to show a non-string value, it should be encompassed in curly braces. For true booleans, we do not use the shorthand syntax in order to preserve clarity, that is why `closeButton={true}` should be used rather than just `closeButton`. For props that need to show a lot of text, it is acceptable to show them as `content="text"` . Also, for props that need to show arrays or objects, it is acceptable to shorten the displays to `content={[...]}` or `content={{...}}`. All the above also apply to the secondary variations attribute, except that the props shown inside of it should only be supporting props that the main prop relies on.

Quick link is an optional attribute used to allow linking to a certain variation rather than its parent prop. It should only be used if the prop contains more than one variation and it should mostly be in line with the prop’s value. It is important to order the variations hierarchically and only then alphabetically. For example, if the prop in question were size, the hierarchical order would take precedence and become `xsmall`, `small`, `medium`, `large`, `xlarge`. Sometimes not using the actual value of the prop is more user-friendly and that is not discouraged. For example, rather than putting various color values in quick links to display different color systems, it might be friendlier to just add quick links to something like  `rgb` and  `hex`.

The component attribute should contain valid JSX code used to render the example.  When using props inside the code, it is important to maintain legibility and readability at a glance. Because of that, whenever the component accepts two reasonably-sized props or less, it should not take up more than one line. If the lines are too long or the component takes more than two props, each of them should be shown on its own line. All props that are not related or necessary for the current example should be omitted. It is desirable for required props to be shown first. Here are some valid formatting examples:

```
component: <CSComponent />
```
```
component: <CSComponent>child</CSComponent>
```
```
component: <CSComponent prop1 prop2={false} />
```
```
component: <CSComponent prop1 prop2={false}>child<CSComponent>
```
```
component: <CSComponent
  prop1
  prop2={false}
  prop3="string"
/>
```
```
component: <CSComponent
  prop1
  prop2={false}
  prop3="string"
>
  child
</CSComponent>
```

Because of the way JSX works, it is virtually impossible for us to transpile it to plain strings. Because of that, we must duplicate the component attribute as a string or template literal to the code attribute, which will then render the code preview. If the code attribute takes up only one line, it should be wrapped in single quotes like a regular string, but if it wraps across multiple lines, it should be encompassed in backticks as a template literal in order to preserve indentation and formatting.

```
code: '<CSComponent />'
```
```
code: `<CSComponent
  prop1
  prop2={false}
  prop3="string"
/>`
```

Very often, the need to demonstrate some component alongside some state will occur. In that case, the preview component should be treated as stateful. When handler methods need to be used, they should be created directly in the preview component and they should follow the naming convention of `handleEventName`. Faux getters should be named `getAttributeName`.  State mutators should follow the convention of `verbStateName`.  Some of appropriate examples include:

```
handleClick = () => {}
handleMouseEnter = () => {}
getColors = () => {}
setVisibleModal = () => {}
toggleDarkTheme = () => {}
```

### Documenting Properties

Each component accepts a different set of props and it is important for them to stay up to date. This is so that we can be confident in what is at our disposal when using the components across various products. The properties attribute allows for exactly that. It is an array of objects typed as `PreviewProperty`.

```
properties: [
  {
    name: 'label',
    types: 'string',
    required: true
  }, {
    name: 'closeButton',
    types: 'boolean',
    default: false,
    description: 'Show the close button.'
  }, {
    name: 'iconOrigin',
    customTypes: {
      name: 'CSIconOrigin',
      types: [`'slds'`, `'cs'`]
    },
    default: `'slds'`,
  }, {
    name: 'onClose',
    types: '(event) => void',
    description: 'Handler method for closing the alert.'
  }, {
    name: 'text',
    types: ['string', 'Array<string>'],
    description: 'Set textual content of the alert.'
  }, {
    name: 'ariaHaspopup',
    required: 'CSButtonDropdown',
    types: 'boolean',
  }
]
```

The name attribute contains the name of the prop in question as defined in code.

The types attribute is a string or an array of strings, each containing a single primitive type the property can take on (e.g. `types: ['string', 'number']`) . If the type is not a data type per se, but a literal string, it is important to write it as a template literal to indicate that (e.g. ``types: [`'default'`, `'1rem'`]``).

When a prop is typechecked with a custom type, the custom types attribute should be used. It holds an object or an array containing data about the values the custom type can take on. It holds the name and the types, corresponding to the ones described above.

If the prop is required, the required attribute should be set to `true`. When wanting to show a relationship between a prop and its component's ancestor, the required attribute can be set to the code name of that ancestor in order to indicate that the prop is obtained by inheritance. It should be completely omitted otherwise.

If an implicit default value exists, it should be noted in the default attribute. The default value does not have to be defined as a default prop explicitly to be shown in the table. The table can include default values as set in CSS or JS conditioning as well.

The description is optional, but its use is highly encouraged. It should be a short, concise and complete sentence matching the voice and tone of other already existing descriptions. As mentioned previously, the use of exclamation marks is discouraged as they can convey a wrong tone.

### Working with Accessibility

Each of the examples, previews and property definitions is tied to a single component. However, accessibility conformance requirements often refer to the entire family of components. That is why they are placed as a first-level attribute in the documentation object.
