import * as React from 'react';
import { mount, shallow } from 'enzyme';
import '../../setupTests';
import { CSButton, CSModal, CSModalHeader, CSModalBody, CSModalFooter } from '@cloudsense/cs-ui-components';
import CSFormCustomModalField from '../../form-fields/CSFormCustomModalField';

const fieldType = 'CUSTOM-MODAL';
const modalButtonDef = {
	label: 'Open modal',
};
const modalHeaderTitle = 'Modal Title';
const modalDef = {
	header: {
		title: modalHeaderTitle,
	},
	body: {
		bodyContent: <span>Example text</span>,
	},
	footer: {
		footerContent: <CSButton label="Close" />,
	},
};

const content = <span>Custom content</span>;

describe('<CSFormCustomModalField />', () => {
	it('should render modal button default properites', () => {
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDef} />);
		const modalButton = uut.find(CSButton);
		expect(modalButton.first().prop('label')).toBe(modalButtonDef.label);
	});

	it('should render modal with default properites', () => {
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDef} />);
		const modal = uut.find(CSModal);
		const modalHeader = uut.find(CSModalHeader);
		const modalBody = uut.find(CSModalBody);
		const modalFooter = uut.find(CSModalFooter);
		expect(modal).toHaveLength(1);
		expect(modalHeader.prop('title')).toBe(modalDef.header.title);
		expect(modalBody.prop('children')).toBe(modalDef.body.bodyContent);
		expect(modalFooter.prop('children')).toBe(modalDef.footer.footerContent);
	});

	it('should pass correct animated value to CSModal', () => {
		const modalDefAnimated = { ...modalDef, animated: false };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefAnimated} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('animated')).toBeFalsy();
	});

	it('should pass correct closeButton value to CSModal', () => {
		const modalDefCloseButton = { ...modalDef, closeButton: true };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefCloseButton} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('closeButton')).toBeTruthy();
	});

	it('should pass correct loadingText value to CSModal', () => {
		const loadingText = 'Loading.....';
		const modalDefLoadingText = { ...modalDef, loadingText };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefLoadingText} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('loadingText')).toBe(loadingText);
	});

	it('should call onClose on CSModal', () => {
		const onClose = jest.fn();
		const modalDefOnClose = { ...modalDef, onClose };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefOnClose} />);
		const modal = uut.find(CSModal);
		modal.dive().prop('onClose' as any)();
		expect(onClose).toHaveBeenCalled();
	});

	it('should pass correct outerClickClose value to CSModal', () => {
		const modalDefOuterClickClose = { ...modalDef, outerClickClose: true };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefOuterClickClose} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('outerClickClose')).toBeTruthy();
	});

	it('should pass correct size value to CSModal', () => {
		const size = 'xsmall';
		const modalDefSize = { ...modalDef, size };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefSize} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('size')).toBe(size);
	});

	it('should pass correct style value to CSModal', () => {
		const style = { color: 'lightblue' };
		const modalDefStyle = { ...modalDef, style };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefStyle} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('style')).toBe(style);
	});

	it('should pass correct className value to CSModal', () => {
		const className = 'custom-class';
		const modalDefClassName = { ...modalDef, className };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefClassName} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('className')).toBe(className);
	});

	it('should pass correct id value to CSModal', () => {
		const id = 'modal-id';
		const modalDefID = { ...modalDef, id };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefID} />);
		const modal = uut.find(CSModal);
		expect(modal.prop('id')).toBe(id);
	});

	it('should pass correct title value to CSModalHeader', () => {
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDef} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('title')).toBe(modalHeaderTitle);
	});

	it('should pass correct titleId value to CSModalHeader', () => {
		const titleId = 'title_1';
		const modalDefHeaderTitleId = { ...modalDef, header: { ...modalDef.header, titleId } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderTitleId} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('titleId')).toBe(titleId);
	});

	it('should pass correct subtitle value to CSModalHeader', () => {
		const subtitle = 'Modal Subtitle';
		const modalDefHeaderSubtitle = { ...modalDef, header: { ...modalDef.header, subtitle } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderSubtitle} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('subtitle')).toBe(subtitle);
	});

	it('should pass correct content to CSModalHeader', () => {
		const modalDefHeaderContent = { ...modalDef, header: { ...modalDef.header, headerContent: content } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderContent} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('children')).toBe(content);
	});

	it('should dynamically change content of CSModalHeader', async () => {
		const headerFactory = () => new Promise<React.ReactElement>((resolve) => {
			setTimeout(() => {
				resolve(content);
			}, 100);
		});
		const modalDefHeaderFactory = { ...modalDef, header: { ...modalDef.header, headerFactory } };
		const uut = mount(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderFactory} />);
		const modalButton = uut.find(CSButton);
		modalButton.first().simulate('click');
		const modal = uut.find(CSModal);
		expect(modal.prop('loading')).toBeTruthy();
		await new Promise((r) => setTimeout(r, 100));
		uut.update();
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('children')).toBe(content);
	});

	it('should pass correct className value to CSModalHeader', () => {
		const className = 'custom-class';
		const modalDefHeaderClassName = { ...modalDef, header: { ...modalDef.header, className } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderClassName} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('className')).toBe(className);
	});

	it('should pass correct id value to CSModalHeader', () => {
		const id = 'id';
		const modalDefHeaderID = { ...modalDef, header: { ...modalDef.header, id } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefHeaderID} />);
		const modalHeader = uut.find(CSModalHeader);
		expect(modalHeader.prop('id')).toBe(id);
	});

	it('should dynamically change content of CSModalBody', async () => {
		const bodyFactory = () => new Promise<React.ReactElement>((resolve) => {
			setTimeout(() => {
				resolve(content);
			}, 100);
		});
		const modalDefBodyFactory = { ...modalDef, body: { ...modalDef.body, bodyFactory } };
		const uut = mount(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefBodyFactory} />);
		const modalButton = uut.find(CSButton);
		modalButton.first().simulate('click');
		const modal = uut.find(CSModal);
		expect(modal.prop('loading')).toBeTruthy();
		await new Promise((r) => setTimeout(r, 100));
		uut.update();
		const modalBody = uut.find(CSModalBody);
		expect(modalBody.prop('children')).toBe(content);
	});

	it('should pass correct padding value to CSModalBody', () => {
		const padding = '0';
		const modalDefBodyPadding = { ...modalDef, body: { ...modalDef.body, padding } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefBodyPadding} />);
		const modalBody = uut.find(CSModalBody);
		expect(modalBody.prop('padding')).toBe(padding);
	});

	it('should pass correct minHeight value to CSModalBody', () => {
		const minHeight = '300px';
		const modalDefBodyMinHeight = { ...modalDef, body: { ...modalDef.body, minHeight } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefBodyMinHeight} />);
		const modalBody = uut.find(CSModalBody);
		expect(modalBody.prop('minHeight')).toBe(minHeight);
	});

	it('should pass correct className value to CSModalBody', () => {
		const className = 'custom-class';
		const modalDefBodyClassName = { ...modalDef, body: { ...modalDef.body, className } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefBodyClassName} />);
		const modalBody = uut.find(CSModalBody);
		expect(modalBody.prop('className')).toBe(className);
	});

	it('should pass correct id value to CSModalBody', () => {
		const id = 'id';
		const modalDefBodyID = { ...modalDef, body: { ...modalDef.body, id } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefBodyID} />);
		const modalHeader = uut.find(CSModalBody);
		expect(modalHeader.prop('id')).toBe(id);
	});

	it('should dynamically change content of CSModalFooter', async () => {
		const footerFactory = () => new Promise<React.ReactElement>((resolve) => {
			setTimeout(() => {
				resolve(content);
			}, 100);
		});
		const modalDefFooterFactory = { ...modalDef, footer: { ...modalDef.footer, footerFactory } };
		const uut = mount(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefFooterFactory} />);
		const modalButton = uut.find(CSButton);
		modalButton.first().simulate('click');
		const modal = uut.find(CSModal);
		expect(modal.prop('loading')).toBeTruthy();
		await new Promise((r) => setTimeout(r, 100));
		uut.update();
		const modalFooter = uut.find(CSModalFooter);
		expect(modalFooter.prop('children')).toBe(content);
	});

	it('should pass correct align value to CSModalFooter', () => {
		const align = 'left' as any;
		const modalDefFooterAlign = { ...modalDef, footer: { ...modalDef.footer, align } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefFooterAlign} />);
		const modalFooter = uut.find(CSModalFooter);
		expect(modalFooter.prop('align')).toBe(align);
	});

	it('should pass correct className value to CSModalFooter', () => {
		const className = 'custom-class';
		const modalDefFooterClassName = { ...modalDef, footer: { ...modalDef.footer, className } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefFooterClassName} />);
		const modalFooter = uut.find(CSModalFooter);
		expect(modalFooter.prop('className')).toBe(className);
	});

	it('should pass correct id value to CSModalFooter', () => {
		const id = 'id';
		const modalDefFooterID = { ...modalDef, footer: { ...modalDef.footer, id } };
		const uut = shallow(<CSFormCustomModalField fieldType={fieldType} modalButton={modalButtonDef} modal={modalDefFooterID} />);
		const modalFooter = uut.find(CSModalFooter);
		expect(modalFooter.prop('id')).toBe(id);
	});
});
