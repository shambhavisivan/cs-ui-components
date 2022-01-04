# CS UI Components - Release Notes

## 2.0.1
* General
  * added rules for eslint-plugin-react-hooks
  * added the latest icons to the SLDS icon set
* CSAlert
  * fixed close button position when `styleFormat="scoped"`
  * fixed close button and icon styling when `styleType="light"`
* CSAutoposition
  * implemented optional chaining of DOMRect objects
  * fixed autoposition for top and bottom positions
* CSButton
  * removed icon darken while hovering on `btnStyle="brand"`
  * fixed iconPosition and size props alignment issue
* CSButtonGroup
  * changed classes with `.cs-button` prefix to `.cs-btn`
* CSDataTable
  * <i>important</i> flipped the default value for the `defaultCollapsed` prop to `true`
* CSCard
  * renamed `cs-card-button` class to `cs-card-toggle-btn` in `CSCardHeader`
  * renamed `showBorder` prop to `hideBorder` and reversed logic in `CSCardHeader`
* CSCheckbox
  * Limited stopPropagation to only enter and space keys
* CSCustomSelect
  * <i>important</i> renamed the `actions` prop to `dropdownActions`
  * added `errorTooltip` support
  * added `onDropdownClose` prop
* CSDropdown
  * added `routerLink` prop
  * fixed keyboard navigation when mode is 'button' and minor style fixes
* CSDatePicker
  * changed the `todayButton` prop from boolean to string
* CSDateTimePicker
  * changed the `todayButton` prop from boolean to string
* CSInputFile
  * added `fileSelectedLabel` prop
  * set `label` prop to be optional
* CSInputNumber
  * added `locale` prop
* CSList
  * fixed `self-select` option
* CSModal
  * <i>important</i> changed `visible` prop in `CSUnmountDelay` to be `false` by default
  * changed classes with `.cs-button` prefix to `.cs-btn`
* CSRadio
  * added `hidden` prop
* CSRadioOption
  * changed `name` prop to required
  * changed `cs-radio-label` class to `cs-radio-option-wrapper`
  * added `cs-radio-option-label` class to the label span
* CSSection
  * replaced collapsible button with `CSButton`
* CSSidebar
  * set `expanded` prop to be `false` by default
  * fixed breaking error when no tabs are added inside `CSSidebar`
  * changed classes with `.cs-button` prefix to `.cs-btn`
* CSTextarea
  * added expand button when `readonly={true}` and content is larger than field
  * renamed class `.cs-textarea-options` to `.cs-textarea-error-message` on `errorTooltip`
* CSTooltip
  * fixed breaking error on long delay and stickyOnClick props combo
* CSTransfer
  * <i>important</i> restructured component to be function-based and stateless
  * <i>important</i> renamed `dataSource` to `items`
  * <i>important</i> renamed items `name` to `label`
  * <i>important</i> renamed `onChange` to `onTransfer`
  * <i>important</i> merged `sourceHelpText` and `targetHelpText` into `helpText` object prop which accepts `source` and `target` string properties - each for the corresponding transfer list
* Tests added to components
  * CSAutoposition
  * CSButton
  * CSButtonGroup
  * CSCard
  * CSCheckbox
  * CSChip
  * CSCurrency
  * CSCustomData
  * CSCustomSelect
  * CSDatepicker
  * CSDateTimePicker
  * CSDivider
  * CSFieldErrorMessage
  * CSIcon
  * CSImage
  * CSInputFile
  * CSInputNumber
  * CSInputSearch
  * CSInputText
  * CSLabel
  * CSList
  * CSLookup
  * CSMainHeader
  * CSModal
  * CSPath
  * CSProgressIndicator
  * CSRadio
  * CSSection
  * CSSelect
  * CSSidebar
  * CSSlider
  * CSSpinner
  * CSTab
  * CSTextarea
  * CSToast
  * CSToggle
  * CSTooltip
  * CSTransfer

