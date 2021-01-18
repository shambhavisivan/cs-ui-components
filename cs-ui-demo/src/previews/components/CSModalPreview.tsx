import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewAccessibility from '../PreviewAccessibility';
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
	visibleModal: string | undefined;
	secondModalVisible: boolean;
	thirdModalVisible: boolean;
}

class CSModalPreview extends React.Component<{}, CSModalPreviewState> {
	state = {
		visibleModal: undefined,
		secondModalVisible: false,
		thirdModalVisible: false
	};

	getCSModalDoc() {
		const json = {
			name: 'Modal',
			usage:
				'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.',
			accessible: 'partially',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['auto'],
							quickLink: 'auto',
							variationText: ['closeButton={true}'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'auto' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'auto'}
										size="auto"
										animated
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
									</CSModal>
								</div>
							)
						},
						{
							variationName: ['xsmall'],
							quickLink: 'xsmall',
							variationText: ['closeButton={true}'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'xsmall' })}
									/>
									<CSModal
										size="xsmall"
										visible={this.state.visibleModal === 'xsmall'}
										animated
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
									</CSModal>
								</div>
							)
						},
						{
							variationName: ['small'],
							quickLink: 'small',
							variationText: ['closeButton={true}', 'align="left"'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'small' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'small'}
										size="small"
										animated
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
												onClick={() => this.setState({ secondModalVisible: true })}
												btnStyle="brand"
											/>
											<CSButton
												label="Close"
												onClick={() => this.setState({ visibleModal: undefined })}
											/>
										</CSModalFooter>
									</CSModal>
									<CSModal
										visible={this.state.secondModalVisible}
										size="xsmall"
										animated
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
											<CSButton
												label="Open Modal"
												onClick={() => this.setState({ thirdModalVisible: true })}
												btnStyle="brand"
											/>
											<CSButton
												label="Close"
												onClick={() => this.setState({ secondModalVisible: false })}
											/>
										</CSModalFooter>
									</CSModal>
									<CSModal
										size="xsmall"
										visible={this.state.thirdModalVisible}
										animated
										closeButton
										onClose={() => this.setState({ thirdModalVisible: false })}
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
								</div>
							)
						},
						{
							variationName: ['medium'],
							quickLink: 'medium',
							variationText: ['closeButton={false}', 'align="right"'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'medium' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'medium'}
										animated
										size="medium"
										closeButton={false}
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
											<CSButton
												label="Close"
												btnStyle="brand"
												onClick={() =>
													this.setState({ visibleModal: undefined })
												}
											/>
										</CSModalFooter>
									</CSModal>
								</div>
							)
						},
						{
							variationName: ['large'],
							quickLink: 'large',
							variationText: ['closeButton={true}', 'align="center"'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'large' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'large'}
										animated
										size="large"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
								</div>
							)
						},
						{
							variationName: ['xlarge'],
							quickLink: 'xlarge',
							variationText: ['closeButton={true}', 'align="right"'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'xlarge' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'xlarge'}
										animated
										size="xlarge"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'padding' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'padding'}
										animated
										size="small"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
								</div>
							)
						}
					]
				},
				{
					propName: 'closeButton',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							quickLink: 'true',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'closeButton' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'closeButton'}
										animated
										size="small"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
								</div>
							)
						}
					]
				},
				{
					propName: 'onClose',
					customText: '',
					variations: [
						{
							variationText: ['closeButton={true}'],
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'onClose' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'onClose'}
										animated
										size="small"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'id' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'id'}
										animated
										size="small"
										closeButton
										id="id"
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'style' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'style'}
										animated
										size="small"
										style={{ border: '2px solid hotpink' }}
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'loading' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'loading'}
										animated
										size="medium"
										loading
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'loadingText' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'loadingText'}
										animated
										size="medium"
										loading
										loadingText="Cloning configurations..."
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'clickOutside' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'clickOutside'}
										animated
										size="small"
										closeButton
										id="id"
										onClose={() => this.setState({ visibleModal: undefined })}
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
								</div>
							)
						}
					]
				},
				{
					propName: 'animated',
					customText: '',
					alert: {
						variant: 'warning',
						text: 'Right now, the animated prop defaults to false. However, the expected behaviour is for it to default to true. Due to backwards compatibility, that cannot be implement until changes are made on all products. Because of that, it is strongly recommended to leave this prop out until backwards compatibility is dropped.'
					},
					variations: [
						{
							variationName: ['false'],
							quickLink: 'false',
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'animated' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'animated'}
										animated={false}
										size="small"
										closeButton
										onClose={() => this.setState({ visibleModal: undefined })}
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
							component: (
								<div>
									<CSButton
										label="Open Modal"
										onClick={() => this.setState({ visibleModal: 'className' })}
									/>
									<CSModal
										visible={this.state.visibleModal === 'className'}
										animated
										size="small"
										closeButton
										className="custom-class"
										onClose={() => this.setState({ visibleModal: undefined })}
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
								</div>
							)
						}
					]
				}
			],
			properties: [
				{
					propertyName: 'animated',
					description: 'Set false to disable animations on mount/unmout. This defaults to false, but it will default to true after the component drops support for conditional rendering.',
					options: ['false', 'true']
				},
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
					options: ['auto', 'xsmall', 'small', 'medium', 'large', 'xlarge']
				},
				{
					propertyName: 'style',
					description: 'Add custom styles as inline css'
				},
				{
					propertyName: 'visible',
					description: 'Controls whether or not to render the modal. This defaults to true, but it will be a required prop after the component drops support for conditional rendering.',
					options: ['true', 'false']
				},
				{
					propertyName: 'mounted',
					description: 'Used to rerender the modal after it has been mounted and apply animation classes',
					helperPropInComponents: [
						'CSAnimation'
					]
				},
				{
					propertyName: 'setMounted',
					description: 'Triggered on componentDidMount to set mounted to true',
					helperPropInComponents: [
						'CSAnimation'
					]
				}
			],
			accessibility: [
				{
					criteriaList: [
						'1.4.4',
						'2.1.1',
						'2.1.2',
						'3.2.1',
						'4.1.2'
					],
					requirements: [
						{
							structure: [
								'HTML <header> and <footer>',
								'Modal title is HTML <h3>',
								'Modal subtitle is HTML <h4>'
							],
							properties: [
								'aria-modal',
								'role="dialog"'
							],
							styling: [
								'Color contrast ratio > 4.5'
							],
							keyboardOperability: [
								'Logic for focus management to move on modal when it is opened and to cycle within it until closed',
								'Close button is <button> and a first child - allows keyboard focus',
								'(missing aria-labelledby)'
							]
						}
					]
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
				},
				{
					propertyName: 'titleId',
					description: 'Used to establish relationship between modal title and \'dialog\' wrapper',
					helperPropInComponents: [
						'CSModal'
					]
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
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert variant="info" text="When using the CSModal component a div will be created with an id and class of cs-modal-root as a sibling of cs-app-wrapper. If you don't want the modal to render here you can manually add a div with the same id and class wherever you want and all modals will render there. Inspect an example modal for more information." />
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable components={[component, component2, component3, component4]} />
					<PreviewAccessibility components={[component]} />
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
