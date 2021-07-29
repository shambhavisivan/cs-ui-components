// Import SVG sprites
import SldsIconSvg from '!raw-loader!./icons/slds-icons.svg';
import CsIconSvg from '!raw-loader!./icons//cs-icons.svg';

import CSAlert, {
	CSAlertStyleFormat,
	CSAlertStyleType,
	CSAlertTextAlign,
	CSAlertVariant,
} from './components/CSAlert';
import CSButton, {
	CSButtonIconDisplay,
	CSButtonIconPosition,
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSButtonWidth,
	CSButtonRole,
} from './components/CSButton';
import CSButtonGroup, { CSButtonGroupMargin } from './components/CSButtonGroup';
import CSCard from './components/card/CSCard';
import CSCardBody from './components/card/CSCardBody';
import CSCardFooter, { CSCardFooterAlign } from './components/card/CSCardFooter';
import CSCardHeader from './components/card/CSCardHeader';
import CSCheckbox, {
	CSCheckboxLabelPosition,
	CSCheckboxVariant,
} from './components/CSCheckbox';
import CSChip, {
	CSChipVariant,
	CSChipVariantStyle,
} from './components/CSChip';
import CSCurrency, {
	CSCurrencyDisplay,
	CSNotation,
	CSSignDisplay,
	CSCurrencySign,
} from './components/CSCurrency';
import CSCustomSelect, { CSCustomSelectExportValueType } from './components/custom-select/CSCustomSelect';
import CSDatepicker, { CSDatepickerDropdownMode } from './components/CSDatepicker';
import CSDateTimePicker, { CSDateTimePickerDropdownMode } from './components/CSDateTimePicker';
import CSDivider, { CSDividerVariant } from './components/CSDivider';
import CSDropdown, {
	CSDropdownAlign,
	CSDropdownIconPosition,
	CSDropdownMode,
	CSDropdownPosition,
	CSDropdownSize,
	CSDropdownStyle,
	CSDropdownType,
} from './components/dropdown/CSDropdown';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './components/CSFieldErrorMsg';
import CSIcon, { CSIconOrigin } from './components/CSIcon';
import CSImage, {
	CSImageColor,
	CSImageType,
	CSImageVariant,
} from './components/CSImage';
import CSInputFile from './components/CSInputFile';
import CSInputNumber from './components/CSInputNumber';
import CSInputSearch from './components/CSInputSearch';
import CSInputText from './components/CSInputText';
import CSLabel from './components/CSLabel';
import CSList, { CSListSize, CSListVariant } from './components/list/CSList';
import CSListGroup, { CSListGroupCheckboxOption } from './components/list/CSListGroup';
import CSListItem from './components/list/CSListItem';
import CSLookup, {
	CSLookupDropdownAlign,
	CSLookupDropdownPosition,
	CSLookupTableColumnType,
} from './components/CSLookup';
import CSMainHeader, { CSMainHeaderColor } from './components/main-header/CSMainHeader';
import CSMainHeaderIcon from './components/main-header/CSMainHeaderIcon';
import CSMainHeaderLeft from './components/main-header/CSMainHeaderLeft';
import CSMainHeaderRight from './components/main-header/CSMainHeaderRight';
import CSModal, { CSModalSize } from './components/modal/CSModal';
import CSModalBody from './components/modal/CSModalBody';
import CSModalFooter, { CSModalFooterAlign } from './components/modal/CSModalFooter';
import CSModalHeader from './components/modal/CSModalHeader';
import CSOption, { CSOptionType, CSOptionSearchByType } from './components/custom-select/CSOption';
import CSPagination from './components/CSPagination';
import CSPaginationWrapper from './components/CSPaginationWrapper';
import CSPath from './components/path/CSPath';
import CSPathItem, { CSPathItemStatus } from './components/path/CSPathItem';
import CSProgressBar, { CSProgressBarStatus, CSProgressBarThickness } from './components/CSProgressBar';
import CSProgressIndicator from './components/progress-indicator/CSProgressIndicator';
import CSProgressIndicatorItem from './components/progress-indicator/CSProgressIndicatorItem';
import CSRadio, { CSRadioVariant } from './components/radio/CSRadio';
import CSRadioOption from './components/radio/CSRadioOption';
import CSSection from './components/CSSection';
import CSSelect from './components/CSSelect';
import CSSidebar, { CSSidebarOpensTo } from './components/sidebar/CSSidebar';
import CSSidebarTab from './components/sidebar/CSSidebarTab';
import CSSkipLink from './components/CSSkipLink';
import CSSlider from './components/CSSlider';
import CSSpinner, { CSSpinnerColor, CSSpinnerOverlay, CSSpinnerSize } from './components/CSSpinner';
import CSTab, { CSTabStatus } from './components/CSTab';
import CSTabGroup, { CSTabGroupVariant } from './components/CSTabGroup';
import CSTable from './components/table/CSTable';
import CSTableBody from './components/table/CSTableBody';
import CSTableCell from './components/table/CSTableCell';
import CSTableHeader from './components/table/CSTableHeader';
import CSTableRow from './components/table/CSTableRow';
import CSTextarea from './components/CSTextarea';
import CSToast, { CSToastVariant } from './components/CSToast';
import CSToggle, { CSToggleLabelPosition } from './components/CSToggle';
import CSTooltip, {
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipStylePosition,
	CSTooltipVariant,
} from './components/CSTooltip';
import CSTransfer, { CSTransferVariant } from './components/transfer/CSTransfer';
import CSTransferItem from './components/transfer/CSTransferItem';
import CSTransferList, { CSTransferListType } from './components/transfer/CSTransferList';

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
	CSButton,
	CSButtonGroup,
	CSButtonGroupMargin,
	CSButtonIconDisplay,
	CSButtonIconPosition,
	CSButtonRole,
	CSButtonSize,
	CSButtonStyle,
	CSButtonType,
	CSButtonWidth,
	CSCard,
	CSCardBody,
	CSCardFooter,
	CSCardFooterAlign,
	CSCardHeader,
	CSCheckbox,
	CSCheckboxLabelPosition,
	CSCheckboxVariant,
	CSChip,
	CSChipVariant,
	CSChipVariantStyle,
	CSCurrency,
	CSCurrencyDisplay,
	CSNotation,
	CSSignDisplay,
	CSCurrencySign,
	CSCustomSelect,
	CSCustomSelectExportValueType,
	CSDatepicker,
	CSDatepickerDropdownMode,
	CSDateTimePicker,
	CSDateTimePickerDropdownMode,
	CSDivider,
	CSDividerVariant,
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
	CSIcon,
	CSIconOrigin,
	CSImage,
	CSImageColor,
	CSImageType,
	CSImageVariant,
	CSInputFile,
	CSInputNumber,
	CSInputSearch,
	CSInputText,
	CSLabel,
	CSList,
	CSListGroup,
	CSListGroupCheckboxOption,
	CSListItem,
	CSListSize,
	CSListVariant,
	CSLookupTableColumnType,
	CSLookup,
	CSLookupDropdownAlign,
	CSLookupDropdownPosition,
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
	CSOption,
	CSOptionSearchByType,
	CSOptionType,
	CSPagination,
	CSPaginationWrapper,
	CSPath,
	CSPathItem,
	CSPathItemStatus,
	CSProgressBar,
	CSProgressBarStatus,
	CSProgressBarThickness,
	CSProgressIndicator,
	CSProgressIndicatorItem,
	CSRadio,
	CSRadioOption,
	CSRadioVariant,
	CSSection,
	CSSelect,
	CSSidebar,
	CSSidebarOpensTo,
	CSSidebarTab,
	CSSkipLink,
	CSSlider,
	CSSpinner,
	CSSpinnerColor,
	CSSpinnerOverlay,
	CSSpinnerSize,
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
	CSToast,
	CSToastApi,
	CSToastVariant,
	CSToggle,
	CSToggleLabelPosition,
	CSTooltip,
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipStylePosition,
	CSTooltipVariant,
	CSTransfer,
	CSTransferVariant,
	CSTransferItem,
	CSTransferList,
	CSTransferListType,
};
