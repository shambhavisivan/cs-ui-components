// Import SVG sprites
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import SldsIconSvg from '!raw-loader!./icons/slds-icons.svg';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import CsIconSvg from '!raw-loader!./icons/cs-icons.svg';

import CSAlert, {
	CSAlertStyleFormat,
	CSAlertStyleType,
	CSAlertTextAlign,
	CSAlertVariant,
	CSAlertProps,
} from './components/CSAlert';
import CSButton, {
	CSButtonIconPosition,
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSButtonWidth,
	CSButtonRole,
	CSButtonProps,
} from './components/CSButton';
import CSButtonGroup, { CSButtonGroupMargin, CSButtonGroupProps } from './components/CSButtonGroup';
import CSCard, { CSCardProps } from './components/card/CSCard';
import CSCardBody, { CSCardBodyProps } from './components/card/CSCardBody';
import CSCardFooter, { CSCardFooterAlign, CSCardFooterProps } from './components/card/CSCardFooter';
import CSCardHeader, { CSCardHeaderProps } from './components/card/CSCardHeader';
import CSCheckbox, {
	CSCheckboxLabelPosition,
	CSCheckboxVariant,
	CSCheckboxProps,
} from './components/CSCheckbox';
import CSChip, {
	CSChipVariant,
	CSChipVariantStyle,
	CSChipProps,
} from './components/CSChip';
import CSCurrency, {
	CSCurrencyDisplay,
	CSNotation,
	CSSignDisplay,
	CSCurrencySign,
	CSCurrencyProps,
} from './components/CSCurrency';
import CSCustomData, { CSCustomDataProps } from './components/custom-data/CSCustomData';
import CSCustomDataActions, { CSCustomDataActionsProps } from './components/custom-data/CSCustomDataActions';
import CSCustomDataIcons, { CSCustomDataIconsProps } from './components/custom-data/CSCustomDataIcons';
import {
	CSCustomDataIcon,
	CSCustomDataTooltip,
	CSCustomDataIconProps,
	CSCustomDataActionProps,
	CSCustomDataMenuVariant,
} from './util/CustomData';
import CSCustomSelect, {
	CSCustomSelectDropdownAlignType,
	CSCustomSelectDropdownPositionType,
	CSCustomSelectOptionInterface,
	CSCustomSelectSearchByType,
} from './components/custom-select/CSCustomSelect';
import CSDataTable, {
	CSDataTableCellClassName,
	CSDataTableColumnInterface,
	CSDataTableColumnAlign,
	CSDataTableDataInterface,
	CSDataTableDensity,
	CSDataTableElement,
	CSDataTableRender,
	CSDataTableRowInterface,
	CSDataTableRowMetaInterface,
	CSDataTableRowWithMetaInterface,
	CSDataTableSelectionType,
} from './components/data-table/CSDataTable';
import CSDatepicker, { CSDatepickerDropdownMode, CSDatepickerProps } from './components/CSDatepicker';
import CSDateTimePicker, { CSDateTimePickerDropdownMode, CSDateTimePickerProps } from './components/CSDateTimePicker';
import CSDivider, { CSDividerVariant, CSDividerProps } from './components/CSDivider';
import CSDropdown, {
	CSDropdownAlign,
	CSDropdownIconPosition,
	CSDropdownMode,
	CSDropdownPosition,
	CSDropdownSize,
	CSDropdownStyle,
	CSDropdownType,
} from './components/dropdown/CSDropdown';
import CSFieldErrorMsg, { CSFieldErrorMsgType, CSFieldErrorMsgProps } from './components/CSFieldErrorMsg';
import CSIcon, { CSIconOrigin, CSIconProps } from './components/CSIcon';
import CSImage, {
	CSImageColor,
	CSImageType,
	CSImageVariant,
	CSImageProps,
} from './components/CSImage';
import CSInputFile, { CSInputFileProps } from './components/CSInputFile';
import CSInputNumber, {
	CSInputNumberNumberLocale,
	CSInputNumberLocaleStyle,
	CSInputNumberProps,
} from './components/CSInputNumber';
import CSInputSearch, { CSInputSearchIconPosition, CSInputSearchProps } from './components/CSInputSearch';
import CSInputText, { CSInputTextProps } from './components/CSInputText';
import CSLabel, { CSLabelProps } from './components/CSLabel';
import CSList, { CSListSize, CSListVariant } from './components/list/CSList';
import CSListGroup, { CSListGroupCheckboxOption } from './components/list/CSListGroup';
import CSListItem from './components/list/CSListItem';
import CSLookup, {
	CSLookupDropdownAlign,
	CSLookupDropdownPosition,
	CSLookupFetchingMode,
	CSLookupFetchResult,
	CSLookupProps,
	CSLookupCommonProps,
	CSLookupServerProps,
	CSLookupClientProps,
} from './components/CSLookup';
import CSMainHeader, { CSMainHeaderColor } from './components/main-header/CSMainHeader';
import CSMainHeaderIcon from './components/main-header/CSMainHeaderIcon';
import CSMainHeaderLeft from './components/main-header/CSMainHeaderLeft';
import CSMainHeaderRight from './components/main-header/CSMainHeaderRight';
import CSModal, { CSModalSize } from './components/modal/CSModal';
import CSModalBody from './components/modal/CSModalBody';
import CSModalFooter, { CSModalFooterAlign } from './components/modal/CSModalFooter';
import CSModalHeader from './components/modal/CSModalHeader';
import CSPagination from './components/pagination/CSPagination';
import CSPaginationWrapper from './components/pagination/CSPaginationWrapper';
import CSPath from './components/path/CSPath';
import CSPathItem, { CSPathItemStatus } from './components/path/CSPathItem';
import CSProgressBar, {
	CSProgressBarStatus,
	CSProgressBarThickness,
	CSProgressBarProps,
} from './components/CSProgressBar';
import CSProgressIndicator from './components/progress-indicator/CSProgressIndicator';
import CSProgressIndicatorItem from './components/progress-indicator/CSProgressIndicatorItem';
import CSRadio, { CSRadioVariant } from './components/radio/CSRadio';
import CSRadioOption from './components/radio/CSRadioOption';
import CSSection, { CSSectionErrorMsgType, CSSectionProps } from './components/CSSection';
import CSSelect, { CSSelectProps } from './components/CSSelect';
import CSSidebar, { CSSidebarOpensTo } from './components/sidebar/CSSidebar';
import CSSidebarTab from './components/sidebar/CSSidebarTab';
import CSSkipLink, { CSSkipLinkProps } from './components/CSSkipLink';
import CSSlider, { CSSliderProps } from './components/CSSlider';
import CSSpinner, {
	CSSpinnerColor,
	CSSpinnerOverlay,
	CSSpinnerSize,
	CSSpinnerProps,
} from './components/CSSpinner';
import CSTab, { CSTabStatus } from './components/tab/CSTab';
import CSTabGroup, { CSTabGroupVariant } from './components/tab/CSTabGroup';
import CSTable from './components/table/CSTable';
import CSTableBody from './components/table/CSTableBody';
import CSTableCell from './components/table/CSTableCell';
import CSTableHeader from './components/table/CSTableHeader';
import CSTableRow from './components/table/CSTableRow';
import CSTextarea, { CSTextareaProps } from './components/CSTextarea';
import CSToast, { CSToastVariant, CSToastProps } from './components/CSToast';
import CSToggle, { CSToggleLabelPosition, CSToggleProps } from './components/CSToggle';
import CSTooltip, {
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipStylePosition,
	CSTooltipVariant,
	CSTooltipContent,
	CSTooltipProps,
} from './components/CSTooltip';
import CSTransfer, { CSTransferItemInterface, CSTransferVariant, CSTransferHelpText } from './components/transfer/CSTransfer';
import CSTransferItem from './components/transfer/CSTransferItem';
import CSTransferList, { CSTransferListType } from './components/transfer/CSTransferList';
import CSTree, { CSTreeItemInterface, CSTreeItemMetaInterface, CSTreeItemWithMetaInterface, CSTreeElementType, CSTreeRenderType } from './components/tree/CSTree';