## 2.0.0
* General
  * added `CSAutoposition` component
  * create CSS helper for blinking cursors
* CSAlert
  * replaced close button with `CSButton`
* CSButton
  * <i>important</i> removed `iconDisplay` prop
  * fixed style issues on hover and active states on brand buttons
  * fixed `size` prop overriding `iconSize` prop
* CSCard
  * fixed `collapsible` prop
  * added `borderRadius` prop
  * added `bgColor` prop to CSCardHeader and CSCardFooter
  * made component functional
* CSCheckbox
  * <i>important</i> removed `onClick` prop
  * added `icons` and `actions` props
  * added `onBlur` prop
  * change `checked` to default to false
  * fixed `indeterminate` to override checked
  * fixed event propagation on click and keyboard events
* CSCustomData
  * <i>new</i> new component added
* CSCustomSelect
  * <i>important</i> restructured component
  * replaced autoposition code with `CSAutoposition`
  * added `ref` forwarding
  * added `placeholder` prop
  * added `showCompactMultiselect` prop
  * added `gridCustomPopup` prop for custom popup support in CSGrid
  * added blinking indicator
  * fixed style issues
* CSDataTable
  * <i>new</i> new component added
* CSDatePicker and CSDateTimePicker
  * added `icons` and `actions` props
  * added `onBlur` prop
* CSDropdown
  * replaced autoposition code with `CSAutoposition`
  * fixed broken `dropdownClassName` prop
  * restructured `mode="custom"` html
* CSFieldErrorMsg
  * fixed `tooltipMessage` support for array of messages
  * fixed line height for multiline error messages
* CSInputNumber
  * added `icons` and `actions` props
  * fixed focusable `readOnly` input field with mouse click
* CSInputText
  * fixed focusable `readOnly` input field with mouse click
* CSList
  * removed `.cs-list-item-text` if no text is passed as a prop
* CSLookup
  * <i>important</i> replaced `CSTable` with `CSDataTable`
  * <i>important</i> renamed `lookupColumns` to `columns`
  * <i>important</i> renamed `onLookupDropdownClose` to `onDropdownClose`
  * <i>important</i> renamed `fetchLookupOptions` to `fetchOptions`
  * <i>important</i> renamed `lookupOptions` to `options`
  * <i>important</i> `columns` and `options` prop types restructured
  * replaced autoposition code with `CSAutoposition`
  * added `event.stopPropagation()` for `ESC` key press
  * added `icons` and `actions` props
  * added `onBlur` prop
  * fixed crashing in CSGrid because of adding event listener on nonexisting ref element
  * fixed style inconsistency on down arrow
* CSModal
  * replaced close button with `CSButton`
  * set `animated` prop to true by default
* CSRadio
  * added `value` prop to `CSRadioOption`
  * added `onBlur` prop to `CSRadioOption`
  * fixed event propagation on click and keyboard events
* CSSection
  * added `borderRadius` prop
  * added `bgColor` prop
  * added `hideSectionHeader` prop
  * added `error` and `errorMessage` props
* CSSelect
  * added `icons` and `actions` props
  * added `onBlur` prop
  * fixed style inconsistency on down arrow
* CSSidebar
  * made component stateless
  * fixed close animation styles
* CSSlider
  * fixed styling issues
* CSTab
  * fixed active state overriding custom icons
* CSTable
  * <i>important</i> made component deprecated
* CSTextarea
  * added `icons` and `actions` props
* CSToast
  * <i>important</i> renamed `iconVisibility` to `iconHidden`
  * replaced close button with `CSButton`
  * added `clearAllToasts` method to CSToastApi
* CSToggle
  * added `icons` and `actions` props
  * fixed event propagation on click and keyboard events
* CSTooltip
  * replaced autoposition code with `CSAutoposition`
* CSTransfer
  * fixed event propagation on click and keyboard events
* CSTree
  * <i>new</i> new component added
