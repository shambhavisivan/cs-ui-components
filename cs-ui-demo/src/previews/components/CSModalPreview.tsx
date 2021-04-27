import React from 'react';
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
	visibleModal?: string;
	secondModalVisible: boolean;
	thirdModalVisible: boolean;
}

class CSModalPreview extends React.Component<{}, CSModalPreviewState> {
	state = {
		visibleModal: undefined,
		secondModalVisible: false,
		thirdModalVisible: false
	};

	openModal = (modalId: string) => {
		this.setState({ visibleModal: modalId });
	}

	closeModal = () => {
		this.setState({ visibleModal: undefined });
	}

	getModalDoc = () => ({
		name: 'Modal',
		usage: 'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.',
		accessible: 'yes',
		previews: [
			{
				name: 'Modal',
				examples: [
					{
						propName: 'animated',
						alert: {
							variant: 'warning',
							text: 'Right now, the animated prop defaults to false. However, the expected behaviour is for it to default to true. Due to backwards compatibility, that cannot be implement until changes are made on all products. Because of that, it is strongly recommended to leave this prop out until backwards compatibility is dropped.'
						},
						variations: [
							{
								primaryVariants: 'animated={false}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('animated')} />
									<CSModal visible={this.state.visibleModal === 'animated'}>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('animated')} />
								<CSModal visible={this.state.visibleModal === 'animated'}>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'closeButton',
						alert: {
							variant: 'info',
							text: 'This prop should be used together with the onClose prop.'
						},
						variations: [
							{
								primaryVariants: 'closeButton={true}',
								secondaryVariants: 'onClose={() => {}}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('closeButton')} />
									<CSModal
										visible={this.state.visibleModal === 'closeButton'}
										animated
										closeButton
										onClose={this.closeModal}
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('closeButton')} />
								<CSModal
									visible={this.state.visibleModal === 'closeButton'}
									animated
									closeButton
									onClose={this.closeModal}
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'loading',
						variations: [
							{
								primaryVariants: 'loading={true}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('loading')} />
									<CSModal
										visible={this.state.visibleModal === 'loading'}
										animated
										loading
										closeButton
										onClose={this.closeModal}
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('loading')} />
								<CSModal
									visible={this.state.visibleModal === 'loading'}
									animated
									loading
									closeButton
									onClose={this.closeModal}
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'loadingText',
						alert: {
							variant: 'info',
							text: 'This prop should be used together with the loading prop.'
						},
						variations: [
							{
								secondaryVariants: 'loading={true}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('loadingText')} />
									<CSModal
										visible={this.state.visibleModal === 'loadingText'}
										animated
										loading
										loadingText="Loading data..."
										closeButton
										onClose={this.closeModal}
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('loadingText')} />
								<CSModal
									visible={this.state.visibleModal === 'loadingText'}
									animated
									loading
									loadingText="Loading data..."
									closeButton
									onClose={this.closeModal}
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'onClose',
						alert: {
							variant: 'info',
							text: 'The onClose prop will be called when the Esc key is pressed, when the closeButton is visible and clicked or when the outside of the modal is clicked while outerClickClose is set to true.'
						},
						variations: [
							{
								secondaryVariants: 'closeButton={true}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('onClose')} />
									<CSModal
										visible={this.state.visibleModal === 'onClose'}
										animated
										closeButton
										onClose={this.closeModal}
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('onClose')} />
								<CSModal
									visible={this.state.visibleModal === 'onClose'}
									animated
									closeButton
									onClose={this.closeModal}
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'outerClickClose',
						alert: {
							variant: 'info',
							text: 'This prop should be used together with the onClose prop.'
						},
						variations: [
							{
								primaryVariants: 'outerClickClose={true}',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('outerClickClose')} />
									<CSModal
										visible={this.state.visibleModal === 'outerClickClose'}
										animated
										closeButton
										onClose={this.closeModal}
										outerClickClose
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('outerClickClose')} />
								<CSModal
									visible={this.state.visibleModal === 'outerClickClose'}
									animated
									closeButton
									onClose={this.closeModal}
									outerClickClose
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'size',
						variations: [
							{
								primaryVariants: 'size="auto"',
								quickLink: 'auto',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('auto')} />
									<CSModal visible={this.state.visibleModal === 'auto'} animated>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('auto')} />
								<CSModal visible={this.state.visibleModal === 'auto'} animated>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'size="xsmall"',
								quickLink: 'xsmall',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('xsmall')} />
									<CSModal
										visible={this.state.visibleModal === 'xsmall'}
										size="xsmall"
										animated
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
											Aliquid asperiores cum deleniti dignissimos error ex
											exercitationem harum in ipsam ipsum iste itaque magni molestias
											nam necessitatibus neque nisi nobis non nulla optio pariatur
											perferendis placeat quae, qui quis repudiandae saepe soluta
											tempora tenetur ullam vel vitae voluptas voluptates?
											Amet illum molestiae numquam optio, reiciendis rerum.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('xsmall')} />
								<CSModal
									visible={this.state.visibleModal === 'xsmall'}
									size="xsmall"
									animated
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
										Aliquid asperiores cum deleniti dignissimos error ex
										exercitationem harum in ipsam ipsum iste itaque magni molestias
										nam necessitatibus neque nisi nobis non nulla optio pariatur
										perferendis placeat quae, qui quis repudiandae saepe soluta
										tempora tenetur ullam vel vitae voluptas voluptates?
										Amet illum molestiae numquam optio, reiciendis rerum.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'size="small"',
								quickLink: 'small',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('small')} />
									<CSModal
										visible={this.state.visibleModal === 'small'}
										size="small"
										animated
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
											Aliquid asperiores cum deleniti dignissimos error ex
											exercitationem harum in ipsam ipsum iste itaque magni molestias
											nam necessitatibus neque nisi nobis non nulla optio pariatur
											perferendis placeat quae, qui quis repudiandae saepe soluta
											tempora tenetur ullam vel vitae voluptas voluptates?
											Amet illum molestiae numquam optio, reiciendis rerum.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('small')} />
								<CSModal
									visible={this.state.visibleModal === 'small'}
									size="small"
									animated
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
										Aliquid asperiores cum deleniti dignissimos error ex
										exercitationem harum in ipsam ipsum iste itaque magni molestias
										nam necessitatibus neque nisi nobis non nulla optio pariatur
										perferendis placeat quae, qui quis repudiandae saepe soluta
										tempora tenetur ullam vel vitae voluptas voluptates?
										Amet illum molestiae numquam optio, reiciendis rerum.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'size="medium"',
								quickLink: 'medium',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('medium')} />
									<CSModal
										visible={this.state.visibleModal === 'medium'}
										size="medium"
										animated
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
											Aliquid asperiores cum deleniti dignissimos error ex
											exercitationem harum in ipsam ipsum iste itaque magni molestias
											nam necessitatibus neque nisi nobis non nulla optio pariatur
											perferendis placeat quae, qui quis repudiandae saepe soluta
											tempora tenetur ullam vel vitae voluptas voluptates?
											Amet illum molestiae numquam optio, reiciendis rerum.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('medium')} />
								<CSModal
									visible={this.state.visibleModal === 'medium'}
									size="medium"
									animated
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
										Aliquid asperiores cum deleniti dignissimos error ex
										exercitationem harum in ipsam ipsum iste itaque magni molestias
										nam necessitatibus neque nisi nobis non nulla optio pariatur
										perferendis placeat quae, qui quis repudiandae saepe soluta
										tempora tenetur ullam vel vitae voluptas voluptates?
										Amet illum molestiae numquam optio, reiciendis rerum.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'size="large"',
								quickLink: 'large',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('large')} />
									<CSModal
										visible={this.state.visibleModal === 'large'}
										size="large"
										animated
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
											Aliquid asperiores cum deleniti dignissimos error ex
											exercitationem harum in ipsam ipsum iste itaque magni molestias
											nam necessitatibus neque nisi nobis non nulla optio pariatur
											perferendis placeat quae, qui quis repudiandae saepe soluta
											tempora tenetur ullam vel vitae voluptas voluptates?
											Amet illum molestiae numquam optio, reiciendis rerum.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('large')} />
								<CSModal
									visible={this.state.visibleModal === 'large'}
									size="large"
									animated
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
										Aliquid asperiores cum deleniti dignissimos error ex
										exercitationem harum in ipsam ipsum iste itaque magni molestias
										nam necessitatibus neque nisi nobis non nulla optio pariatur
										perferendis placeat quae, qui quis repudiandae saepe soluta
										tempora tenetur ullam vel vitae voluptas voluptates?
										Amet illum molestiae numquam optio, reiciendis rerum.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'size="xlarge"',
								quickLink: 'xlarge',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('xlarge')} />
									<CSModal
										visible={this.state.visibleModal === 'xlarge'}
										size="xlarge"
										animated
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet,
											consectetur adipisicing elit. Minima, vero?
											Aliquid asperiores cum deleniti dignissimos error ex
											exercitationem harum in ipsam ipsum iste itaque magni molestias
											nam necessitatibus neque nisi nobis non nulla optio pariatur
											perferendis placeat quae, qui quis repudiandae saepe soluta
											tempora tenetur ullam vel vitae voluptas voluptates?
											Amet illum molestiae numquam optio, reiciendis rerum.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('xlarge')} />
								<CSModal
									visible={this.state.visibleModal === 'xlarge'}
									size="xlarge"
									animated
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet,
										consectetur adipisicing elit. Minima, vero?
										Aliquid asperiores cum deleniti dignissimos error ex
										exercitationem harum in ipsam ipsum iste itaque magni molestias
										nam necessitatibus neque nisi nobis non nulla optio pariatur
										perferendis placeat quae, qui quis repudiandae saepe soluta
										tempora tenetur ullam vel vitae voluptas voluptates?
										Amet illum molestiae numquam optio, reiciendis rerum.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'style',
						variations: [
							{
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('style')} />
									<CSModal
										visible={this.state.visibleModal === 'style'}
										animated
										style={{ border: '2px solid var(--custom-br)' }}
									>
										<CSModalHeader title="Title" subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('style')} />
								<CSModal
									visible={this.state.visibleModal === 'style'}
									animated
									style={{ border: '2px solid var(--custom-br)' }}
								>
									<CSModalHeader title="Title" subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'id | class',
						variations: [
							{
								primaryVariants: [
									'id="custom-id"',
									'className="custom-class"'
								],
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('class')} />
									<CSModal
										visible={this.state.visibleModal === 'class'}
										animated
										id="custom-id"
										className="custom-class"
									>
										<CSModalHeader
											title="Title"
											subtitle="Subtitle"
											id="custom-header-id"
											className="custom-header-class"
										/>
										<CSModalBody id="custom-boday-id" className="custom-body-class">
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter id="custom-footer-id" className="custom-footer-class">
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('class')} />
								<CSModal
									visible={this.state.visibleModal === 'class'}
									animated
									id="custom-id"
									className="custom-class"
								>
									<CSModalHeader
										title="Title"
										subtitle="Subtitle"
										id="custom-header-id"
										className="custom-header-class"
									/>
									<CSModalBody id="custom-boday-id" className="custom-body-class">
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter id="custom-footer-id" className="custom-footer-class">
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'children',
						description: 'CSModal is designed to work with CSModalHeader, CSModalBody and CSModalFooter as children, which then support custom children. CSModalBody and CSModalFooter only render the children, while CSModalHeader renders the title and the subtitle if they exist and then the children.',
						variations: [
							{
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('children')} />
									<CSModal visible={this.state.visibleModal === 'children'} animated>
										<CSModalHeader title="Title" subtitle="Subtitle">
											<CSButton label="Button in Header" />
										</CSModalHeader>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
											<CSButton label="Button in Body" />
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal Button in Footer" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('children')} />
								<CSModal visible={this.state.visibleModal === 'children'} animated>
									<CSModalHeader title="Title" subtitle="Subtitle">
										<CSButton label="Button in Header" />
									</CSModalHeader>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
										<CSButton label="Button in Body" />
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal Button in Footer" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'Multiple Modals',
						variations: [
							{
								component: <>
									<CSButton label="Open First Modal" onClick={() => this.openModal('first')} />
									<CSModal
										visible={this.state.visibleModal === 'first'}
										animated
										size="medium"
										closeButton
										onClose={this.closeModal}
									>
										<CSModalHeader title="Title" subtitle="Subtitle"/>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
											<CSButton
												btnStyle="brand"
												label="Open Second Modal"
												onClick={() => this.setState({ secondModalVisible: true })}
											/>
										</CSModalFooter>
									</CSModal>
									<CSModal
										visible={this.state.secondModalVisible}
										animated
										size="small"
										closeButton
										onClose={() => this.setState({ secondModalVisible: false })}
									>
										<CSModalHeader title="Title" subtitle="Subtitle"/>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton
												label="Close Modal"
												onClick={() => this.setState({ secondModalVisible: false })}
											/>
											<CSButton
												btnStyle="brand"
												label="Open Third Modal"
												onClick={() => this.setState({ thirdModalVisible: true })}
											/>
										</CSModalFooter>
									</CSModal>
									<CSModal
										visible={this.state.thirdModalVisible}
										animated
										size="xsmall"
										closeButton
										onClose={() => this.setState({ thirdModalVisible: false })}
									>
										<CSModalHeader title="Title" subtitle="Subtitle"/>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton
												label="Close Modal"
												onClick={() => this.setState({ thirdModalVisible: false })}
											/>
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open First Modal" onClick={() => this.openModal('first')} />
								<CSModal
									visible={this.state.visibleModal === 'first'}
									animated
									size="medium"
									closeButton
									onClose={this.closeModal}
								>
									<CSModalHeader title="Title" subtitle="Subtitle"/>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
										<CSButton
											btnStyle="brand"
											label="Open Second Modal"
											onClick={() => this.setState({ secondModalVisible: true })}
										/>
									</CSModalFooter>
								</CSModal>
								<CSModal
									visible={this.state.secondModalVisible}
									animated
									size="small"
									closeButton
									onClose={() => this.setState({ secondModalVisible: false })}
								>
									<CSModalHeader title="Title" subtitle="Subtitle"/>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton
											label="Close Modal"
											onClick={() => this.setState({ secondModalVisible: false })}
										/>
										<CSButton
											btnStyle="brand"
											label="Open Third Modal"
											onClick={() => this.setState({ thirdModalVisible: true })}
										/>
									</CSModalFooter>
								</CSModal>
								<CSModal
									visible={this.state.thirdModalVisible}
									animated
									size="xsmall"
									closeButton
									onClose={() => this.setState({ thirdModalVisible: false })}
								>
									<CSModalHeader title="Title" subtitle="Subtitle"/>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton
											label="Close Modal"
											onClick={() => this.setState({ thirdModalVisible: false })}
										/>
									</CSModalFooter>
								</CSModal>`
							}
						]
					}
				]
			}, {
				name: 'Modal Header',
				examples: [
					{
						propName: 'subtitle',
						variations: [
							{
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('subtitle')} />
									<CSModal visible={this.state.visibleModal === 'subtitle'} animated>
										<CSModalHeader subtitle="Subtitle" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('subtitle')} />
								<CSModal visible={this.state.visibleModal === 'subtitle'} animated>
									<CSModalHeader subtitle="Subtitle" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'title',
						variations: [
							{
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('title')} />
									<CSModal visible={this.state.visibleModal === 'title'} animated>
										<CSModalHeader title="Title" />
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('title')} />
								<CSModal visible={this.state.visibleModal === 'title'} animated>
									<CSModalHeader title="Title" />
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}
				]
			}, {
				name: 'Modal Body',
				examples: [
					{
						propName: 'minHeight',
						variations: [
							{
								primaryVariants: 'minHeight="10rem"',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('minHeight')} />
									<CSModal visible={this.state.visibleModal === 'minHeight'} animated>
										<CSModalHeader title="Title" />
										<CSModalBody minHeight="10rem">
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('minHeight')} />
								<CSModal visible={this.state.visibleModal === 'minHeight'} animated>
									<CSModalHeader title="Title" />
									<CSModalBody minHeight="10rem">
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}, {
						propName: 'padding',
						variations: [
							{
								primaryVariants: 'padding="0"',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('padding')} />
									<CSModal visible={this.state.visibleModal === 'padding'} animated>
										<CSModalHeader title="Title" />
										<CSModalBody padding="0">
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('padding')} />
								<CSModal visible={this.state.visibleModal === 'padding'} animated>
									<CSModalHeader title="Title" />
									<CSModalBody padding="0">
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}
				]
			}, {
				name: 'Modal Footer',
				examples: [
					{
						propName: 'align',
						variations: [
							{
								primaryVariants: 'align="right"',
								quickLink: 'right',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('right')} />
									<CSModal visible={this.state.visibleModal === 'right'} animated>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter>
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('right')} />
								<CSModal visible={this.state.visibleModal === 'right'} animated>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'align="center"',
								quickLink: 'center',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('center')} />
									<CSModal visible={this.state.visibleModal === 'center'} animated>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter align="center">
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('center')} />
								<CSModal visible={this.state.visibleModal === 'center'} animated>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter align="center">
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}, {
								primaryVariants: 'align="left"',
								quickLink: 'left',
								component: <>
									<CSButton label="Open Modal" onClick={() => this.openModal('left')} />
									<CSModal visible={this.state.visibleModal === 'left'} animated>
										<CSModalBody>
											Lorem ipsum dolor sit amet.
										</CSModalBody>
										<CSModalFooter align="left">
											<CSButton label="Close Modal" onClick={this.closeModal} />
										</CSModalFooter>
									</CSModal>
								</>,
								code: `<CSButton label="Open Modal" onClick={() => this.openModal('left')} />
								<CSModal visible={this.state.visibleModal === 'left'} animated>
									<CSModalBody>
										Lorem ipsum dolor sit amet.
									</CSModalBody>
									<CSModalFooter align="left">
										<CSButton label="Close Modal" onClick={this.closeModal} />
									</CSModalFooter>
								</CSModal>`
							}
						]
					}
				]
			}
		],
		properties: [
			{
				name: 'children',
				customTypes: [{
					name: 'CSModalChildren',
					types: ['<CSModalHeader />', '<CSModalBody />', '<CSModalFooter />', 'any']
				}],
				description: 'This component is designed to support CSModalHeader, CSModalBody and CSModalFooter as children.'
			}, {
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
							'`<header>`',
							'`<footer>`',
							'Modal title is `<h3>`',
							'Modal subtitle is `<h4>`'
						],
						properties: [
							'`aria-modal`',
							'`role="dialog"`',
							'`aria-describedby` - semantically connects title with parent modal div containing role, which is read once modal is opened'
						],
						styling: [
							'Color contrast ratio > 4.5'
						],
						keyboardOperability: [
							'Logic for focus management to move on modal when it is opened and to cycle within it until closed',
							'Close button is `<button>` and a first child - allows keyboard focus',
							'`Esc` - close modal'
						]
					}
				]
			}
		]
	})

	getModalHeaderDoc = () => ({
		name: 'Modal Header',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the modal header.'
			}, {
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
	})

	getModalBodyDoc = () => ({
		name: 'Modal Body',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the modal body wrapper.'
			}, {
				name: 'id',
				types: ['string'],
				description: 'Set the ID for the modal body.'
			}, {
				name: 'minHeight',
				types: ['string'],
				default: '\'0\'',
				description: 'Set custom min-height for the modal body. (eg. 100px, 2rem, 50vh, etc.)'
			}, {
				name: 'padding',
				types: ['string'],
				default: '\'1rem\'',
				description: 'Set custom padding for the modal body. (eg. 0, 10px, 2rem, etc.)'
			}, {
				name: '[key: string]',
				types: ['any'],
				description: 'Spreads the rest of the props to the modal body div.'
			}
		]
	})

	getModalFooterDoc = () => ({
		name: 'Modal Footer',
		properties: [
			{
				name: 'children',
				types: ['any'],
				description: 'This component supports custom content passed as children.'
			}, {
				name: 'className',
				types: ['string'],
				description: 'Apply custom CSS classes to the modal footer.'
			}, {
				name: 'align',
				customTypes: [{
					name: 'CSModalFooterAlign',
					types: ['\'right\'', '\'center\'', '\'left\'']
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
	})

	render() {
		const component = this.getModalDoc();
		const component2 = this.getModalHeaderDoc();
		const component3 = this.getModalBodyDoc();
		const component4 = this.getModalFooterDoc();

		return (
			<>
				<div className="preview-section-wrapper">
					<PreviewHeading name={component.name} usage={component.usage} accessible={component.accessible} />
					<CSAlert
						variant="info"
						text="When using the CSModal component a div will be created with an id and class of cs-modal-root as a sibling of cs-app-wrapper. If you don't want the modal to render here you can manually add a div with the same id and class wherever you want and all modals will render there. Inspect an example modal for more information."
						styleFormat="scoped"
					/>
					<PreviewProperties {...component} />
					<PreviewTable components={[component, component2, component3, component4]} />
					<PreviewAccessibility components={[component]} />
				</div>
				<PreviewLinks {...component} />
			</>
		);
	}
}

export default CSModalPreview;
