import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../../setupTests';
import CSLookup from '../../components/CSLookup';
import { actions, icons } from '../common/custom-data';

const label = 'Records';
const columns = [
	{ key: 'Account', header: 'Account' },
	{ key: 'Industry', header: 'Industry' },
];
const options = [
	{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
	{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
	{ key: 3, data: { Id: 3, Account: 'Salesforce', Industry: 'Software' } },
	{ key: 4, data: { Id: 4, Account: 'Elisa', Industry: 'Telecommunications' } },
	{ key: 5, data: { Id: 5, Account: 'Facebook', Industry: 'Social media' } },
	{ key: 6, data: { Id: 6, Account: 'Google', Industry: 'Technology' } },
	{ key: 7, data: { Id: 7, Account: 'Spotify', Industry: 'Streaming and media' } },
	{ key: 8, data: { Id: 8, Account: 'British Gas', Industry: 'Energy' } },
	{ key: 9, data: { Id: 9, Account: 'Columbia Pictures', Industry: 'Film' } },
	{ key: 10, data: { Id: 10, Account: 'Rimac', Industry: 'Car manufacturing' } },
	{ key: 11, data: { Id: 11, Account: 'News Corp', Industry: 'Mass media' } },
];
const fieldToBeDisplayed = 'Account';
const modeClient = 'client';
const modeServer = 'server';
const errorMessage = ['First error message!', 'Second error message!'];

const fetchData = async (searchTerm: any, pageSize: any, pageNo: any) => {
	await new Promise((resolve) => setTimeout(resolve, 100));
	if (searchTerm === '') {
		return {
			records: options.slice(pageNo * pageSize, (pageNo + 1) * pageSize),
			moreRecords: (pageNo + 1) * pageSize < options.length,
		};
	}
	const filteredData = options
		.filter((record) => record.data.Account.toString().toLowerCase().includes(searchTerm.toLowerCase()))
		.slice(pageNo * pageSize, (pageNo + 1) * pageSize);
	return {
		records: filteredData,
		moreRecords: (pageNo + 1) * pageSize < filteredData.length,
	};
};

describe('<CSLookup />', () => {
	it('should render the default CSLookup', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				value={[
					{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
					{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
				]}
			/>,
		);
		// Should render a lookup
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput).toHaveLength(1);
		// Should render a label
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel).toHaveLength(1);
		// autoFocus
		expect(lookupInput.props().autoFocus).toBeFalsy();
		// disabled
		expect(lookupInput.props().disabled).toBeFalsy();
		// readOnly
		expect(lookupInput.props().readOnly).toBeFalsy();
		// required
		expect(lookupInput.props().required).toBeFalsy();
		expect(lookupLabel.prop('required')).toBeFalsy();
		expect(lookupInput.prop('aria-required')).toBeFalsy();
		lookupInput.simulate('focus');
		// Should render Autoposition
		const lookupAutoposition = uut.find('CSAutoposition');
		expect(lookupAutoposition.prop('initialPosition')).toBe('bottom-right');
		// Should render Data table
		const lookupTable = lookupAutoposition.find('CSDataTable');
		expect(lookupTable).toHaveLength(1);
		// hidden
		const lookupWrapperHidden = uut.find('.cs-lookup-wrapper.cs-lookup-hidden');
		expect(lookupWrapperHidden).toHaveLength(0);
		// gridCustomPopup
		const lookupDropdownCustomPopup = uut.find('.cs-lookup-dropdown.ag-custom-component-popup');
		expect(lookupDropdownCustomPopup).toHaveLength(0);
		// options
		const lookupSelectedOption = uut.find('.cs-lookup-value');
		expect(lookupSelectedOption.text()).toBe('Acme');
		// multiselect
		expect(lookupInput.prop('aria-multiselectable')).toBeFalsy();
		// maxHeight
		expect(lookupTable.prop('maxHeight')).toBe('17rem');
	});

	// Common props
	it('should pass columns to CSDataTable', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDataTable = uut.find('CSDataTable');
		expect(lookupDataTable.prop('columns')).toMatchObject(columns);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
			/>,
		).dive();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel.prop('label')).toBe(label);
	});

	it('should set lookup value and display correct field based on fieldToBeDisplay', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				value={{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } }}
			/>,
		);
		const lookupSelectedOption = uut.find('.cs-lookup-value');
		expect(lookupSelectedOption.text()).toBe('Acme');
	});

	it('should pass actions to CSCustomData', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				actions={actions}
			/>,
		).dive();
		const lookupCustomData = uut.find('CSCustomData');
		expect(lookupCustomData.prop('actions')).toMatchObject(actions);
	});

	it('should pass align to CSAutoposition', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				align="right"
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupAutoposition = uut.find('CSAutoposition');
		expect(lookupAutoposition.prop('initialPosition')).toBe('bottom-left');
	});

	it('should focus lookup input on initial render', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				autoFocus
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().autoFocus).toBeTruthy();
	});

	it('should render lookup with custom border', () => {
		const borderRadius = '1rem';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				borderRadius={borderRadius}
			/>,
		).dive();
		const lookupWrapperStyle = uut.find('.cs-lookup-wrapper').props().style;
		expect(lookupWrapperStyle).toHaveProperty('--cs-input-border-radius', borderRadius);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				disabled
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().disabled).toBeTruthy();
	});

	it('should set custom dropdown height', () => {
		const dropdownHeight = '300px';
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				dropdownHeight={dropdownHeight}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDataTable = uut.find('CSDataTable');
		expect(lookupDataTable.prop('maxHeight')).toBe(dropdownHeight);
	});

	it('should set correct dropdown height if custom height is not defined', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDataTable = uut.find('CSDataTable');
		expect(lookupDataTable.prop('maxHeight')).toBe('17rem');
	});

	it('should set custom dropdown width', () => {
		const dropdownWidth = '300px';
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				dropdownWidth={dropdownWidth}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDropdownStyle = uut.find('.cs-lookup-dropdown').props().style;
		expect(lookupDropdownStyle).toHaveProperty('--cs-lookup-dropdown-width', dropdownWidth);
	});

	it('should render lookup in error state', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				error
			/>,
		).dive();
		expect(uut.find('.cs-input-wrapper-error')).toHaveLength(1);
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.prop('aria-invalid')).toBeTruthy();
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				error
				errorMessage={errorMessage}
			/>,
		).dive();
		const lookupErrorMsg = uut.find('CSFieldErrorMsg');
		expect(lookupErrorMsg.prop('message')).toMatchObject(errorMessage);
	});

	it('should pass errorMessage to CSTooltip content', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				error
				errorMessage={errorMessage}
				errorTooltip
			/>,
		).dive();
		const lookupErrorTooltip = uut.find('CSTooltip');
		expect(lookupErrorTooltip.prop('content')).toMatchObject(errorMessage);
	});

	it('should apply grid class to lookup dropdown wrapper', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				gridCustomPopup
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDropdown = uut.find('.cs-lookup-dropdown.ag-custom-component-popup');
		expect(lookupDropdown).toHaveLength(1);
	});

	it('should pass helpText to CSLabel', () => {
		const helpTextMsg = 'help text in tooltip';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				helpText={helpTextMsg}
			/>,
		).dive();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel.prop('helpText')).toBe(helpTextMsg);
	});

	it('should hide lookup', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				hidden
			/>,
		).dive();
		expect(uut.find('.cs-lookup-wrapper.cs-lookup-hidden')).toHaveLength(1);
	});

	it('should pass correct icons value to CSCustomData', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				icons={icons}
			/>,
		).dive();
		const lookupCustomData = uut.find('CSCustomData');
		expect(lookupCustomData.prop('icons')).toMatchObject(icons);
	});

	it('should hide label', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				labelHidden
			/>,
		).dive();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel).toHaveLength(0);
	});

	it('should pass label to CSLabel title prop', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				labelTitle
			/>,
		).dive();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel.prop('title')).toBe(label);
	});

	it('should have clear button when given value in input or an option is selected', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				value={[
					{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
				]}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		const lookupSelectedOption = uut.find('.cs-lookup-value');
		const clearButton = uut.find('.cs-lookup-value-wrapper + .cs-lookup-clear-btn');

		expect(clearButton).toHaveLength(1);
		lookupInput.simulate('change', { target: { name: 'value', value: 'hello' } });

		// First click clears searchTerm
		clearButton.simulate('click');
		expect(lookupInput.prop('value')).toBe('');

		// Second click clears selection
		clearButton.simulate('click');
		expect(lookupSelectedOption.text()).toBe('');
	});

	it('should have clear button when given value in input or multiple options are selected', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				multiselect
				value={[
					{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
					{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
				]}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		const lookupSelectedOption = uut.find('.cs-lookup-value');
		const clearButton = uut.find('.cs-lookup-value-wrapper + .cs-lookup-clear-btn');

		expect(clearButton).toHaveLength(1);
		lookupInput.simulate('change', { target: { name: 'value', value: 'hello' } });

		// First click clears searchTerm
		clearButton.simulate('click');
		expect(lookupInput.prop('value')).toBe('');

		// Second click clears selection
		clearButton.simulate('click');
		expect(lookupSelectedOption.text()).toBe('');
	});

	it('should display multiple selected options', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				multiselect
				value={[
					{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
					{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
				]}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		const lookupSelectedOption = uut.find('.cs-lookup-value');
		expect(lookupSelectedOption).toHaveLength(1);
		expect(lookupSelectedOption.text()).toBe('Acme, Global Media');
		expect(lookupInput.prop('aria-multiselectable')).toBeTruthy();
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onBlur={handleBlurMock}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onClick={handleClickMock}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input-wrapper');
		lookupInput.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onFocus callback', () => {
		const handleFocusMock = jest.fn();
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onFocus={handleFocusMock}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		expect(handleFocusMock).toHaveBeenCalledTimes(1);
	});

	// TODO fix onDropdownClose
	// it('should use a working onDropdownClose callback', () => {
	// 	const handleDropdownCloseMock = jest.fn();
	// 	const uut = shallow(
	// 		<CSLookup
	// 			label={label}
	// 			columns={columns}
	// 			mode={modeClient}
	// 			fieldToBeDisplayed={fieldToBeDisplayed}
	// 			options={options}
	// 			onDropdownClose={handleDropdownCloseMock}
	// 		/>,
	// 	);
	// 	const lookupInput = uut.find('.cs-lookup-input');
	// 	lookupInput.simulate('focus');
	// 	lookupInput.simulate('blur');
	// 	expect(handleDropdownCloseMock).toHaveBeenCalledTimes(1);
	// });

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onKeyDown={handleKeyDownMock}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('keydown', {} as any);
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSearch callback', () => {
		const handleSearchMock = jest.fn();
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onSearch={handleSearchMock}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('change', { target: { value: 'Text' } });
		expect(handleSearchMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onSelectChange callback', () => {
		const handleSelectChangeMock = jest.fn();
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				onSelectChange={handleSelectChangeMock}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		const dataTableCheckbox = uut.find('.cs-checkbox').first();
		dataTableCheckbox.simulate('change');
		expect(handleSelectChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should set placeholder attribute', () => {
		const placeholder = 'Search..';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				placeholder={placeholder}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().placeholder).toBe(placeholder);
	});

	it('should pass position to CSAutoposition', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				position="top"
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupAutoposition = uut.find('CSAutoposition');
		expect(lookupAutoposition.prop('initialPosition')).toBe('top-right');
	});

	it('should set readOnly attribute', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				readOnly
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().readOnly).toBeTruthy();
	});

	it('should set required attribute and pass required to CSLabel', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				required
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().required).toBeTruthy();
		expect(lookupInput.prop('aria-required')).toBeTruthy();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel.prop('required')).toBeTruthy();
	});

	it('should set title attribute', () => {
		const title = 'title';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				title={title}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		expect(lookupInput.props().title).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'bottom-left';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				tooltipPosition={tooltipPosition}
			/>,
		).dive();
		const lookupLabel = uut.find('CSLabel');
		expect(lookupLabel.prop('tooltipPosition')).toBe(tooltipPosition);
	});

	it('should have a custom class name', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				className={customClass}
			/>,
		).dive();
		const lookupWrapper = uut.find(`.cs-lookup-wrapper.${customClass}`);
		expect(lookupWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				id={customId}
			/>,
		).dive();
		const lookupInput = uut.find('.cs-lookup-input');
		const lookupLabel = uut.find('CSLabel');
		expect(lookupInput.props().id).toBe(customId);
		expect(lookupLabel.prop('htmlFor')).toBe(customId);
	});

	it('should display correct node if there are no options', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={[]}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDropdownMsgWrapper = uut.find('.cs-lookup-dropdown-msg-wrapper');
		const lookupDropdownMsgIcon = lookupDropdownMsgWrapper.find('CSIcon');
		const lookupDropdownMsg = lookupDropdownMsgWrapper.find('span');
		expect(lookupDropdownMsgIcon.prop('name')).toBe('error');
		expect(lookupDropdownMsgIcon.prop('color')).toBe('var(--cs-lookup-dropdown-msg-c)');
		expect(lookupDropdownMsg.text()).toBe('No data found.');
	});

	// Client-mode props
	it('should pass options to CSDataTable', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDataTable = uut.find('CSDataTable');
		expect(lookupDataTable.prop('rows')).toMatchObject(options);
	});

	it('should set lookup to loading state', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				loading
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('click');
		const lookupDropdownMsgIcon = uut.find('.cs-lookup-dropdown-msg-wrapper CSIcon');
		const lookupDropdownMsgText = uut.find('.cs-lookup-dropdown-msg-wrapper .cs-lookup-dropdown-msg-text');
		expect(lookupDropdownMsgIcon.prop('name')).toBe('spinner');
		expect(lookupDropdownMsgText.text()).toBe('Loading...');
	});

	it('should initiate search by searchBy value', () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				searchBy={['Id']}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('change', { target: { value: '1' } });
		const lookupDataTableCell = uut.find('.cs-data-table-body .cs-data-table-cell > .cs-data-table-truncate').first();
		expect(lookupDataTableCell.text()).toBe('Acme');
	});

	// Server-mode props

	it('should dynamically fetch options', async () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeServer}
				fieldToBeDisplayed={fieldToBeDisplayed}
				pageSize={1}
				fetchOptions={fetchData}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		await new Promise((r) => setTimeout(r, 200));
		uut.update();
		const lookupDataTableCell = uut.find('.cs-data-table-body .cs-data-table-cell > .cs-data-table-truncate').first();
		expect(lookupDataTableCell.text()).toBe('Acme');
	});

	it('should dynamically fetch number of options according to pageSize', async () => {
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeServer}
				fieldToBeDisplayed={fieldToBeDisplayed}
				pageSize={2}
				fetchOptions={fetchData}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		await new Promise((r) => setTimeout(r, 200));
		uut.update();
		const lookupDataTableRows = uut.find('.cs-data-table-body .cs-data-table-row-wrapper');
		expect(lookupDataTableRows).toHaveLength(2);
	});

	it('should call fetchOptions when scrollbar hits the bottom of the lookup dropdown', async () => {
		const fetchDataMock = jest.fn(fetchData);
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeServer}
				fieldToBeDisplayed={fieldToBeDisplayed}
				pageSize={10}
				fetchOptions={fetchDataMock}
				infiniteScroll
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		await new Promise((r) => setTimeout(r, 200));
		uut.update();
		const lookupDataTable = uut.find('.cs-data-table');
		lookupDataTable.simulate('scroll');
		expect(fetchDataMock).toHaveBeenCalledTimes(2);
	});

	it('should initiate options fetch only when defined minTermLength is met', async () => {
		const fetchDataMock = jest.fn(fetchData);
		const uut = mount(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeServer}
				fieldToBeDisplayed={fieldToBeDisplayed}
				pageSize={2}
				fetchOptions={fetchDataMock}
				minTermLength={3}
			/>,
		);
		const lookupInput = uut.find('.cs-lookup-input');
		lookupInput.simulate('focus');
		const lookupDropdownMsgText = uut.find('.cs-lookup-dropdown-msg-text');
		expect(lookupDropdownMsgText.text()).toBe('Please enter 3 or more characters.');
		lookupInput.simulate('change', { target: { value: 'A' } });
		expect(fetchDataMock).toHaveBeenCalledTimes(0);
		lookupInput.simulate('change', { target: { value: 'Acme' } });
		await new Promise((r) => setTimeout(r, 1000));
		expect(fetchDataMock).toHaveBeenCalledTimes(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSLookup
				label={label}
				columns={columns}
				mode={modeClient}
				fieldToBeDisplayed={fieldToBeDisplayed}
				options={options}
				value={[
					{ key: 1, data: { Id: 1, Account: 'Acme', Industry: 'Manufacturing' } },
					{ key: 2, data: { Id: 2, Account: 'Global Media', Industry: 'Industry' } },
				]}
				data-testid="rest"
			/>,
		).dive();
		const lookup = uut.find({ 'data-testid': 'rest' });
		expect(lookup).toHaveLength(1);
	});
});
