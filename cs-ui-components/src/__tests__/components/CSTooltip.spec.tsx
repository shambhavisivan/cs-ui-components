import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../../setupTests';
import CSTooltip from '../../components/CSTooltip';

const tooltipContent = 'Help text';
const tooltipHeaderContent = 'Header text';
const tooltipJSXContent = <span>Element content</span>;

describe('<CSTooltip />', () => {
	it('should render the default CSTooltip', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} />);
		// Should render a tooltip
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper.cs-tw-info.cs-tooltip-style-position-fixed');
		expect(tooltipWrapper).toHaveLength(1);
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find('.cs-tooltip.cs-tooltip-top-right.cs-tooltip-info');
		expect(tooltip).toHaveLength(1);
		// Should have an icon
		const tooltipIcon = tooltipWrapper.find('CSIcon');
		expect(tooltipIcon).toHaveLength(1);
		// iconName
		expect(tooltipIcon.prop('size')).toBe('0.875rem');
		// iconOrigin
		expect(tooltipIcon.prop('origin')).toBe('slds');
		// Should have autoposition
		const tooltipFixed = autoposition.dive().find('.cs-tooltip-style-position-fixed');
		expect(tooltipFixed).toHaveLength(1);
		// focusable
		expect(tooltipWrapper.props().tabIndex).toBe(0);
		// position
		expect(autoposition.prop('initialPosition')).toBe('top-right');
	});
	it('should render tooltip with string content', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltipBody = uut.find('CSAutoposition').dive().find('.cs-tooltip-body');
		expect(tooltipBody.text()).toBe(tooltipContent);
	});

	it('should render tooltip with array of strings as content', () => {
		const arrayContent = [
			'Help text no. 1',
			'Help text no. 2',
			'Help text no. 3',
		];

		const uut = shallow(<CSTooltip content={arrayContent} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltipBody = uut.find('CSAutoposition').dive().find('.cs-tooltip-body');
		expect(tooltipBody.at(0).text()).toBe(arrayContent[0]);
		expect(tooltipBody.at(1).text()).toBe(arrayContent[1]);
		expect(tooltipBody.at(2).text()).toBe(arrayContent[2]);
	});

	it('should render tooltip with element as content', () => {
		const uut = shallow(<CSTooltip content={tooltipJSXContent} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltipBody = uut.find('CSAutoposition').dive().find('.cs-tooltip-body');
		expect(tooltipBody.html()).toBe('<div class="cs-tooltip-body"><span>Element content</span></div>');
	});

	it('should render tooltip with promise as content', async () => {
		const uut = shallow(
			<CSTooltip
				content={() => (
					new Promise((resolve) => {
						setTimeout(() => {
							resolve(tooltipJSXContent);
						}, 100);
					})
				)}
			/>,
		);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltipSpinner = uut.find('CSAutoposition').dive().find('CSSpinner');
		expect(tooltipSpinner).toHaveLength(1);
		await new Promise((r) => setTimeout(r, 100));
		const tooltipBody = uut.find('CSAutoposition').dive().find('.cs-tooltip-body');
		expect(tooltipBody.html()).toBe('<div class="cs-tooltip-body"><span>Element content</span></div>');
	});

	it('should render tooltip with delay', async () => {
		const uut = shallow(<CSTooltip content={tooltipContent} delayTooltip={100} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		expect(autoposition).toHaveLength(0);
		await new Promise((r) => setTimeout(r, 100));
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip');
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with correct tabIndex set if tooltip is focusable', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} focusable={false} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		expect(tooltipWrapper.props().tabIndex).toBe(-1);
	});

	it('should render tooltip with correct height', () => {
		const tooltipHeight = '100px';
		const uut = shallow(<CSTooltip content={tooltipContent} height={tooltipHeight} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip.cs-tooltip-overflow-auto');
		expect(tooltip.props().style).toHaveProperty('--cs-tooltip-height', tooltipHeight);
	});

	it('should pass iconColor to CSIcon', () => {
		const iconColorValue = 'rgb(74, 38, 171)';
		const uut = shallow(<CSTooltip content={tooltipContent} iconColor={iconColorValue} />);
		const tooltipIcon = uut.find('.cs-tooltip-wrapper.cs-tw-icon-c > CSIcon');
		expect(tooltipIcon.prop('color')).toBe(iconColorValue);
	});

	it('should pass iconName to CSIcon', () => {
		const iconNameValue = 'apps';
		const uut = shallow(<CSTooltip content={tooltipContent} iconName={iconNameValue} />);
		const tooltipIcon = uut.find('.cs-tooltip-wrapper > CSIcon');
		expect(tooltipIcon.prop('name')).toBe(iconNameValue);
	});

	it('should pass iconOrigin to CSIcon', () => {
		const iconOriginValue = 'slds';
		const uut = shallow(<CSTooltip content={tooltipContent} iconOrigin={iconOriginValue} />);
		const tooltipIcon = uut.find('.cs-tooltip-wrapper > CSIcon');
		expect(tooltipIcon.prop('origin')).toBe(iconOriginValue);
	});

	it('should set correct size prop of CSIcon if iconSize is small', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} iconSize="small" />);
		const tooltipIcon = uut.find('.cs-tooltip-wrapper > CSIcon');
		expect(tooltipIcon.prop('size')).toBe('0.875rem');
	});

	it('should set correct size prop of CSIcon if iconSize is medium', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} iconSize="medium" />);
		const tooltipIcon = uut.find('.cs-tooltip-wrapper > CSIcon');
		expect(tooltipIcon.prop('size')).toBe('1rem');
	});

	it('should set custom max height', () => {
		const tooltipMaxHeight = '100px';
		const uut = shallow(<CSTooltip content={tooltipContent} maxHeight={tooltipMaxHeight} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip.cs-tooltip-overflow-auto');
		expect(tooltip.props().style).toHaveProperty('--cs-tooltip-max-height', tooltipMaxHeight);
	});

	it('should set custom max width', () => {
		const tooltipMaxWidth = '100px';
		const uut = shallow(<CSTooltip content={tooltipContent} maxWidth={tooltipMaxWidth} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip.cs-tooltip-overflow-auto');
		expect(tooltip.props().style).toHaveProperty('--cs-tooltip-max-width', tooltipMaxWidth);
	});

	it('should set custom padding', () => {
		const tooltipPadding = '0';
		const uut = shallow(<CSTooltip content={tooltipContent} padding={tooltipPadding} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip');
		expect(tooltip.props().style).toHaveProperty('--cs-tooltip-padding', tooltipPadding);
	});

	it('should add a class and pass position to CSAutoposition if position is top-left', () => {
		const tooltipPosition = 'top-left';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is top-center', () => {
		const tooltipPosition = 'top-center';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is bottom-right', () => {
		const tooltipPosition = 'bottom-right';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is bottom-left', () => {
		const tooltipPosition = 'bottom-left';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is bottom-center', () => {
		const tooltipPosition = 'bottom-center';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is right-top', () => {
		const tooltipPosition = 'right-top';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is right-bottom', () => {
		const tooltipPosition = 'right-bottom';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is right-center', () => {
		const tooltipPosition = 'right-center';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is left-top', () => {
		const tooltipPosition = 'left-top';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is left-bottom', () => {
		const tooltipPosition = 'left-bottom';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should add a class and pass position to CSAutoposition if position is left-center', () => {
		const tooltipPosition = 'left-center';
		const uut = shallow(<CSTooltip content={tooltipContent} position={tooltipPosition} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const autoposition = uut.find('CSAutoposition');
		const tooltip = autoposition.dive().find(`.cs-tooltip.cs-tooltip-${tooltipPosition}`);
		expect(autoposition.prop('initialPosition')).toBe(tooltipPosition);
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip which sticks to DOM when tooltip icon is clicked', () => {
		const uut = mount(<CSTooltip content={tooltipContent} stickyOnClick />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		tooltipWrapper.simulate('click');
		tooltipWrapper.simulate('mouseleave');
		const tooltip = document.querySelector('.cs-autoposition .cs-tooltip') as HTMLElement;
		expect(tooltip).toBeTruthy();
		uut.unmount();
	});

	it('should render tooltip with fixed style position', () => {
		const tooltipStylePosition = 'fixed';
		const uut = shallow(<CSTooltip content={tooltipContent} stylePosition={tooltipStylePosition} />);
		const tooltipWrapper = uut.find(`.cs-tooltip-wrapper.cs-tooltip-style-position-${tooltipStylePosition}`);
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip-style-position-fixed');
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with absolute style position', () => {
		const tooltipStylePosition = 'absolute';
		const uut = shallow(<CSTooltip content={tooltipContent} stylePosition={tooltipStylePosition} />);
		const tooltipWrapper = uut.find(`.cs-tooltip-wrapper.cs-tooltip-style-position-${tooltipStylePosition}`);
		expect(tooltipWrapper).toHaveLength(1);
	});

	it('should render tooltip with info variant', () => {
		const tooltipVariant = 'info';
		const uut = shallow(<CSTooltip content={tooltipContent} />);
		const tooltipWrapper = uut.find('.cs-tw-info');
		const tooltipIcon = uut.find('CSIcon');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find(`.cs-tooltip-${tooltipVariant}`);
		expect(tooltipWrapper).toHaveLength(1);
		expect(tooltipIcon.prop('name')).toBe(tooltipVariant);
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with warning variant', () => {
		const tooltipVariant = 'warning';
		const uut = shallow(<CSTooltip content={tooltipContent} variant={tooltipVariant} />);
		const tooltipWrapper = uut.find(`.cs-tw-${tooltipVariant}`);
		const tooltipIcon = uut.find('CSIcon');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find(`.cs-tooltip-${tooltipVariant}`);
		expect(tooltipWrapper).toHaveLength(1);
		expect(tooltipIcon.prop('name')).toBe(tooltipVariant);
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with error variant', () => {
		const tooltipVariant = 'error';
		const uut = shallow(<CSTooltip content={tooltipContent} variant={tooltipVariant} />);
		const tooltipWrapper = uut.find(`.cs-tw-${tooltipVariant}`);
		const tooltipIcon = uut.find('CSIcon');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find(`.cs-tooltip-${tooltipVariant}`);
		expect(tooltipWrapper).toHaveLength(1);
		expect(tooltipIcon.prop('name')).toBe(tooltipVariant);
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with success variant', () => {
		const tooltipVariant = 'success';
		const uut = shallow(<CSTooltip content={tooltipContent} variant={tooltipVariant} />);
		const tooltipWrapper = uut.find(`.cs-tw-${tooltipVariant}`);
		const tooltipIcon = uut.find('CSIcon');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find(`.cs-tooltip-${tooltipVariant}`);
		expect(tooltipWrapper).toHaveLength(1);
		expect(tooltipIcon.prop('name')).toBe(tooltipVariant);
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with basic variant', () => {
		const tooltipVariant = 'basic';
		const uut = shallow(<CSTooltip content={tooltipContent} variant={tooltipVariant} />);
		const tooltipWrapper = uut.find(`.cs-tw-${tooltipVariant}`);
		const tooltipIcon = uut.find('CSIcon');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find(`.cs-tooltip-${tooltipVariant}`);
		expect(tooltipWrapper).toHaveLength(1);
		expect(tooltipIcon.prop('name')).toBe('info');
		expect(tooltip).toHaveLength(1);
	});

	it('should render tooltip with correct tooltip header text', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} tooltipHeader={tooltipHeaderContent} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltipHeader = uut.find('CSAutoposition').dive().find('.cs-tooltip-with-header > .cs-tooltip-header');
		expect(tooltipHeader.text()).toBe(tooltipHeaderContent);
	});

	it('should render tooltip with correct width', () => {
		const tooltipWidth = '100px';
		const uut = shallow(<CSTooltip content={tooltipContent} width={tooltipWidth} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find('CSAutoposition').dive().find('.cs-tooltip.cs-tooltip-overflow-auto');
		expect(tooltip.props().style).toHaveProperty('--cs-tooltip-width', tooltipWidth);
	});

	it('should have a custom class name', () => {
		const tooltipCustomClass = 'custom-class';
		const uut = shallow(<CSTooltip content={tooltipContent} className={tooltipCustomClass} />);
		const tooltipWrapper = uut.find(`.cs-tooltip-wrapper.${tooltipCustomClass}`);
		expect(tooltipWrapper).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const tooltipCustomId = 'custom-id';
		const uut = shallow(<CSTooltip content={tooltipContent} id={tooltipCustomId} />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		expect(tooltipWrapper.props().id).toBe(tooltipCustomId);
	});

	it('should render tooltip with element instead of tooltip icon', () => {
		const childText = 'Hover me';
		const uut = shallow(
			<CSTooltip content={tooltipContent}>
				<span>{childText}</span>
			</CSTooltip>,
		);
		const tooltipChild = uut.find('.cs-tooltip-wrapper span');
		expect(tooltipChild.text()).toBe(childText);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSTooltip content={tooltipContent} data-testid="rest" />);
		const tooltipWrapper = uut.find('.cs-tooltip-wrapper');
		tooltipWrapper.simulate('mouseenter');
		const tooltip = uut.find({ 'data-testid': 'rest' });
		expect(tooltip).toHaveLength(1);
	});
});