* Demo App changes
  * demo app redesign
  * added Future Scope page
  * added CSForm page
  * added `copy preview code to clipboard` button
  * added `ignore-engines` after yarn command to fix incompatible node jenkins error
  * fixed style issues
* Tests added to components
  * CSAlert
  * CSProgressBar
  * CSSkipLink

## 1.1.25
* General
  * <i>important</i> added `Jest` & `Enzyme` initial setup
  * <i>important</i> replaced `TSLint` with `ESLint`
  * updated reset styles for Salesforce environment markup and styles
* CSCheckbox
  * added `indeterminate` prop
* CSCurrency
  * added option to format value without adding symbol
* CSIcon
  * fixed `className` prop to apply to the frame wrapper instead of svg when `frame={true}`
* CSDateTimePicker
  * fixed misaligned list items in time column
  * fixed selected day styles
* CSDropdown
  * fixed `up` and `down` keyboard support on `mode=button` when `CSButton` is inside another component inside dropdown (multilevel-hierarchy)
  * dropdown's min-width  is now set to width of a toggle button
  * added `dropdownClassName` prop which adds custom class to the dropdown wrapper
* CSSidebar
  * fixed selected class not being removed when dropdown is closed on a multiple tabs setting

## 1.1.24
* General
  * <i>important</i> updated react and npm packages to latest version in cs-ui-components and cs-ui-demo
  * <i>important</i> switched components and demo to yarn and made use of yarn workspaces
  * `README` documentation updated
  * added console warnings for WIP components
  * removed `@include` inside animation keyframe to fix jsdom parse error when using jest across projects
* CSCard
  * added `children` and `padding` props on `CSCardHeader`
  * changed `title` to be optional prop
  * style fixes
* CSDatePicker
  * changed `selected` prop type from `Date` to `Date | null | undefined`
  * fixed misplaced arrow icon
* CSList
  * added accessibility attributes
* CSLookup
  * fixed BUG-07743 by resetting `pageNo` and `moreRecords` state on blur
  * added `dropdownHeight` and `dropdownWidth` props
* CSTooltip
  * fixed warning react `setState` on unmounted component
* Demo App changes
  * changed localhost port to 9000
  * sidebar style updates

## 1.1.23

  * version skipped

## 1.1.22
* CSButton
  * fixed initial transparent button styles
* CSCheckbox
  * removed unnecessary `componentDidUpdate`
* CSCustomSelect
  * fixed `exportValue` causing app to break when clear button is pressed
  * arrow icon changed to match other dropdown components
* CSDatePicker and CSDateTimePicker
  * fixed `openToDate` prop causing app to break on Safari
  * fixed misaligned clear and calendar icons
  * updated `react-datepicker` package version to 3.3.0
* CSDropdown
  * `title` prop added
  * set dropdown min-width to the width of the toggle button
* CSIcon
  * `rotate` prop now accepts number value
* CSInputFile
  * fixed incorrect `errorMessage` styling
* CSList
  * <i>important</i> `title` prop renamed to `text` on CSListGroup
  * fixed `checkboxOption="select-self"` not working
* CSLookup
  * fixed `readOnly` styles
  * space added between `multiselect` options
  * arrow icon changed to match other dropdown components
* CSSlider
  * <i>important</i> `size` prop replace with `width`
  * fixed `error` prop not working
  * fixed `readOnly` thumb styles
  * fixed slider height issue
* CSTab
  * increase text line-height to fix letter cutoff
  * fixed small gap between tabs in Safari
* CSTextArea
  * min-height increased
* CSTransfer
  * improvement on `searchable` prop - disable input search if there is no list items in corresponding list
* Demo App changes
  * added `/cs-ui-demo` route prefix
  * fixed reloading url with hash to open file on that anchor
  * scroll spy added to all sidebars within the app
  * button showcase table redesign
  * removed 'Under construction' alert message on CSLookup and CSPath
  * removed unused `ToggleTheme.tsx` and `PreviewBlacklogList.tsx` files
  * updated `README.md` file in cs-ui-components and cs-ui-demo repository folders
  * updated `Getting Started` page
  * fixed attributes accessibility section not rendering
  * various UI fixes throughout the app

