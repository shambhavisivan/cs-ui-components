import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {
	CSModal,
	CSModalHeader,
	CSModalBody,
	CSModalFooter,
	CSButton,
	CSAlert
} from '@cloudsense/cs-ui-components';

interface CSModalPreviewState {
	modalOpen: string | undefined;
	secondModalOpen: boolean;
}

class CSModalPreview extends React.Component<{}, CSModalPreviewState> {
	constructor(props: any) {
		super(props);

		this.state = {
			modalOpen: undefined,
			secondModalOpen: false
		};
	}

	getCSModalDoc() {
		const json = {
			name: 'Modal',
			usage:
				'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							variationText: ['closeButton={true}', 'align="left"'],
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'xsmall' })}
									/>
									{this.state.modalOpen === 'xsmall' && (
										<CSModal
											size="xsmall"
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Example text, most likely a confirmation message.
												</p>
											</CSModalBody>
											<CSModalFooter align="left">
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							variationText: ['closeButton={true}', 'align="left"'],
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'small' })}
									/>
									{this.state.modalOpen === 'small' && (
										<CSModal
											size="small"
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter align="left">
												<CSButton
													label="Open Modal"
													onClick={() => this.setState({ secondModalOpen: true })}
												/>
											</CSModalFooter>
										</CSModal>
									)}
									{this.state.secondModalOpen && (
										<CSModal
											size="xsmall"
											closeButton
											onClose={() => this.setState({ secondModalOpen: false })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Example text, most likely a confirmation message.
												</p>
											</CSModalBody>
											<CSModalFooter align="left">
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['closeButton={false}', 'align="right"'],
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'medium' })}
									/>
									{this.state.modalOpen === 'medium' && (
										<CSModal size="medium" closeButton={false}>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter align="right">
												<CSButton label="Default Button" />
												<CSButton
													label="Close"
													btnStyle="brand"
													onClick={() =>
														this.setState({ modalOpen: undefined })
													}
												/>
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							variationText: ['closeButton={true}', 'align="center"'],
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'large' })}
									/>
									{this.state.modalOpen === 'large' && (
										<CSModal
											size="large"
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter align="center">
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						},
						{
							variationName: ['xlarge'],
							quickLink: 'xlarge',
							variationText: ['closeButton={true}', 'align="right"'],
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'xlarge' })}
									/>
									{this.state.modalOpen === 'xlarge' && (
										<CSModal
											size="xlarge"
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter align="right">
												<CSButton label="Default Button" />
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'padding',
					customText: '',
					variations: [
						{
							variationName: ['0'],
							quickLink: '0',
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'padding' })}
									/>
									{this.state.modalOpen === 'padding' && (
										<CSModal
											size="small"
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody padding="0">
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'id',
					customText: '',
					variations: [
						{
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'id' })}
									/>
									{this.state.modalOpen === 'id' && (
										<CSModal
											size="small"
											closeButton
											id="id"
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												id="id"
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody id="id">
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter id="id">
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'style',
					customText: '',
					variations: [
						{
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'style' })}
									/>
									{this.state.modalOpen === 'style' && (
										<CSModal
											size="small"
											style={{ border: '2px solid hotpink' }}
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader title="Style example" />
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'loading',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'loading' })}
									/>
									{this.state.modalOpen === 'loading' && (
										<CSModal
											size="medium"
											loading
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader title="Style example" />
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'loadingText',
					customText: '',
					variations: [
						{
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'loadingText' })}
									/>
									{this.state.modalOpen === 'loadingText' && (
										<CSModal
											size="medium"
											loading
											loadingText="Cloning configurations..."
											closeButton
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader title="Style example" />
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							variationName: ['custom class'],
							quickLink: 'custom class',
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'className' })}
									/>
									{this.state.modalOpen === 'className' && (
										<CSModal
											size="small"
											closeButton
											className="custom-class"
											onClose={() => this.setState({ modalOpen: undefined })}
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				},
				{
					propName: 'outerClickClose',
					customText: '',
					variations: [
						{
							string: '',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ modalOpen: 'clickOutside' })}
									/>
									{this.state.modalOpen === 'clickOutside' && (
										<CSModal
											size="small"
											closeButton
											id="id"
											onClose={() => this.setState({ modalOpen: undefined })}
											outerClickClose
										>
											<CSModalHeader
												title="This is a test heading"
												subtitle="This is a test subtitle"
											/>
											<CSModalBody>
												<p>
													Sit nulla est ex deserunt exercitation anim
													occaecat.
													<br />
													<br />
													Nostrud ullamco deserunt aute id consequat
													veniam incididunt duis in sint irure nisi.
													Mollit officia cillum Lorem ullamco minim
													nostrud elit officia tempor esse quis. Cillum
													sunt ad dolore quis aute consequat ipsum magna
													exercitation reprehenderit magna. Tempor
													cupidatat consequat elit dolor adipisicing.
												</p>
											</CSModalBody>
											<CSModalFooter>
												<CSButton label="Default Button" />
												<CSButton label="Brand Button" btnStyle="brand" />
											</CSModalFooter>
										</CSModal>
									)}
								</div>
							)
						}
					]
				}
			],

			/* CSModal Properties Table */
			properties: [
				{
					propertyName: 'className',
					description: 'For implementing custom class to component'
				},
				{
					propertyName: 'closeButton',
					description: 'Logic for close button visibility',
					options: ['false', 'true']
				},
				{
					propertyName: 'id',
					description: 'Modal id value'
				},
				{
					propertyName: 'loading',
					description: 'Add custom styles as inline css',
					options: ['false', 'true']
				},
				{
					propertyName: 'loadingText',
					description: 'Label to show while loading spinner is visible'
				},
				{
					propertyName: 'onClose',
					description: 'Logic for onClick event'
				},
				{
					propertyName: 'outerClickClose',
					description: 'Option to close modal on click outside'
				},
				{
					propertyName: 'size',
					description: 'Modal size',
					options: ['xsmall', 'small', 'medium', 'large', 'xlarge']
				},
				{
					propertyName: 'style',
					description: 'Add custom styles as inline css'
				}
			]
		};

		for (const example of json.examples) {
			for (const variation of example.variations) {
				(variation as any).string = jsxToString(variation.component);
			}
		}

		return json;
	}

	getCSModalHeaderDoc() {
		const json = {
			name: 'Modal Header',
			properties: [
				{
					propertyName: 'id',
					description: 'Modal header id value'
				},
				{
					propertyName: 'subtitle',
					description: 'Secondary text content',
					options: []
				},
				{
					propertyName: 'title',
					description: 'Main header title',
					options: []
				}
			]
		};

		return json;
	}

	getCSModalBodyDoc() {
		const json = {
			name: 'Modal Body',
			properties: [
				{
					propertyName: 'id',
					description: 'Modal body id value'
				},
				{
					propertyName: 'padding',
					description: 'Modal body padding',
					options: []
				}
			]
		};

		return json;
	}

	getCSModalFooterDoc() {
		const json = {
			name: 'ModalFooter',
			properties: [
				{
					propertyName: 'align',
					description: 'Alignment of buttons',
					options: ['right', 'left', 'center']
				},
				{
					propertyName: 'id',
					description: 'Modal footer id value'
				}
			]
		};

		return json;
	}

	render() {
		const component = this.getCSModalDoc();
		const component2 = this.getCSModalHeaderDoc();
		const component3 = this.getCSModalBodyDoc();
		const component4 = this.getCSModalFooterDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} />
					<CSAlert variant="info" text="When using the CSModal component a div will be created with an id and class of cs-modal-root as a sibling of cs-app-wrapper. If you don't want the modal to render here you can manually add a div with the same id and class wherever you want and all modals will render there. Inspect an example modal for more information." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4]} />
				</div>
				<div className="prop-sidebar">
					<h3>Quick Links</h3>
					<PreviewLinks component={component} />
				</div>
			</>
		);
	}
}

export default CSModalPreview;
