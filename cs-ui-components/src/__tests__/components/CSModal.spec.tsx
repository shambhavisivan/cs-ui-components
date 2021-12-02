import * as React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests';
import CSModal from '../../components/modal/CSModal';
import CSModalHeader from '../../components/modal/CSModalHeader';
import CSModalBody from '../../components/modal/CSModalBody';
import CSModalFooter from '../../components/modal/CSModalFooter';
import CSButton from '../../components/CSButton';

const buttonLabel = 'test button label';
const customClass = 'custom-class';
const customId = 'custom-id';
const text = 'Lorem ipsum dolor sit amet.';
const titleText = 'Title';

describe('<CSModal />', () => {
	it('should render default CSModal', () => {
		const uut = shallow(<CSModal />).dive();
		const modal = uut.find('CSModal').dive();
		// visible
		expect(modal).toHaveLength(1);
		const modalAria = modal.dive().find('.cs-modal').prop('aria-modal');
		expect(modalAria).toBeTruthy();
		// size
		expect(modal.find('.cs-modal-auto')).toHaveLength(1);
		// close button
		const closeButton = modal.find('.cs-modal-close');
		expect(closeButton).toHaveLength(0);
		expect(modal.find('.cs-modal-no-close-btn')).toHaveLength(1);
		// loading
		const loading = modal.find('.cs-modal-loading');
		expect(loading).toHaveLength(0);
		const spinner = modal.find('.cs-modal > CSSpinner');
		expect(spinner).toHaveLength(0);
		// animated
		const modalOverlayHidden = modal.find('.cs-modal-overlay-hidden');
		const modalHidden = modal.find('.cs-modal-hidden');
		expect(modalOverlayHidden).toHaveLength(1);
		expect(modalHidden).toHaveLength(1);
	});

	it('should display modal', () => {
		const uut = shallow(<CSModal visible />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal).toHaveLength(1);
		const modalAria = modal.dive().find('.cs-modal').prop('aria-modal');
		expect(modalAria).toBeTruthy();
	});

	it('should check if animated is true', () => {
		const uut = shallow(<CSModal animated />).dive();
		const modal = uut.find('CSModal').dive();
		const modalOverlayHidden = modal.find('.cs-modal-overlay-hidden');
		const modalHidden = modal.find('.cs-modal-hidden');
		expect(modalOverlayHidden).toHaveLength(1);
		expect(modalHidden).toHaveLength(1);
	});

	it('should check if animated is false', () => {
		const uut = shallow(<CSModal animated={false} />).dive();
		const modal = uut.find('CSModal').dive();
		const modalOverlayHidden = modal.find('.cs-modal-overlay-hidden');
		const modalHidden = modal.find('.cs-modal-hidden');
		expect(modalOverlayHidden).toHaveLength(0);
		expect(modalHidden).toHaveLength(0);
	});

	it('should render close button', () => {
		const uut = shallow(<CSModal closeButton />).dive();
		const modal = uut.find('CSModal').dive();
		const closeButton = modal.find('.cs-modal-close');
		expect(closeButton).toHaveLength(1);
	});

	it('should render loading modal', () => {
		const uut = shallow(<CSModal loading />).dive();
		const modal = uut.find('CSModal').dive();
		const loading = modal.find('.cs-modal-loading');
		expect(loading).toHaveLength(1);
		const spinner = modal.find('.cs-modal > .cs-modal-content > CSSpinner').dive().find('.cs-spinner-wrapper');
		expect(spinner).toHaveLength(1);
	});

	it('should apply loading text to spinner', () => {
		const loadingText = 'loading';
		const uut = shallow(<CSModal loading loadingText={loadingText} />).dive();
		const modal = uut.find('CSModal').dive();
		const spinnerText = modal.find('.cs-modal > .cs-modal-content > CSSpinner').dive().find('.cs-spinner-label > span');
		expect(spinnerText.text()).toBe(loadingText);
	});

	it('should use a working onClose callback', () => {
		const handleOnCloseMock = jest.fn();
		const uut = shallow(<CSModal visible closeButton onClose={handleOnCloseMock} />).dive();
		const modal = uut.find('CSModal').dive();
		const closeButton = modal.find('.cs-modal-close');
		closeButton.simulate('click');
		expect(handleOnCloseMock).toHaveBeenCalledTimes(1);
	});

	it('should apply size auto to modal', () => {
		const uut = shallow(<CSModal size="auto" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-auto')).toHaveLength(1);
	});

	it('should apply size xsmall', () => {
		const uut = shallow(<CSModal size="xsmall" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-xsmall')).toHaveLength(1);
	});

	it('should apply size small', () => {
		const uut = shallow(<CSModal size="small" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-small')).toHaveLength(1);
	});

	it('should apply size medium', () => {
		const uut = shallow(<CSModal size="medium" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-medium')).toHaveLength(1);
	});

	it('should apply size large', () => {
		const uut = shallow(<CSModal size="large" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-large')).toHaveLength(1);
	});

	it('should apply size xlarge', () => {
		const uut = shallow(<CSModal size="xlarge" />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal-xlarge')).toHaveLength(1);
	});

	it('should apply inline style', () => {
		const style = { border: '2px solid var(--csd-custom-br-purple)' };
		const uut = shallow(<CSModal style={style} />).dive();
		const modal = uut.find('CSModal').dive();
		expect(modal.find('.cs-modal').props().style).toMatchObject(style);
	});

	it('should not be hidden if mounted is true', () => {
		const uut = shallow(<CSModal mounted visible />).dive();
		const modal = uut.find('CSModal').dive();
		const modalOverlay = modal.find('.cs-modal-overlay');
		expect(modalOverlay.find('.cs-modal-overlay-hidden')).toHaveLength(0);
		expect(modal.find('.cs-modal-hidden')).toHaveLength(0);
	});

	it('should invoke setMounted', () => {
		const handleOnSetMounted = jest.fn();
		shallow(<CSModal setMounted={handleOnSetMounted} />).dive().find('CSModal').dive();
		expect(handleOnSetMounted).toHaveBeenCalledTimes(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSModal className={customClass} />).dive();
		const modal = uut.find('CSModal').dive();
		const modalOverlay = modal.find(`.cs-modal-overlay.${customClass}`);
		expect(modalOverlay).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSModal id={customId} />).dive();
		const modal = uut.find('CSModal').dive();
		const modalOverlay = modal.find(`.cs-modal-overlay#${customId}`);
		expect(modalOverlay).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(
			<CSModal>
				<CSModalHeader title={titleText}>
					<CSButton label={buttonLabel} />
				</CSModalHeader>
			</CSModal>,
		).dive();
		const modal = uut.find('CSModal').dive();
		const modalHeader = modal.find('.cs-modal > .cs-modal-content > CSModalHeader');
		expect(modalHeader).toHaveLength(1);
	});
});

describe('<CSModalHeader />', () => {
	it('should render default CSModalHeader', () => {
		const uut = shallow(<CSModalHeader />);
		expect(uut.find('.cs-modal-header')).toHaveLength(1);
	});

	it('should render subtitle', () => {
		const uut = shallow(<CSModalHeader subtitle={titleText} />);
		const subtitle = uut.find('.cs-modal-header-subtitle');
		expect(subtitle).toHaveLength(1);
		expect(subtitle.text()).toBe(titleText);
	});

	it('should render title', () => {
		const uut = shallow(<CSModalHeader title={titleText} />);
		const title = uut.find('.cs-modal-header-title');
		expect(title).toHaveLength(1);
		expect(title.text()).toBe(titleText);
	});

	it('should set id on a title', () => {
		const titleId = 'test id';
		const uut = shallow(<CSModalHeader title="Title" titleId={titleId} />);
		const modalHeaderTitle = uut.find('.cs-modal-header-title');
		expect(modalHeaderTitle.props().id).toBe(titleId);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSModalHeader className={customClass} />);
		const modalHeader = uut.find(`.cs-modal-header.${customClass}`);
		expect(modalHeader).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSModalHeader id={customId} />);
		const modalHeader = uut.find(`.cs-modal-header#${customId}`);
		expect(modalHeader).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(
			<CSModalHeader title={titleText}>
				<CSButton label={buttonLabel} />
			</CSModalHeader>,
		);
		const button = uut.find('.cs-modal-header > CSButton');
		expect(button).toHaveLength(1);
	});
});

describe('<CSModalBody />', () => {
	it('should render default CSModalBody', () => {
		const uut = shallow(<CSModalBody />);
		const modalBody = uut.props().style;
		expect(modalBody).toHaveProperty('--cs-modal-body-min-height', undefined);
		expect(modalBody).toHaveProperty('--cs-modal-body-padding', undefined);
	});

	it('should set custom min height', () => {
		const minHeight = '20rem';
		const uut = shallow(<CSModalBody minHeight={minHeight} />);
		const modalBody = uut.props().style;
		expect(modalBody).toHaveProperty('--cs-modal-body-min-height', minHeight);
	});

	it('should set custom padding', () => {
		const padding = '2rem';
		const uut = shallow(<CSModalBody padding={padding} />);
		const modalBody = uut.props().style;
		expect(modalBody).toHaveProperty('--cs-modal-body-padding', padding);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSModalBody className={customClass} />);
		const modalBody = uut.find(`.cs-modal-body.${customClass}`);
		expect(modalBody).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSModalBody id={customId} />);
		const modalBody = uut.find(`.cs-modal-body#${customId}`);
		expect(modalBody).toHaveLength(1);
	});

	it('should render children', () => {
		const uut = shallow(
			<CSModalBody>
				<p>{text}</p>
			</CSModalBody>,
		);
		expect(uut.find('p')).toHaveLength(1);
	});
});

describe('<CSModalFooter />', () => {
	it('should render default CSModalFooter', () => {
		const uut = shallow(<CSModalFooter />);
		const modalFooter = uut.find('.cs-modal-footer-right');
		expect(modalFooter).toHaveLength(1);
	});

	it('should align left', () => {
		const uut = shallow(<CSModalFooter align="left" />);
		const modalFooter = uut.find('.cs-modal-footer-left');
		expect(modalFooter).toHaveLength(1);
	});

	it('should align center', () => {
		const uut = shallow(<CSModalFooter align="center" />);
		const modalFooter = uut.find('.cs-modal-footer-center');
		expect(modalFooter).toHaveLength(1);
	});

	it('should align right', () => {
		const uut = shallow(<CSModalFooter align="right" />);
		const modalFooter = uut.find('.cs-modal-footer-right');
		expect(modalFooter).toHaveLength(1);
	});

	it('should have a custom class name', () => {
		const uut = shallow(<CSModalFooter className={customClass} />);
		const modalFooter = uut.find(`.cs-modal-footer.${customClass}`);
		expect(modalFooter).toHaveLength(1);
	});

	it('should have a custom ID', () => {
		const uut = shallow(<CSModalFooter id={customId} />);
		const modalFooter = uut.find(`.cs-modal-footer#${customId}`);
		expect(modalFooter).toHaveLength(1);
	});

	it('should render children', () => {
		const handleCloseModal = jest.fn();
		const uut = shallow(
			<CSModalFooter>
				<p>{text}</p>
				<CSButton label={buttonLabel} onClick={handleCloseModal} />
			</CSModalFooter>,
		);
		expect(uut.find('p')).toHaveLength(1);
		expect(uut.find('.cs-modal-footer > CSButton')).toHaveLength(1);
	});
});
