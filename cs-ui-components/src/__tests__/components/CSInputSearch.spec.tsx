import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSInputSearch from '../../components/CSInputSearch';

const label = 'input search value';
const errorMessage = 'input search error message';

describe('<CSInputSearch />', () => {
	it('should render the default CSInputSearch', () => {
		const uut = shallow(<CSInputSearch label={label} />);
		// Should render input search
		const inputSearch = uut.find('.cs-input-search');
		expect(inputSearch).toHaveLength(1);
		// Should render a label
		const inputSearchLabel = uut.find('CSLabel');
		expect(inputSearchLabel.prop('label')).toBe(label);
		expect(inputSearch.prop('aria-label')).toBe(label);
		// autoFocus
		expect(inputSearch.props().autoFocus).toBeFalsy();
		// disabled
		expect(inputSearch.props().disabled).toBeFalsy();
		// error
		const inputSearchError = uut.find('.cs-input-search.cs-input-search-error');
		expect(inputSearchError).toHaveLength(0);
		expect(inputSearch.prop('aria-invalid')).toBeFalsy();
		// iconPosition
		expect(uut.find('CSIcon + .cs-input-search')).toHaveLength(1);
		// hidden
		const hiddenInputSearch = uut.find('.cs-input-wrapper > .cs-element-hidden');
		expect(hiddenInputSearch).toHaveLength(0);
		// required
		expect(inputSearch.props().required).toBeFalsy();
		expect(inputSearchLabel.prop('required')).toBeFalsy();
		expect(inputSearch.prop('aria-required')).toBeFalsy();
	});

	it('should set the autofocus attribute', () => {
		const uut = shallow(<CSInputSearch label={label} autoFocus />);
		const inputSearchAutofocus = uut.find('.cs-input-search').props().autoFocus;
		expect(inputSearchAutofocus).toBeTruthy();
	});

	it('should set custom border radius', () => {
		const borderRadius = '0';
		const uut = shallow(<CSInputSearch label={label} borderRadius={borderRadius} />);
		const inputSearchStyle = uut.find('.cs-input-wrapper').props().style;
		expect(inputSearchStyle).toHaveProperty('--cs-input-border-radius', borderRadius);
	});

	it('should set disabled attribute', () => {
		const uut = shallow(<CSInputSearch label={label} disabled />);
		const disabledInputSearch = uut.find('.cs-input-wrapper-disabled > .cs-input-search');
		expect(disabledInputSearch.props().disabled).toBeTruthy();
	});

	it('should display in the error state', () => {
		const uut = shallow(<CSInputSearch label={label} error />);
		const inputSearchError = uut.find('.cs-input-wrapper.cs-input-wrapper-error');
		expect(inputSearchError).toHaveLength(1);
		expect(inputSearchError.find('.cs-input-search').prop('aria-invalid')).toBeTruthy();
	});

	it('should pass errorMessage to CSFieldErrorMsg', () => {
		const uut = shallow(<CSInputSearch label={label} error errorMessage={errorMessage} />);
		const inputSearchErrorMsg = uut.find('CSFieldErrorMsg');
		expect(inputSearchErrorMsg.prop('message')).toBe(errorMessage);
	});

	it('should pass errorMessage to CSTooltip', () => {
		const uut = shallow(<CSInputSearch
			label={label}
			error
			errorMessage={errorMessage}
			errorTooltip
		/>);
		const CSTooltip = uut.find('CSTooltip');
		expect(CSTooltip.prop('content')).toBe(errorMessage);
	});

	it('should pass helpText to CSLabel', () => {
		const helpText = 'help text';
		const uut = shallow(<CSInputSearch label={label} helpText={helpText} />);
		const inputSearchLabel = uut.find('CSLabel');
		expect(inputSearchLabel.prop('helpText')).toBe(helpText);
	});

	it('should hide the input search', () => {
		const uut = shallow(<CSInputSearch label={label} hidden />);
		const hiddenInputSearch = uut.find('.cs-input-search-wrapper.cs-element-hidden');
		expect(hiddenInputSearch).toHaveLength(1);
	});

	it('should left-position the search icon', () => {
		const uut = shallow(<CSInputSearch label={label} iconPosition="left" />);
		const inputSearch = uut.find('CSIcon + .cs-input-search');
		expect(inputSearch).toHaveLength(1);
	});

	it('should right-position the search icon', () => {
		const uut = shallow(<CSInputSearch label={label} iconPosition="right" />);
		const inputSearch = uut.find('.cs-input-search ~ CSIcon');
		expect(inputSearch).toHaveLength(1);
	});

	it('should hide the label', () => {
		const uut = shallow(<CSInputSearch label={label} labelHidden />);
		const inputSearchLabel = uut.find('CSLabel');
		expect(inputSearchLabel).toHaveLength(0);
	});

	it('should pass label to CSLabel', () => {
		const uut = shallow(<CSInputSearch label={label} labelTitle />);
		const inputSearchLabelTitle = uut.find('CSLabel').props().title;
		expect(inputSearchLabelTitle).toBe(label);
	});

	it('should use a working onBlur callback', () => {
		const handleBlurMock = jest.fn();
		const uut = shallow(<CSInputSearch label={label} onBlur={handleBlurMock} />);
		const inputSearch = uut.find('.cs-input-search');
		inputSearch.simulate('blur');
		expect(handleBlurMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onChange callback', () => {
		const handleChangeMock = jest.fn();
		const uut = shallow(<CSInputSearch label={label} onChange={handleChangeMock} />);
		const inputSearch = uut.find('.cs-input-search');
		inputSearch.simulate('change', { target: { value: 0 } });
		expect(handleChangeMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClearSearch callback', () => {
		const handleClearSearchMock = jest.fn();
		const value = 'value';
		const uut = shallow(
			<CSInputSearch
				label={label}
				value={value}
				onClearSearch={handleClearSearchMock}
			/>,
		);
		const inputSearch = uut.find('.cs-input-search');
		inputSearch.simulate('change', { target: { value: 'x' } });
		const clearButton = uut.find('CSButton');
		clearButton.simulate('click', { stopPropagation: () => { } });
		expect(handleClearSearchMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onClick callback', () => {
		const handleClickMock = jest.fn();
		const uut = shallow(<CSInputSearch label={label} onClick={handleClickMock} />);
		const inputSearch = uut.find('.cs-input-wrapper');
		inputSearch.simulate('click');
		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onFocus callback', () => {
		const handleFocusMock = jest.fn();
		const uut = shallow(<CSInputSearch label={label} onFocus={handleFocusMock} />);
		const inputSearch = uut.find('.cs-input-search');
		inputSearch.simulate('focus');
		expect(handleFocusMock).toHaveBeenCalledTimes(1);
	});

	it('should use a working onKeyDown callback', () => {
		const handleKeyDownMock = jest.fn();
		const uut = shallow(<CSInputSearch label={label} onKeyDown={handleKeyDownMock} />);
		const inputSearch = uut.find('.cs-input-search');
		inputSearch.simulate('keydown');
		expect(handleKeyDownMock).toHaveBeenCalledTimes(1);
	});

	it('should set the placeholder attribute', () => {
		const placeholder = 'placeholder';
		const uut = shallow(<CSInputSearch label={label} placeholder={placeholder} />);
		const inputSearchPlaceholder = uut.find('.cs-input-search').props().placeholder;
		expect(inputSearchPlaceholder).toBe(placeholder);
	});

	it('should set the required attribute', () => {
		const uut = shallow(<CSInputSearch label={label} required />);
		const inputSearchRequired = uut.find('.cs-input-search').props().required;
		const inputSearchAriaRequired = uut.find('.cs-input-search').prop('aria-required');
		const inputSearchLabelRequired = uut.find('CSLabel').prop('required');
		expect(inputSearchRequired).toBeTruthy();
		expect(inputSearchAriaRequired).toBeTruthy();
		expect(inputSearchLabelRequired).toBeTruthy();
	});

	it('should set the title attribute', () => {
		const title = 'title';
		const uut = shallow(<CSInputSearch label={label} title={title} />);
		const inputSearchTitle = uut.find('.cs-input-search').props().title;
		expect(inputSearchTitle).toBe(title);
	});

	it('should pass tooltipPosition to CSLabel', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSInputSearch label={label} tooltipPosition={tooltipPosition} />);
		const inputSearchLabelPosition = uut.find('CSLabel').prop('tooltipPosition');
		expect(inputSearchLabelPosition).toBe(tooltipPosition);
	});

	it('should set the value attribute', () => {
		const value = 'search term';
		const uut = shallow(<CSInputSearch label={label} value={value} />);
		const inputSearchValue = uut.find('.cs-input-search').props().value;
		expect(inputSearchValue).toBe(value);
	});

	it('should set a custom width', () => {
		const width = '10rem';
		const uut = shallow(<CSInputSearch label={label} width={width} />);
		const inputSearchStyle = uut.find('.cs-input-wrapper').props().style;
		expect(inputSearchStyle).toHaveProperty('--cs-input-width', width);
	});

	it('should have a custom class name', () => {
		const className = 'custom-class';
		const uut = shallow(<CSInputSearch label={label} className={className} />);
		const inputSearch = uut.find(`.cs-input-search-wrapper.${className}`);
		expect(inputSearch).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const id = 'custom-id';
		const uut = shallow(<CSInputSearch label={label} id={id} />);
		const inputSearch = uut.find(`.cs-input-search#${id}`);
		const inputSearchLabelHtmlFor = uut.find('CSLabel').props().htmlFor;
		expect(inputSearch).toHaveLength(1);
		expect(inputSearchLabelHtmlFor).toBe(id);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSInputSearch label={label} data-testid="rest" />);
		const inputSearch = uut.find({ 'data-testid': 'rest' });
		expect(inputSearch).toHaveLength(1);
	});
});