## 1.1.21
* CSLookup
  * hide clear button when loading
* CSDropdown
  * fixed dropdown to close on `esc` when `mode="custom"`
* CSDatepicker and CSDateTimePicker
  * added `onKeyDown` prop
  * added `onSelect` prop
* Demo App changes
  * added title on form element indicators in sidebar list

## 1.1.20
* CSDateTimePicker
  * added `ref` forwarding
* CSDropdown
  * added `onDropdownClose` prop
  * added `onDropdownOpen` prop
* CSLookup
  * click on table header inside dropdown does not close dropdown anymore
  * z-index increased to be greater than modal one
* Demo App changes
  * fixed field disappearing when tabbed in search field
  * fixed clear button display
  * fixed missing dependency 'toggleTheme' error

## 1.1.19
* CSLookup
  * `gridCustomPopup` prop added
  * fixed multiselect selected values not displaying when dropdown is open
  * fixed clear button visibility on multiselect when values are present
  * lookup dropdown `max-width` increased
  * added `multiselect` feature
* CSSidebar
  * `max-height: 100%` added to prevent sidebar overflow on smaller screens
* CSTooltip
  * `onMouseOver` event returned to `onMouseEnter`
* Demo App changes
  * form indicator added to form element components

## 1.1.18
* CSDatepicker and CSDateTimePicker
  * <i>important</i> set `onChange` and `selected` props to required
  * internal state removed
  * month and year select elements styling changes
  * state added to preview files
* CSDropdown
  * `onMouseEnter` event replaced with `onMouseOver`
* CSLookup
  * fixed placeholder visibility when `selectedOption` is set
* CSToast
  * <i>important</i> markup structure changes
  * <i>important</i> class name `.cs-toast-notification` renamed to `.cs-toast-root` to match standard
  * fixed toast wrapper not being included in reset file
  * fixed width issue with long text
* Demo App changes
  * z-index list updated
  * minor preview file fixes

## 1.1.17
* CSButton
  * increased z-index of `--z-index-button-custom-content`
* CSDatepicker and CSDateTimePicker
  * `selected` prop added
  *  removed internal state
* CSLookup
  * fixed enter issue on falsy search term
  * added missing `onLookupDropdownClose` prop to props destructure
* CSTab
  * `width` prop added

## 1.1.16
* CSDatepicker
  * fixed calendar icon position when there is an error message
* CSInputNumber
  * fixed `readOnly` styling
* CSInputText
  * fixed `readOnly` styling
* CSLookup
  * fixed `onBlur` events
  * added `onLookupDropdownClose` prop
  * separate `searchTerm` from `selectedOptions` in input value attribute
* CSSelect
  * fixed `readOnly` styling
* CSTextarea
  * fixed `readOnly` styling
* All Components
  * added missing `id` and `className` props across components
* Demo App changes
  * various preview files clean up changes
  * component quick links renamed to match UI component name
  * removed legacy components
    * PreviewLinks
    * PreviewProperties
    * PreviewTable

## 1.1.15
* CSDropdown
  * <i>important</i> `onDropdownKeyboardClose` prop replaced with `onDropdownTabClose`
  * opening dropdown on arrow down key removed
* CSTooltip
  * `onMouseEnter` event replaced with `onMouseOver`
* Documentation object restructure
  * Dropdown

## 1.1.14
* CSDatepicker and CSDateTimePicker
  * icon overlapping with text on small screens fixed
  * input `ref` set to public
  * `onChange` type fixed
* CSList
  * fixed :hover, :focus and :active styles
* CSLookup
  * `autoFocus` prop added
  * fixed app breaking when `activeRowIndex` is null
  * input `ref` set to public
  * holding backspace won't delete selected item fixed
  * implemented prevent update of inner state if `onSelect` returns false
