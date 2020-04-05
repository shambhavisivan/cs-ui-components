import React from 'react';
import jsxToString from 'jsx-to-string';
import PreviewHeading from '../PreviewHeading';
import PreviewProperties from '../PreviewProperties';
import PreviewTable from '../PreviewTable';
import PreviewLinks from '../PreviewLinks';

import {CSModal, CSModalHeader, CSModalBody, CSModalFooter, CSButton} from '@cloudsense/cs-ui-components';

class CSModalPreview extends React.Component {
	getCSModalDoc() {

		const json = {
			name: 'Modal',
			usage: 'Modals are used to display content in a layer above the app. This paradigm is used in cases such as the creation or editing of a record, as well as various types of messaging and wizards.',
			examples: [
				{
					propName: 'size',
					customText: '',
					variations: [
						{
							variationName: ['size="small"', 'closeButton={true}', 'align="left"'],
							string: '',
							component: (
								<CSModal size="small" closeButton>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="left">
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="medium"', 'closeButton={false}', 'align="right"'],
							string: '',
							component: (
								<CSModal size="medium" closeButton={false}>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="right">
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="large"', 'closeButton={true}', 'align="center"'],
							string: '',
							component: (
								<CSModal size="large" closeButton>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="center">
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						},
						{
							variationName: ['size="xlarge"', 'closeButton={false}', 'align="right"'],
							string: '',
							component: (
								<CSModal size="xlarge" closeButton={false}>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter align="right">
										<CSButton label="Default Button"/>
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						}
					]
				},
				{
					propName: 'className',
					customText: '',
					variations: [
						{
							string: '',
							component: (
								<CSModal size="small" closeButton className="custom-class">
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
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
								<CSModal size="small" style={{border: '2px solid hotpink'}}>
									<CSModalHeader title="Style example"/>
									<CSModalBody>
										<p>Sit nulla est ex deserunt exercitation anim occaecat.</p>
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Default Button"/>
									</CSModalFooter>
								</CSModal>
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
							string: '',
							component: (
								<CSModal size="small" closeButton>
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody padding="0">
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.
											<br/>
											<br/>
											Nostrud ullamco deserunt aute id consequat veniam
											incididunt duis in sint irure nisi. Mollit officia cillum
											Lorem ullamco minim nostrud elit officia tempor esse quis.
											Cillum sunt ad dolore quis aute consequat ipsum magna
											exercitation reprehenderit magna. Tempor cupidatat
											consequat elit dolor adipisicing.
										</p>
									</CSModalBody>
									<CSModalFooter>
										<CSButton label="Default Button"/>
										<CSButton label="Brand Button" btnStyle="brand"/>
									</CSModalFooter>
								</CSModal>
							)
						}
					]
				}
			],

			/* CSModal Properties Table */
			properties: [
				{
					propertyName: 'size',
					description: 'Modal size',
					options: ['small', 'medium', 'large', 'xlarge']
				},
				{
					propertyName: 'closeButton',
					description: 'Logic for close button visibility',
					options: ['false', 'true']
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
					options: []
				},
				{
					propertyName: 'onClose',
					description: 'Logic for onClick event',
					options: []
				},
				{
					propertyName: 'style',
					description: 'Add custom styles as inline css',
					options: []
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
					propertyName: 'title',
					description: 'Main header title',
					options: ['n/a']
				},
				{
					propertyName: 'subtitle',
					description: 'Secondary text content',
					options: ['n/a']
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
					propertyName: 'padding',
					description: 'Modal body padding',
					options: ['n/a']
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
					options: [
						'right',
						'left',
						'center'
					]
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
					<PreviewProperties name={component.name} examples={component.examples} />
					<PreviewTable name={component.name} properties={component.properties} />
					<PreviewTable name={component2.name} properties={component2.properties} alt />
					<PreviewTable name={component3.name} properties={component3.properties} alt />
					<PreviewTable name={component4.name} properties={component4.properties} alt />
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
