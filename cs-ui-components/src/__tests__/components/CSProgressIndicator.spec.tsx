import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSProgressIndicator from '../../components/progress-indicator/CSProgressIndicator';
import CSProgressIndicatorItem from '../../components/progress-indicator/CSProgressIndicatorItem';

const textValue = 'text';
const customClass = 'custom-class';
const customId = 'custom-id';

describe('<CSProgressIndicator />', () => {
	it('should render default CSProgressIndicator', () => {
		const uut = shallow(<CSProgressIndicator />);
		const progressIndicator = uut.find('.cs-progress-indicator');
		expect(progressIndicator).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSProgressIndicator className={customClass} />);
		const progressIndicator = uut.find(`.cs-progress-indicator.${customClass}`);
		expect(progressIndicator).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSProgressIndicator id={customId} />);
		const progressIndicator = uut.find(`.cs-progress-indicator#${customId}`);
		expect(progressIndicator).toHaveLength(1);
	});

	it('should render custom children', () => {
		const uut = shallow(<CSProgressIndicator><CSProgressIndicatorItem text={textValue} /></CSProgressIndicator>);
		const progressIndicatorContent = uut.find('.cs-progress-indicator > CSProgressIndicatorItem');
		expect(progressIndicatorContent).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSProgressIndicator data-testid="rest" />);
		const progressIndicator = uut.find({ 'data-testid': 'rest' });
		expect(progressIndicator).toHaveLength(1);
	});
});

describe('<CSProgressIndicatorItem />', () => {
	it('should render default CSProgressIndicatorItem', () => {
		const uut = shallow(<CSProgressIndicatorItem text={textValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-incomplete');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure aria-roledescription attribute is set
		expect(progressIndicatorItemButton.props()['aria-roledescription']).toBe('step');
		// Make sure aria-label attribute is set
		expect(progressIndicatorItemButton.props()['aria-label']).toBe(textValue);
		// Make sure title attribute is set
		expect(progressIndicatorItemButton.props().title).toBe('incomplete');
	});

	it('should render label', () => {
		const uut = shallow(<CSProgressIndicatorItem text={textValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-text');
		expect(progressIndicatorItem.text()).toBe(textValue);
	});

	it('should render status incomplete', () => {
		const statusValue = 'incomplete';
		const uut = shallow(<CSProgressIndicatorItem text={textValue} status={statusValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-incomplete');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		// Make sure belonging class name exists
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure title is set
		expect(progressIndicatorItemButton.props().title).toBe(statusValue);
	});

	it('should render status active', () => {
		const statusValue = 'active';
		const uut = shallow(<CSProgressIndicatorItem text={textValue} status={statusValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-active');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		// Make sure belonging class name exists
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure aria-current attribute is set
		expect(progressIndicatorItemButton.props()['aria-current']).toBeTruthy();
		// Make sure title is set
		expect(progressIndicatorItemButton.props().title).toBe(statusValue);
	});

	it('should render status complete and correct icon', () => {
		const statusValue = 'complete';
		const uut = shallow(<CSProgressIndicatorItem text={textValue} status={statusValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-complete');
		const progressIndicatorItemIcon = uut.find('.cs-progress-indicator-marker > CSIcon');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		// Make sure belonging class name exists
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure correct icon is rendered
		expect(progressIndicatorItemIcon.prop('name')).toBe('check');
		// Make sure title is set
		expect(progressIndicatorItemButton.props().title).toBe(statusValue);
	});

	it('should render status error and correct icon', () => {
		const statusValue = 'error';
		const uut = shallow(<CSProgressIndicatorItem text={textValue} status={statusValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-error');
		const progressIndicatorItemIcon = uut.find('.cs-progress-indicator-marker > CSIcon');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		// Make sure belonging class name exists
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure correct icon is rendered
		expect(progressIndicatorItemIcon.prop('name')).toBe('error');
		// Make sure title is set
		expect(progressIndicatorItemButton.props().title).toBe(statusValue);
	});

	it('should render status loading and correct icon', () => {
		const statusValue = 'loading';
		const uut = shallow(<CSProgressIndicatorItem text={textValue} status={statusValue} />);
		const progressIndicatorItem = uut.find('.cs-progress-indicator-item.cs-progress-indicator-item-loading');
		const progressIndicatorItemIcon = uut.find('.cs-progress-indicator-marker > CSIcon');
		const progressIndicatorItemButton = uut.find('.cs-progress-indicator-item .cs-progress-indicator-marker');
		// Make sure belonging class name exists
		expect(progressIndicatorItem).toHaveLength(1);
		// Make sure correct icon is rendered
		expect(progressIndicatorItemIcon.prop('name')).toBe('spinner');
		// Make sure title is set
		expect(progressIndicatorItemButton.props().title).toBe(statusValue);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSProgressIndicatorItem text={textValue} className={customClass} />);
		const progressIndicatorItem = uut.find(`.cs-progress-indicator-item.${customClass}`);
		expect(progressIndicatorItem).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSProgressIndicatorItem text={textValue} id={customId} />);
		const progressIndicatorItem = uut.find(`.cs-progress-indicator-item#${customId}`);
		expect(progressIndicatorItem).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(<CSProgressIndicatorItem text={textValue} data-testid="rest" />);
		const progressIndicatorItem = uut.find({ 'data-testid': 'rest' });
		expect(progressIndicatorItem).toHaveLength(1);
	});
});