* CSRadio
  * fixed changing value with keyboard when `readOnly={true}`
* CSModalBody
  * `minHeight` prop added
* Demo App changes
  * fix dark mode persisting after refresh
  * added support for dark theme in code previews
  * demo app now has theme file with css variables and color mixins
  * all css variable names now have `--csd-` prefix to avoid conflicts with variables from other theme files
  * various dark and light mode fixes
* Documentation object restructure
  * Custom Select
  * Table
  * Transfer
  * Lookup

## 1.1.13
* CSDropdown
  * `width` prop added
* CSLookup
  * accessibility attributes added
* CSProgressBar
  * <i>important</i> `progressIndicator` prop replaced with `infoText` which now accepts any string
  * `borderRadius` prop added
  * `status` prop added
* CSRadio
  * `readOnly` :focus-visible styles added
* CSSlider
  * `readOnly` prop added
* CSToggle
  * `readOnly` prop added
* CSTooltip
  * updating inner state from props fixed

## 1.1.12
* CSCheckbox
  * `readOnly` :focus styles moved to :focus-visible
* CSDatepicker
  * `autoFocus` prop added
* CSFieldErrorMsg
  * word-wrap to error message added
* CSLookup
  * keyboard navigation breaking the app fixed
  * lookup icons position fixed when `error={true}`
  * `position='top'` and `align='right'` dropdowns cannot be closed fixed
* CSSection
  * background color issue fixed
  * updated accessibility info

## 1.1.11
* CSCheckbox
  * `hidden` prop added
* CSDatepicker
  * `inline` prop added
* CSDropdown
  * fixed `CSDivider` being wrapped inside list item
  * focus handling optimization for `mode="list"` and `mode="custom"`
  * focus change with tab moves to next focusable element rather than the dropdown button
* CSFieldErrorMessage
  * changed position property from `absolute` to `relative`
  * slide animation added
* CSLookup
  * `readOnly` prop added
  * ensured scrolling on smaller number of records when `infiniteScroll` is set to `true`
  * added max width to lookup dropdown to ensure horizontal scroll when there is a lot of columns
* CSModal
  * when closing modal focus will return to button which opened modal
* CSProgresIndicator
  * fixed selected item hover color
  * :focus styles moved to :focus-visible
* CSSidebar
  * <i>new</i> new component added
* CSTextarea
  * textarea now takes auto height instead of default `rows` height when `readOnly` is set to `true`
* CSTransfer
  * :focus styles moved to :focus-visible
* Demo App changes
  * quick links search does not show the entire prop anymore if it matches only one variant
  * accessibility table updated across components
  * `iconName` and `iconOrigin` examples merged to one
  * various minor fixes

## 1.1.10
* CSLookup
  * implemented ResizeObserver API
  * fixed logic for clear button when lookup is disabled
  * fixed lookup dropdown row padding

## 1.1.9
* CSIcon
  * CSS height and width replaced with `size` prop across components
    * CSDatepicker
    * CSInputFile
    * CSModal
    * CSSection
    * CSSelect
    * CSTab
    * CSToast
    * CSTooltip
* CSLookup
  * fixed error thrown on lookup search
  * click on icons not opening dropdown fixed
  * dropdown not opening on input click fixed
  * onFocus preview fixed
  * `preventUpdate` prop removed
  * lookup error styles fixed
  * infiniteScroll loading styles changed
  * selected item focus style fix
* CSSection
  * padding fixed on non-collapsible sections
  * focus and active style update
* Demo App changes
  * dark mode button fix

## 1.1.8
* CSButton
  * focus and active style update
* CSCurrency
  * expand `title` prop to support boolean type which will display formatted value in the tooltip when `true`
* CSCustomSelect
  * <i>important</i> `onChange` prop renamed to `onSearch`
* CSDropdown
  * autoposition fixed when `hover={true}`
  * hovering on dropdown fixed when `hover={true}` and dropdown opens on top
