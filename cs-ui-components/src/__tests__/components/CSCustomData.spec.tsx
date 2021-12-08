import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSCustomData from '../../components/custom-data/CSCustomData';
import { CSIconOrigin } from '../../components/CSIcon';
import { CSTooltipPosition, CSTooltipVariant } from '../../components/CSTooltip';
import { CSButtonType, CSButtonSize, CSButtonStyle } from '../../components/CSButton';

const value = 'Value';
const title = 'This is a title';
const icon = [{ iconName: 'cart' }];
const icons = [
	{ iconName: 'cart' },
	{ iconName: 'down' },
	{
		iconName: 'error',
		iconColor: '#c23934',
		iconOrigin: 'slds' as CSIconOrigin,
		iconSize: '2rem',
		getTooltip: {
			content: 'status tooltip',
			delay: 300,
			height: '2rem',
			maxHeight: '3rem',
			maxWidth: '3rem',
			padding: '1rem',
			position: 'top-right' as CSTooltipPosition,
			stickyOnClick: true,
			variant: 'info' as CSTooltipVariant,
			width: '2rem',
		},
	},
];
const action = [
	{
		action: () => {},
		icon: { iconName: 'delete' },
		name: 'Delete',
	},
];
const actions = [
	{
		action: () => {},
		icon: {
			iconName: 'delete',
			iconColor: '#c23934',
			iconOrigin: 'slds' as CSIconOrigin,
			iconSize: '2rem',
		},
		name: 'Delete',
		btnType: 'transparent' as CSButtonType,
		size: 'small' as CSButtonSize,
		btnStyle: 'brand' as CSButtonStyle,
		labelHidden: false,
	},
	{
		action: () => {},
		icon: { iconName: 'add' },
		name: 'Add',
		getTooltip: {
			content: 'status tooltip',
			delay: 300,
			height: '2rem',
			maxHeight: '3rem',
			maxWidth: '3rem',
			padding: '1rem',
			position: 'top-right' as CSTooltipPosition,
			stickyOnClick: true,
			variant: 'info' as CSTooltipVariant,
			width: '2rem',
		},
	},
];

