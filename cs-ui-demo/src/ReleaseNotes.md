# Release Notes

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
  * <i>important</i> Modals now have a `visible` prop which manages their own visibility. All modals should now use `visible` prop.
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
