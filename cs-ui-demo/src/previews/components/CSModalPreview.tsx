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
					name: 'animated',
					types: ['boolean'],
					default: 'false',
					description: 'Disable animations/transitions. This prop is obsolete and will soon be removed. Do not use it.'
				}, {
					name: 'className',
					types: ['string'],
					description: 'Apply custom CSS classes to the modal wrapper.'
				}, {
					name: 'closeButton',
					types: ['boolean'],
					default: 'false',
					description: 'Show the close button.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the modal.'
				}, {
					name: 'loading',
					types: ['boolean'],
					default: 'false',
					description: 'Show the loading spinner and mute the content.'
				}, {
					name: 'loadingText',
					types: ['string'],
					description: 'Set which text to show while the loading state is on.'
				}, {
					name: 'onClose',
					types: ['(event) => void'],
					description: 'Handler method for closing the modal.'
				}, {
					name: 'outerClickClose',
					types: ['boolean'],
					default: 'false',
					description: 'Control whether the modal should be closed on outside clicks.'
				}, {
					name: 'size',
					customTypes: [{
						name: 'CSModalSize',
						types: [
							'\'auto\'',
							'\'xsmall\'',
							'\'small\'',
							'\'medium\'',
							'\'large\'',
							'\'xlarge\''
						]
					}],
					default: '\'auto\'',
					description: 'Set the modal size.'
				}, {
					name: 'style',
					types: ['object'],
					description: 'Add custom styles as inline css.'
				}, {
					name: 'visible',
					types: ['boolean'],
					default: 'true',
					description: 'Control whether or not to render the modal. This prop will soon change its behaviour. Please treat it as required.'
				}, {
					name: 'mounted',
					required: 'CSUnmountDelay',
					types: ['boolean'],
					description: 'Enforces transition logic.'
				}, {
					name: 'setMounted',
					required: 'CSUnmountDelay',
					types: ['() => void'],
					description: 'Manages the mounted prop.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the modal overlay div.'
				}
			],
			accessibility: [
				{
					criterionList: [
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
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the modal header.'
				}, {
					name: 'subtitle',
					types: ['string'],
					description: 'Set a subtitle for the modal header.'
				}, {
					name: 'title',
					types: ['string'],
					description: 'Set a title for the modal header.'
				}, {
					name: 'titleId',
					required: 'CSModal',
					types: ['string'],
					description: 'Establish a relationship between modal title and the dialog wrapper.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the header tag.'
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
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the modal body.'
				}, {
					name: 'padding',
					types: ['string'],
					description: 'Set custom padding for the modal body.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the modal body div.'
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
					name: 'align',
					customTypes: [{
						name: 'CSModalFooterAlign',
						types: ['\'right\'', '\'left\'', '\'center\'']
					}],
					default: '\'right\'',
					description: 'Align the modal footer buttons.'
				}, {
					name: 'id',
					types: ['string'],
					description: 'Set the ID for the modal footer.'
				}, {
					name: '[key: string]',
					types: ['any'],
					description: 'Spreads the rest of the props to the footer tag.'
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