describe('<CSCustomData />', () => {
	it('should render the default CSCustomData', () => {
		const uut = shallow(<CSCustomData />);
		// Should render the custom data
		const customData = uut.find('.cs-custom-data-wrapper');
		expect(customData).toHaveLength(1);
	});

	it('should pass action to CSCustomDataActions', () => {
		const uut = shallow(<CSCustomData actions={action} />);
		const customDataActions = uut.find('CSCustomDataActions');
		expect(customDataActions).toHaveLength(1);
		expect(customDataActions.prop('actions')).toMatchObject(action);
	});

	it('should pass actions to CSCustomDataActions', () => {
		const uut = shallow(<CSCustomData actions={actions} />);
		const customDataActions = uut.find('CSCustomDataActions');
		expect(customDataActions).toHaveLength(1);
		expect(customDataActions.prop('actions')).toMatchObject(actions);
	});

	it('should pass icon to CSCustomDataIcons', () => {
		const uut = shallow(<CSCustomData icons={icon} />);
		const customDataIcons = uut.find('CSCustomDataIcons');
		expect(customDataIcons).toHaveLength(1);
		expect(customDataIcons.prop('icons')).toMatchObject(icon);
	});

	it('should pass icons to CSCustomDataIcons', () => {
		const uut = shallow(<CSCustomData icons={icons} />);
		const customDataIcons = uut.find('CSCustomDataIcons');
		expect(customDataIcons).toHaveLength(1);
		expect(customDataIcons.prop('icons')).toMatchObject(icons);
	});

	it('should pass menuIcon to CSIcon as a name', () => {
		const uut = shallow(<CSCustomData menuIcon="dropdown" />);
		const menuIcon = uut.find('CSIcon');
		expect(menuIcon.prop('name')).toBe('down');
	});

	it('should render custom data with datepicker icon', () => {
		const uut = shallow(<CSCustomData menuIcon="datepicker" />);
		const datepickerIcon = uut.find('CSIcon');
		expect(datepickerIcon.prop('name')).toBe('date_input');
	});

	it('should pass status to CSTooltip ', () => {
		const statusTooltip = {
			iconName: 'error',
			iconColor: '#c23934',
			iconOrigin: 'slds' as CSIconOrigin,
			iconSize: '2rem',
			getTooltip: {
				content: 'status tooltip',
				delay: 300,
				height: '2rem',
				maxHeight: '3rem',
				maxWidth: '3rem',
				padding: '1rem',
				position: 'top-right' as CSTooltipPosition,
				stickyOnClick: true,
				variant: 'info' as CSTooltipVariant,
				width: '2rem',
			},
		};
		const uut = shallow(<CSCustomData status={statusTooltip} />);
		const customDataStatusTooltip = uut.find('CSTooltip');
		expect(customDataStatusTooltip).toHaveLength(1);
		expect(customDataStatusTooltip.prop('content')).toBe(statusTooltip.getTooltip.content);
		expect(customDataStatusTooltip.prop('delayTooltip')).toBe(statusTooltip.getTooltip.delay);
		expect(customDataStatusTooltip.prop('height')).toBe(statusTooltip.getTooltip.height);
		expect(customDataStatusTooltip.prop('maxHeight')).toBe(statusTooltip.getTooltip.maxHeight);
		expect(customDataStatusTooltip.prop('maxWidth')).toBe(statusTooltip.getTooltip.maxWidth);
		expect(customDataStatusTooltip.prop('padding')).toBe(statusTooltip.getTooltip.padding);
		expect(customDataStatusTooltip.prop('position')).toBe(statusTooltip.getTooltip.position);
		expect(customDataStatusTooltip.prop('stickyOnClick')).toBe(statusTooltip.getTooltip.stickyOnClick);
		expect(customDataStatusTooltip.prop('variant')).toBe(statusTooltip.getTooltip.variant);
		expect(customDataStatusTooltip.prop('width')).toBe(statusTooltip.getTooltip.width);
		expect(customDataStatusTooltip.prop('iconName')).toBe(statusTooltip.iconName);
		expect(customDataStatusTooltip.prop('iconColor')).toBe(statusTooltip.iconColor);
		expect(customDataStatusTooltip.prop('iconOrigin')).toBe(statusTooltip.iconOrigin);
		expect(customDataStatusTooltip.prop('iconSize')).toBe(statusTooltip.iconSize);
	});

	it('should pass status to CSIcon', () => {
		const statusIcon = {
			iconName: 'error',
			iconColor: '#c23934',
			iconOrigin: 'slds' as CSIconOrigin,
			iconSize: '2rem',
		};
		const uut = shallow(<CSCustomData status={statusIcon} />);
		const customDataStatusIcon = uut.find('CSIcon');
		expect(customDataStatusIcon).toHaveLength(1);
		expect(customDataStatusIcon.prop('name')).toBe(statusIcon.iconName);
		expect(customDataStatusIcon.prop('color')).toBe(statusIcon.iconColor);
		expect(customDataStatusIcon.prop('origin')).toBe(statusIcon.iconOrigin);
		expect(customDataStatusIcon.prop('size')).toBe(statusIcon.iconSize);
	});

	it('should set title attribute', () => {
		const uut = shallow(<CSCustomData value={value} title={title} />);
		const customData = uut.find('.cs-custom-data-wrapper > .cs-custom-data-value');
		expect(customData.props().title).toBe(title);
	});

	it('should set value attribute', () => {
		const uut = shallow(<CSCustomData value={value} />);
		const customData = uut.find('.cs-custom-data-wrapper > .cs-custom-data-value');
		expect(customData).toHaveLength(1);
		expect(customData.props().children).toBe(value);
	});
});

