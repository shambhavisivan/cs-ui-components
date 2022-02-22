import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSCustomData from '../../components/CSCustomData';
import { actions, icons } from '../common/custom-data';

const value = 'Value';
const title = 'This is a title';

const icon = icons[1];

const { tooltip, ...iconWithoutTooltip } = icon;

describe('<CSCustomData />', () => {
	it('should render the default CSCustomData', () => {
		const uut = shallow(<CSCustomData />).dive();
		// By default, if there are no props, this component returns null
		const customData = uut.find('.cs-custom-data-wrapper');
		expect(customData).toHaveLength(0);
	});

	it('should display actions', () => {
		const uut = shallow(<CSCustomData actions={actions} />).dive();
		const customDataActions = uut.find('.cs-custom-data-item CSButton');
		expect(customDataActions).toHaveLength(actions.length);
		customDataActions.forEach((customDataAction, customDataActionIndex) => {
			const { tooltip: customDataActionTooltip, ...customDataActionProps } = actions[customDataActionIndex];
			expect(customDataAction.props()).toEqual(expect.objectContaining(customDataActionProps));
			if (customDataActionTooltip) {
				const customDataTooltip = customDataAction.parent().find('CSTooltip');
				expect(customDataTooltip).toHaveLength(1);
				expect(customDataTooltip.props()).toEqual(expect.objectContaining(customDataActionTooltip));
			}
		});
	});

	it('should display icons', () => {
		const uut = shallow(<CSCustomData icons={icons} />).dive();
		const customDataIcons = uut.find('.cs-custom-data-item CSIcon');
		expect(customDataIcons).toHaveLength(icons.length);
		customDataIcons.forEach((customDataIcon, customDataIconIndex) => {
			const { tooltip: customDataIconTooltip, ...customDataIconProps } = icons[customDataIconIndex];
			expect(customDataIcon.props()).toEqual(expect.objectContaining(customDataIconProps));
			if (customDataIconTooltip) {
				const customDataTooltip = customDataIcon.parent();
				expect(customDataTooltip).toHaveLength(1);
				expect(customDataTooltip.props()).toEqual(expect.objectContaining(customDataIconTooltip));
			}
		});
	});

	it('should pass menuIcon to CSIcon as a name', () => {
		const uut = shallow(<CSCustomData menuIcon="dropdown" />).dive();
		const menuIcon = uut.find('.cs-custom-data-item > CSIcon');
		expect(menuIcon.prop('name')).toBe('down');
	});

	it('should render custom data with datepicker icon', () => {
		const uut = shallow(<CSCustomData menuIcon="datepicker" />).dive();
		const datepickerIcon = uut.find('.cs-custom-data-item > CSIcon');
		expect(datepickerIcon.prop('name')).toBe('date_input');
	});

	it('should display status', () => {
		const uut = shallow(<CSCustomData status={icon} />).dive();
		const customDataStatusTooltip = uut.find('.cs-custom-data-item > CSTooltip');
		expect(customDataStatusTooltip).toHaveLength(1);
		expect(customDataStatusTooltip.props()).toEqual(expect.objectContaining(tooltip));

		const customDataStatusIcon = customDataStatusTooltip.dive().find('CSIcon');
		expect(customDataStatusIcon).toHaveLength(1);
		expect(customDataStatusIcon.props()).toEqual(expect.objectContaining(iconWithoutTooltip));
	});

	it('should set title attribute', () => {
		const uut = shallow(<CSCustomData value={value} title={title} />).dive();
		const customData = uut.find('.cs-custom-data-wrapper > .cs-custom-data-value');
		expect(customData.props().title).toBe(title);
	});

	it('should set value attribute', () => {
		const uut = shallow(<CSCustomData value={value} />).dive();
		const customData = uut.find('.cs-custom-data-wrapper > .cs-custom-data-value');
		expect(customData).toHaveLength(1);
		expect(customData.props().children).toBe(value);
	});
});