* CSInputFile
  * focus and active style update
* CSListGroup
  * focus and active style update
* CSLookup
  * <i>important</i> component renamed from CSLookupField to CSLookup
  * <i>important</i> complete component refactor
  * <i>important</i> `mode` prop added with `server` and `client` options
* CSModal
  * <i>important</i> custom `className` moved from `.cs-modal-wrapper` to `.cs-modal-overlay`
  * fix `forwardRef` console error when modal opens
  * remove obsolete `switchFocusOnClose` code
* CSSlider
  * focus and active style update
* CSTab
  * focus and active style update
* CSTableRow
  * `onMouseDown`, `onMouseOut` and `onMouseOver` props added
* CSTextarea
  * default `rows` value fixed
* CSToggle
  * focus and active style update
* Demo App changes
  * fix for code preview wrapping on small screens
  * added links to supportive documents in accessibility tab
  * minor preview file changes
  * various minor fixes
* Documentation object restructure
  * Currency

## 1.1.7
* CSButtonGroup
  * fixed border radius when there is only one child
* CSTooltip
  * dynamic tooltip fix to accept generator functions
  * `Esc` keydown breaking the app while promise is used fixed

## 1.1.6
* CSAlert
  * <i>important</i> `iconVisibility` prop renamed to `iconHidden`
  * alignment fix when there is more than one message
* CSButton
  * fix for `iconColor` not respected when different `btnType` is used
  * missing hover styles for button with iconColor added
  * updated buttons across components to use `labelHidden` instead of `iconDisplay`
  * minor styling fixes
* CSCard
  * `defaultClosed` prop added
* CSCheckbox
  * `labelPosition="right"` option added
  * brand border added on :focus
* CSChip
  * `color` prop added
* CSCurrency
  * <i>new</i> new component added
* CSCustomSelect
  * scroll into view when option is not visible after keyboard navigation
  * fixed keyboard event listener that was breaking the app when no element was focused
* CSDatepicker
  * calendar icon removed on readOnly field
  * readOnly field is now focusable
* CSDateTimePicker
  * calendar icon removed on readOnly field
  * readOnly field is now focusable
* CSDropdown
  * autoposition feature added to dropdown popup
  * keyboard support added to dropdowns with `mode="button"`
* CSInputText
  * internal state of CSInputText removed
* CSList
  * `checkboxOption="not-selectable"` support added to CSListGroup
  * `onSelect` renamed to `onSelect`
  * minor styling fixes
* CSMainHeader
  * `color="success"` option added
* CSModal
  * enable closing modal with `Esc` button
  * missing `classNames` support added on CSModalHeader, CSModalBody and CSModalFooter components
* CSPath
  * <i>important</i> `title` prop renamed to `name`
  * `warning` status option added
  * `className` prop added
  * :focus styles moved to :focus-visible
* CSProgressBar
  * `undefined` className fixed when thickness is not explicitly set
* CSRadio
  * `disabled` prop now disables all radio options
  * fix for selecting an option responding only after clicking twice
  * brand border added on :focus
* CSSpinner
  * `overlay="transparent"` option added
* CSTab
  * <i>important</i> `title` prop renamed to `name`
  * increase active border height on large variant
* CSToast
  * padding fixed when no close button
* CSTooltip
  * add dynamic content support by Promise content type
  * enable closing tooltip with `Esc` button
  * fixed box-shadow on basic variants
* CSTransfer
  * fixed empty list keyboard event listener that was breaking the app
* Demo App changes
  * quickLinks sidebar - complete redesign
  * accessibility section updated across all components
  * documentation for preview files added to Getting Started page
  * various minor fixes