describe('<CSCustomDataActions />', () => {
	it('should pass actions data to CSTooltip props', () => {
		const uut = shallow(<CSCustomData actions={actions} />);
		const customDataActions = uut.find('CSCustomDataActions');
		const actionsTooltip = customDataActions.dive().find('CSTooltip');
		expect(actionsTooltip).toHaveLength(1);
		expect(actionsTooltip.prop('content')).toBe(actions[1].getTooltip.content);
		expect(actionsTooltip.prop('delayTooltip')).toBe(actions[1].getTooltip.delay);
		expect(actionsTooltip.prop('height')).toBe(actions[1].getTooltip.height);
		expect(actionsTooltip.prop('maxHeight')).toBe(actions[1].getTooltip.maxHeight);
		expect(actionsTooltip.prop('maxWidth')).toBe(actions[1].getTooltip.maxWidth);
		expect(actionsTooltip.prop('padding')).toBe(actions[1].getTooltip.padding);
		expect(actionsTooltip.prop('position')).toBe(actions[1].getTooltip.position);
		expect(actionsTooltip.prop('stickyOnClick')).toBe(actions[1].getTooltip.stickyOnClick);
		expect(actionsTooltip.prop('variant')).toBe(actions[1].getTooltip.variant);
		expect(actionsTooltip.prop('width')).toBe(actions[1].getTooltip.width);
	});

	it('should pass actions data to CSButton props', () => {
		const uut = shallow(<CSCustomData actions={actions} />);
		const customDataActions = uut.find('CSCustomDataActions');
		expect(customDataActions).toHaveLength(1);
		const actionsButton = customDataActions.dive().find('CSButton');
		expect(actionsButton.at(0).prop('iconName')).toBe(actions[0].icon.iconName);
		expect(actionsButton.at(0).prop('iconOrigin')).toBe(actions[0].icon.iconOrigin);
		expect(actionsButton.at(0).prop('iconColor')).toBe(actions[0].icon.iconColor);
		expect(actionsButton.at(0).prop('iconSize')).toBe(actions[0].icon.iconSize);
		expect(actionsButton.at(0).prop('label')).toBe(actions[0].name);
		expect(actionsButton.at(0).prop('btnType')).toBe(actions[0].btnType);
		expect(actionsButton.at(0).prop('btnStyle')).toBe(actions[0].btnStyle);
		expect(actionsButton.at(0).prop('size')).toBe(actions[0].size);
		expect(actionsButton.at(0).prop('labelHidden')).toBe(actions[0].labelHidden);
	});
});

describe('<CSCustomDataIcons />', () => {
	it('should pass icons data to CSTooltip props', () => {
		const uut = shallow(<CSCustomData icons={icons} />);
		const customDataIcons = uut.find('CSCustomDataIcons');
		const iconsTooltip = customDataIcons.dive().find('CSTooltip');
		expect(iconsTooltip).toHaveLength(1);
		expect(iconsTooltip.prop('iconName')).toBe(icons[2].iconName);
		expect(iconsTooltip.prop('iconOrigin')).toBe(icons[2].iconOrigin);
		expect(iconsTooltip.prop('iconColor')).toBe(icons[2].iconColor);
		expect(iconsTooltip.prop('iconSize')).toBe(icons[2].iconSize);
		expect(iconsTooltip.prop('content')).toBe(icons[2].getTooltip.content);
		expect(iconsTooltip.prop('delayTooltip')).toBe(icons[2].getTooltip.delay);
		expect(iconsTooltip.prop('height')).toBe(icons[2].getTooltip.height);
		expect(iconsTooltip.prop('maxHeight')).toBe(icons[2].getTooltip.maxHeight);
		expect(iconsTooltip.prop('maxWidth')).toBe(icons[2].getTooltip.maxWidth);
		expect(iconsTooltip.prop('padding')).toBe(icons[2].getTooltip.padding);
		expect(iconsTooltip.prop('position')).toBe(icons[2].getTooltip.position);
		expect(iconsTooltip.prop('stickyOnClick')).toBe(icons[2].getTooltip.stickyOnClick);
		expect(iconsTooltip.prop('variant')).toBe(icons[2].getTooltip.variant);
		expect(iconsTooltip.prop('width')).toBe(icons[2].getTooltip.width);
	});

	it('should pass icons data to CSIcon props', () => {
		const uut = shallow(<CSCustomData icons={icons} />);
		const customDataIcons = uut.find('CSCustomDataIcons');
		const iconsIcon = customDataIcons.dive().find('CSIcon');
		expect(iconsIcon).toHaveLength(2);
		expect(iconsIcon.at(0).prop('name')).toBe(icons[0].iconName);
		expect(iconsIcon.at(0).prop('color')).toBe(icons[0].iconColor);
		expect(iconsIcon.at(0).prop('origin')).toBe(icons[0].iconOrigin);
		expect(iconsIcon.at(0).prop('size')).toBe(icons[0].iconSize);
	});
});
