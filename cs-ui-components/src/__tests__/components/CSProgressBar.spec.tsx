import * as React from 'react';
import '../../setupTests';
import { shallow } from 'enzyme';
import CSProgressBar from '../../components/CSProgressBar';

const label = 'Progress';
const progress = '50%';

describe('<CSProgressBar />', () => {
	it('should pass correct label value to CSLabel', () => {
		const uut = shallow(<CSProgressBar label={label} progress={progress} />);
		expect(uut.find('.cs-progress-bar-wrapper')).toHaveLength(1);
		expect(uut.find('.cs-progress-bar-text > CSLabel').prop('label')).toBe(label);
	});

	it('should display progress by setting correct progress bar value width', () => {
		const uut = shallow(<CSProgressBar label={label} progress={progress} />);
		expect(uut.find('.cs-progress-bar').get(0).props.style).toHaveProperty('--cs-progress-bar-width', '50%');
	});

	it('should set border radius value', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				borderRadius="0.25rem"
			/>,
		);
		expect(uut.find('.cs-progress-bar').get(0).props.style).toHaveProperty('--cs-progress-bar-border-radius', '0.25rem');
	});

	it('should set progress bar background color', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				color="rgb(74, 38, 171)"
			/>,
		);
		expect(uut.find('.cs-progress-bar > .cs-progress-bar-custom')).toHaveLength(1);
		expect(uut.find('.cs-progress-bar').get(0).props.style).toHaveProperty('--cs-progress-bar-custom-bg', 'rgb(74, 38, 171)');
	});

	it('should display info text', () => {
		const infoTextContent = '7/10 Steps';
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				infoText={infoTextContent}
			/>,
		);
		const infoText = uut.find('.cs-progress-bar-text > .cs-progress-info-text');
		expect(infoText.text()).toBe(infoTextContent);
	});

	it('should have a hidden label', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				labelHidden
			/>,
		);
		expect(uut.find('.cs-progress-bar-text > CSLabel')).toHaveLength(0);
	});

	it('should pass correct label value to CSLabel title prop', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				labelTitle
			/>,
		);
		const progressBarLabel = uut.find('CSLabel');
		expect(progressBarLabel.prop('title')).toBe(label);
	});

	it('should have neutral status', () => {
		const uut = shallow(<CSProgressBar label={label} progress={progress} />);
		expect(uut.find('.cs-progress-status')).toHaveLength(0);
	});

	it('should have loading status and loading icon', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				status="loading"
			/>,
		);
		const icon = uut.find('.cs-progress-status > CSIcon');
		expect(icon.prop('title')).toBe('Loading');
		expect(icon.prop('name')).toBe('spinner');
	});

	it('should have success status and success icon', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				status="success"
			/>,
		);
		const icon = uut.find('.cs-progress-status > CSIcon');
		expect(icon.prop('title')).toBe('Success');
		expect(icon.prop('name')).toBe('check');
	});

	it('should have error status and error icon', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				status="error"
			/>,
		);
		const icon = uut.find('.cs-progress-status > CSIcon');
		expect(icon.prop('name')).toBe('close');
	});

	it('should set xsmall thickness', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				thickness="xsmall"
			/>,
		);
		expect(uut.find('.cs-progress-bar-xsmall')).toHaveLength(1);
	});

	it('should set small thickness', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				thickness="small"
			/>,
		);
		expect(uut.find('.cs-progress-bar-small')).toHaveLength(1);
	});

	it('should set medium thickness', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				thickness="medium"
			/>,
		);
		expect(uut.find('.cs-progress-bar-medium')).toHaveLength(1);
	});

	it('should set large thickness', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				thickness="large"
			/>,
		);
		expect(uut.find('.cs-progress-bar-large')).toHaveLength(1);
	});

	it('should set title attribute', () => {
		const title = 'This is a title';
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				title={title}
			/>,
		);
		const progressBar = uut.find('.cs-progress-bar');
		expect(progressBar.props().title).toBe(title);
	});

	it('should set custom class', () => {
		const customClass = 'custom-class';
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				className={customClass}
			/>,
		);
		const progressBarWrapper = uut.find(`.cs-progress-bar-wrapper.${customClass}`);
		expect(progressBarWrapper).toHaveLength(1);
	});

	it('should set custom ID', () => {
		const customId = 'custom-id';
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				id={customId}
			/>,
		);
		const progressBarWrapper = uut.find(`.cs-progress-bar-wrapper#${customId}`);
		expect(progressBarWrapper).toHaveLength(1);
	});

	it('should accept arbitrary props', () => {
		const uut = shallow(
			<CSProgressBar
				label={label}
				progress={progress}
				data-testid="rest"
			/>,
		);
		const progressBar = uut.find({ 'data-testid': 'rest' });
		expect(progressBar).toHaveLength(1);
	});
});
