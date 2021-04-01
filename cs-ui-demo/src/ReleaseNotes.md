# Release Notes

## 1.1.6<a name="1.1.6"></a>
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
  * `onSelect` renamed to `onSelectChange`
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

## 1.1.5<a name="1.1.5"></a>
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

## 1.1.4<a name="1.1.4"></a>
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

## 1.1.3<a name="1.1.3"></a>
* CSButton
  * <i>important</i> added span wrapper around custom content passed through component children
* CSToast
  * <i>important</i> `minWidth` prop removed and replaced with `width` prop
* CSTooltip
  * hovering over tooltip fixed
  * default max-width fixed
  * fixed styling inconsistencies between different positions and stylePositions

## 1.1.2<a name="1.1.2"></a>
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

## 1.1.1<a name="1.1.1"></a>
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

## 1.1.0<a name="1.1.0"></a>
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