import './sass/style.scss';

import CSToastApi from './api/CSToastAPI';

// Append sprites inside opening body tag
function getSpriteIcons() {
	const spriteContainer = document.createElement('div');
	spriteContainer.innerHTML = SldsIconSvg + CsIconSvg;
	document.body.insertBefore(spriteContainer, document.body.firstChild);
}

// Alternative to external sprite URL which causes CORS issues in Safari
if (document.readyState !== 'loading') {
	// document is already ready
	getSpriteIcons();
} else {
	document.addEventListener('DOMContentLoaded', () => {
		// document was not ready
		getSpriteIcons();
	});
}

export {
	CSAlert,
	CSAlertStyleFormat,
	CSAlertStyleType,
	CSAlertTextAlign,
	CSAlertVariant,
	CSAlertProps,
	CSButton,
	CSButtonGroup,
	CSButtonGroupMargin,
	CSButtonGroupProps,
	CSButtonIconPosition,
	CSButtonRole,
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSButtonWidth,
	CSButtonProps,
	CSCard,
	CSCardProps,
	CSCardBody,
	CSCardBodyProps,
	CSCardFooter,
	CSCardFooterProps,
	CSCardFooterAlign,
	CSCardHeader,
	CSCardHeaderProps,
	CSCheckbox,
	CSCheckboxLabelPosition,
	CSCheckboxVariant,
	CSCheckboxProps,
	CSChip,
	CSChipVariant,
	CSChipVariantStyle,
	CSChipProps,
	CSCurrency,
	CSCurrencyDisplay,
	CSNotation,
	CSSignDisplay,
	CSCurrencySign,
	CSCurrencyProps,
	CSCustomData,
	CSCustomDataProps,
	CSCustomDataActions,
	CSCustomDataActionsProps,
	CSCustomDataIcons,
	CSCustomDataIconsProps,
	CSCustomDataIcon,
	CSCustomDataTooltip,
	CSCustomDataIconProps,
	CSCustomDataActionProps,
	CSCustomDataMenuVariant,
	CSCustomSelect,
	CSCustomSelectDropdownAlignType,
	CSCustomSelectDropdownPositionType,
	CSCustomSelectOptionInterface,
	CSCustomSelectSearchByType,
	CSDataTable,
	CSDataTableCellClassName,
	CSDataTableColumnInterface,
	CSDataTableColumnAlign,
	CSDataTableDataInterface,
	CSDataTableDensity,
	CSDataTableElement,
	CSDataTableRender,
	CSDataTableRowInterface,
	CSDataTableRowWithMetaInterface,
	CSDataTableRowMetaInterface,
	CSDataTableSelectionType,
	CSDatepicker,
	CSDatepickerDropdownMode,
	CSDatepickerProps,
	CSDateTimePicker,
	CSDateTimePickerDropdownMode,
	CSDateTimePickerProps,
	CSDivider,
	CSDividerVariant,
	CSDividerProps,
	CSDropdown,
	CSDropdownAlign,
	CSDropdownIconPosition,
	CSDropdownMode,
	CSDropdownPosition,
	CSDropdownSize,
	CSDropdownStyle,
	CSDropdownType,
	CSFieldErrorMsg,
	CSFieldErrorMsgType,
	CSFieldErrorMsgProps,
	CSIcon,
	CSIconOrigin,
	CSIconProps,
	CSImage,
	CSImageColor,
	CSImageType,
	CSImageVariant,
	CSImageProps,
	CSInputFile,
	CSInputFileProps,
	CSInputNumber,
	CSInputNumberNumberLocale,
	CSInputNumberLocaleStyle,
	CSInputNumberProps,
	CSInputSearch,
	CSInputSearchIconPosition,
	CSInputSearchProps,
	CSInputText,
	CSInputTextProps,
	CSLabel,
	CSLabelProps,
	CSList,
	CSListGroup,
	CSListGroupCheckboxOption,
	CSListItem,
	CSListSize,
	CSListVariant,
	CSLookup,
	CSLookupDropdownAlign,
	CSLookupDropdownPosition,
	CSLookupFetchResult,
	CSLookupFetchingMode,
	CSLookupProps,
	CSLookupCommonProps,
	CSLookupServerProps,
	CSLookupClientProps,
	CSMainHeader,
	CSMainHeaderColor,
	CSMainHeaderIcon,
	CSMainHeaderLeft,
	CSMainHeaderRight,
	CSModal,
	CSModalBody,
	CSModalFooter,
	CSModalFooterAlign,
	CSModalHeader,
	CSModalSize,
	CSPagination,
	CSPaginationWrapper,
	CSPath,
	CSPathItem,
	CSPathItemStatus,
	CSProgressBar,
	CSProgressBarStatus,
	CSProgressBarThickness,
	CSProgressBarProps,
	CSProgressIndicator,
	CSProgressIndicatorItem,
	CSRadio,
	CSRadioOption,
	CSRadioVariant,
	CSSection,
	CSSectionErrorMsgType,
	CSSectionProps,
	CSSelect,
	CSSelectProps,
	CSSidebar,
	CSSidebarOpensTo,
	CSSidebarTab,
	CSSkipLink,
	CSSkipLinkProps,
	CSSlider,
	CSSliderProps,
	CSSpinner,
	CSSpinnerColor,
	CSSpinnerOverlay,
	CSSpinnerSize,
	CSSpinnerProps,
	CSTab,
	CSTabGroup,
	CSTabGroupVariant,
	CSTabStatus,
	CSTable,
	CSTableBody,
	CSTableCell,
	CSTableHeader,
	CSTableRow,
	CSTextarea,
	CSTextareaProps,
	CSToast,
	CSToastApi,
	CSToastVariant,
	CSToastProps,
	CSToggle,
	CSToggleLabelPosition,
	CSToggleProps,
	CSTooltip,
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipStylePosition,
	CSTooltipVariant,
	CSTooltipContent,
	CSTooltipProps,
	CSTransfer,
	CSTransferVariant,
	CSTransferHelpText,
	CSTransferItem,
	CSTransferItemInterface,
	CSTransferList,
	CSTransferListType,
	CSTree,
	CSTreeItemInterface,
	CSTreeItemMetaInterface,
	CSTreeItemWithMetaInterface,
	CSTreeElementType,
	CSTreeRenderType,
};
