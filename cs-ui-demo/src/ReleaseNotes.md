# Release Notes

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