* Documentation object restructure
  * Alert
  * Button
  * Button Group
  * Card
  * Checkbox
  * Chip
  * Datepicker
  * DateTimePicker
  * Divider
  * Field Error Message
  * Icon
  * Image
  * Input File
  * Input Number
  * Input Search
  * Input Text
  * Label
  * List
  * Main Header
  * Modal
  * Pagination
  * Path
  * Progress Bar
  * Progress Indicator
  * Radio
  * Section
  * Select
  * Skip Link
  * Slider
  * Spinner
  * Tab
  * Textarea
  * Toast
  * Toggle
  * Tooltip

## 1.1.5
* CSButton
  * <i>important</i> `labelHidden` prop added to eventually replace `iconDisplay` prop
* CSButtonGroup
  * fix undefined class added when marginPosition prop isn't passed
* CSCheckbox
  * `labelPosition` prop added
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSCustomSelect
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSDatepicker
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSDateTimePicker
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
  * width fix when not enough space
* CSInputNumber
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSInputSearch
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSInputText
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSMainHeader
  * remove fixed height
* CSSection
  * <i>important</i> `collapsed` prop removed and replaced with `defaultClosed` prop
  * <i>important</i> several classNames changed to better describe what they are
* CSSelect
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSTextarea
  * <i>important</i> `borderType` prop removed and replaced with `borderRadius` prop
* CSTab
  * `iconOrigin` support added
* CSTooltip
  * fix tooltip not closing on blur when `stickyOnClick={true}`
  * fix eventListener removal when `stickyOnClick={true}`
  * fix body expanding for tooltip with header
* Demo App changes
  * quick links now also filter by prop variant
  * fix font size inconsistencies across demo app
  * accessibility table change to CSTable
  * API table change to CSTable
  * children props are now properly documented
  * various minor fixes
  * restyle of preview files
* Documentation object restructure
  * Field Error Message
  * Pagination
  * Progress Indicator
  * Skip Link

## 1.1.4
* CSAlert
  * padding fixed when no close button
* CSButton
  * <i>important</i> `btnRound` prop removed and replaced with `borderRadius` prop
* CSCustomSelect
  * icon and hover/focus color fixes
* CSProgressIndicator
  * hex colors changed to css variables
* CSTable
  * `rowSelected` prop added on CSTableRow component
* CSToast
  * padding fixed
* CSTooltip
  * higher specificity on tooltip hover added to fix tooltips nested inside other tooltips not to receive inherited styles
  * `stickyOnClick` prop changed to work in cs-grid
* CSTransfer
  * fixed keyboard multiselect on Mac
* CloudSense icon set
  * new icons added: package_outline, package_solid, currency_euro, currency_dollar, currency_pound
* Demo App changes
  * accessibility page updated
  * z-index list updated
  * alerts are now aligned with other content

## 1.1.3
* CSButton
  * <i>important</i> added span wrapper around custom content passed through component children
* CSToast
  * <i>important</i> `minWidth` prop removed and replaced with `width` prop
* CSTooltip
  * hovering over tooltip fixed
  * default max-width fixed
  * fixed styling inconsistencies between different positions and stylePositions

## 1.1.2
* CSButton
  * <i>important</i> `label` prop set as default
  * fixed event type on onKeyDown and onMouseDown events
* CSCustomSelect
  * <i>new</i> component redesign
* CSDropdown
  * `defaultOpen` prop added
* CSTooltip
  * `stickyOnClick` prop added
  * positioning of tooltips with custom children fixed
  * simplify code for basic variant tooltips
* CSInputFile
  * max-width added to limit width of files with long names
  * highlight styles prevented when dragged item isn't file
* CSInputSearch
  * added named type for iconPosition prop
  * prevented losing focus after clear button is clicked
* CSModal
  * <i>important</i> `id` moved to .modal-overlay div
* CSProgressIndicator
  * `loading` status added
  * <em>preview</em> accessibility requirements added
* CSTransfer
  * `id` prop added
  * `dataSource` prop set as required
  * hover and focus styles fixed
  * <em>preview</em> accessibility requirements added
  * <em>preview</em> preview file cleanup

## 1.1.1
* CSAlert
  * `iconOrigin` prop added
