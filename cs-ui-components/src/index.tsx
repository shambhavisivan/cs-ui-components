// Import SVG sprites
import SldsIconSvg from '!raw-loader!./icons/slds-icons.svg';
import CsIconSvg from '!raw-loader!./icons//cs-icons.svg';

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

// Append sprites inside opening body tag
function getSpriteIcons() {
	const spriteContainer = document.createElement('div');
	spriteContainer.innerHTML = SldsIconSvg + CsIconSvg;
	document.body.insertBefore(spriteContainer, document.body.firstChild);
}

import CSAlert, { CSAlertStyleFormat, CSAlertStyleType, CSAlertTextAlign, CSAlertVariant } from './components/CSAlert';
import CSButton, { CSButtonIconDisplay, CSButtonIconPosition, CSButtonSize, CSButtonStyle, CSButtonType, CSButtonWidth, CSButtonRole } from './components/CSButton';
import CSButtonGroup, { CSButtonGroupMargin } from './components/CSButtonGroup';
import CSCard from './components/card/CSCard';
import CSCardBody from './components/card/CSCardBody';
import CSCardFooter from './components/card/CSCardFooter';
import CSCardHeader from './components/card/CSCardHeader';
import CSCheckbox, { CSCheckboxBorderType, CSCheckboxVariant } from './components/CSCheckbox';
import CSChip, { CSChipVariant, CSChipVariantStyle } from './components/CSChip';
import CSCustomSelect, { CSCustomSelectBorderType } from './components/custom-select/CSCustomSelect';
import CSDatepicker, { CSDatepickerDropdownMode } from './components/CSDatepicker';
import CSDateTimePicker, { CSDateTimePickerDropdownMode } from './components/CSDateTimePicker';
import CSDivider, { CSDividerVariant } from './components/CSDivider';
import CSDropdown, { CSDropdownAlign, CSDropdownIconPosition, CSDropdownPosition, CSDropdownSize, CSDropdownStyle, CSDropdownType } from './components/CSDropdown';
import CSFieldErrorMsg, { CSFieldErrorMsgType } from './components/CSFieldErrorMsg';
import CSIcon, { CSIconOrigin } from './components/CSIcon';
import CSImage, { CSImageColor, CSImageType, CSImageVariant } from './components/CSImage';
import CSInputFile from './components/CSInputFile';
import CSInputNumber, { CSInputNumberBorderType } from './components/CSInputNumber';
import CSInputSearch, { CSInputSearchBorderType } from './components/CSInputSearch';
import CSInputText, { CSInputTextBorderType } from './components/CSInputText';
import CSLabel from './components/CSLabel';
import CSList from './components/list/CSList';
import CSListItem from './components/list/CSListItem';
import CSLookupField, { CSLookupBorderType } from './components/CSLookupField';
import CSMainHeader, { CSMainHeaderColor } from './components/main-header/CSMainHeader';
import CSMainHeaderIcon from './components/main-header/CSMainHeaderIcon';
import CSMainHeaderLeft from './components/main-header/CSMainHeaderLeft';
import CSMainHeaderRight from './components/main-header/CSMainHeaderRight';
import CSModal, { CSModalSize } from './components/modal/CSModal';
import CSModalBody from './components/modal/CSModalBody';
import CSModalFooter, { CSModalFooterAlign } from './components/modal/CSModalFooter';
import CSModalHeader from './components/modal/CSModalHeader';
import CSOption, { CSOptionType } from './components/custom-select/CSOption';
import CSPagination from './components/CSPagination';
import CSPaginationWrapper from './components/CSPaginationWrapper';
import CSPath from './components/path/CSPath';
import CSPathItem from './components/path/CSPathItem';
import CSPathWrapper from './components/path/CSPathWrapper';
import CSProgressBar, { CSProgressBarThickness } from './components/CSProgressBar';
import CSRadio, { CSRadioVariant } from './components/radio/CSRadio';
import CSRadioOption from './components/radio/CSRadioOption';
import CSSection from './components/CSSection';
import CSSelect, { CSSelectBorderType } from './components/CSSelect';
import CSSidebar from './components/CSSidebar';
import CSSkipLink from './components/CSSkipLink';
import CSSlider, { CSSliderSize } from './components/CSSlider';
import CSSpinner, { CSSpinnerColor,	CSSpinnerSize } from './components/CSSpinner';
import CSTab, { CSTabStatus } from './components/CSTab';
import CSTabGroup, { CSTabGroupVariant } from './components/CSTabGroup';
import CSTable from './components/table/CSTable';
import CSTableBody from './components/table/CSTableBody';
import CSTableCell from './components/table/CSTableCell';
import CSTableHeader from './components/table/CSTableHeader';
import CSTableRow from './components/table/CSTableRow';
import CSTextarea, { CSTextareaBorderType } from './components/CSTextarea';
import CSToast, { CSToastVariant } from './components/CSToast';
import CSToggle, { CSToggleLabelPosition } from './components/CSToggle';
import CSTooltip, { CSTooltipIconSize, CSTooltipPosition, CSTooltipStylePosition, CSTooltipVariant } from './components/CSTooltip';

import './sass/style.scss';

import CSToastApi from './api/CSToastAPI';

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
	CSCardHeader,
	CSCheckbox,
	CSCheckboxBorderType,
	CSCheckboxVariant,
	CSChip,
	CSChipVariant,
	CSChipVariantStyle,
	CSCustomSelect,
	CSCustomSelectBorderType,
	CSDatepicker,
	CSDatepickerDropdownMode,
	CSDateTimePicker,
	CSDateTimePickerDropdownMode,
	CSDivider,
	CSDividerVariant,
	CSDropdown,
	CSDropdownAlign,
	CSDropdownIconPosition,
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
	CSInputNumberBorderType,
	CSInputSearch,
	CSInputSearchBorderType,
	CSInputText,
	CSInputTextBorderType,
	CSLabel,
	CSList,
	CSListItem,
	CSLookupBorderType,
	CSLookupField,
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
	CSOptionType,
	CSPagination,
	CSPaginationWrapper,
	CSPath,
	CSPathItem,
	CSPathWrapper,
	CSProgressBar,
	CSProgressBarThickness,
	CSRadio,
	CSRadioOption,
	CSRadioVariant,
	CSSection,
	CSSelect,
	CSSelectBorderType,
	CSSidebar,
	CSSkipLink,
	CSSlider,
	CSSliderSize,
	CSSpinner,
	CSSpinnerColor,
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
	CSTextareaBorderType,
	CSToast,
	CSToastApi,
	CSToastVariant,
	CSToggle,
	CSToggleLabelPosition,
	CSTooltip,
	CSTooltipIconSize,
	CSTooltipPosition,
	CSTooltipStylePosition,
	CSTooltipVariant
};