* CSButton
  * fixed validation of component prop types
  * `pointer-events: none` removed from disabled button
* CSCard
  * `collapsible` prop added
* CSChip
  * warning variant color adjustment
* CSIcon
  * arbitrary props fixed
* CSList
  * <i>new</i> new List component added
* CSPath
  * <em>preview</em> accessibility section added
* CSSlider
  * exported value changed to a state
* CSProgressIndicator
  * arbitrary props support added
  * <em>preview</em> className example fix
* CSProgressBar
  * <em>preview</em> simulate progress section - start delayed progress functionality fixed
* CSTab
  * arbitrary props fixed
* CSToast
  * `iconOrigin` prop added
* CSTooltip
  * `maxHeight` and `maxWidth` props added
  * `iconOrigin` prop added
  * overflow auto added for tooltips with fixed height/width
  * fixed auto-positioning for top-center and bottom-center positions
  * basic variant position and shadow styling fixes
* Demo App changes
  * long label removed from version tag
  * dark mode button now has a WIP explanatory tooltip
  * various minor styling fixes

## 1.1.0
* CSAlert
  * light variants colors changed to match accessibility requirements
* CSButton
  * `title` prop added
  * functionality for ref forwarding added
* CSCard
  * added icon support to header, styling props to body, minor styling fixes
  * `className` support added to CardHeader, CardBody and CardFooter components
* CSCheckbox
  * <i>important</i> `className` moved to `.cs-checkbox-wrapper` from `.cs-checkbox-group`
  * `onKeyDown` support added
  * `readOnly` prop added
* CSChip
  * success and warning variant colors changed to match accessibility requirements
* CSCustomSelect
  * fixed keyboard navigation bug which breaks the app
* CSDatepicker and CSDateTimePicker
  * max-width added to fix overflow issue when there's not enough space for default datepicker width
  * fix closing datepicker on tab
* CSDropdown
  * open/close transition added
* CSIcon
  * title attribute fixed
* CSInputFile
  * label overflow fixed
  * dragging text to input file will no longer break the app
* CSInputNumber
  * <i>important</i> `className` moved to `.cs-input-number-wrapper` from `.cs-input-number`
* CSInputSearch
  * <i>important</i> `className` moved to `.cs-input-search-wrapper` from `.cs-input-search-group`
* CSInputText
  * <i>important</i> `className` moved to `.cs-input-text-wrapper` from `.cs-input-text`
* CSModal
  * <i>important</i> modals now have a `visible` prop which manages their own visibility. All modals should now use `visible` prop.
  * transition on open/close modal added
* CSPath
  * CSPath and CSPathWrapper component are now combined into one
  * props and styles for success/error/active states added
* CSProgressIndicator
  * <i>new</i> new Progress Indicator component added
* CSRadio
  * <i>important</i> `className` moved to `.cs-radio-wrapper` from `.cs-radio-group`
  * `readOnly` prop added
* CSSelect
  * <i>important</i> `className` moved to `.cs-select-wrapper` from `.cs-select-group`
  * `readOnly` prop added
* CSTab
  * <i>important</i> `className` moved to `.cs-toast-wrapper` from `.cs-toast`
* CSTableHeader
  * `headerSticky` prop support added
* CSTextarea
  * <i>important</i> `className` moved to `.cs-textarea-wrapper` from `.cs-textarea`
* CSToggle
  * <i>important</i> `className` moved to `.cs-toggle-element` from `.cs-toggle-wrapper`
* CSTooltip
  * new positions added: `left-top`, `left-bottom`, `left-center`, `right-top`, `right-bottom`, `right-center`
* CSTransfer
  * <i>new</i> new Transfer component added
* KeyCode util
  * new file created which holds all used keycodes in the cs-ui-components lib to be imported as a module in components when needed
* Demo App changes
  * <i>Important</i> prop documentation restructure and rework
  * moved styles into separate files
  * theme file with color variables added
  * various minor styling fixes
