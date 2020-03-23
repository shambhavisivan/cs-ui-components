import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSModal, CSModalHeader, CSModalBody, CSModalFooter, CSButton} from '@cloudsense/cs-ui-components';

class CSModalPreview extends React.Component {
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
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
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
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
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
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
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
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
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
							variationName: ['n/a'],
							string: '',
							component: (
								<CSModal size="small" closeButton className="custom-class">
									<CSModalHeader
										title="This is a test heading"
										subtitle="This is a test subtitle"
									/>
									<CSModalBody>
										<p>
											Sit nulla est ex deserunt exercitation anim occaecat.{' '}
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

	render() {

		const component = this.getCSModalDoc();
		const component2 = this.getCSModalHeaderDoc();
		const component3 = this.getCSModalFooterDoc();

		return (
			<>
				<div className="preview-heading">
					<h1>{component.name}</h1>
					{component.usage ? <h2>{component.usage}</h2> : null}
				</div>

				{component.examples.map((example: any) => (
					<div className={`property-section ${example.propName}`} key={example.propName}>
						<h2 className="property-name">{example.propName}</h2>
						<div key={example.customText}>
							<p className="info-text">{example.customText}</p>
							{example.variations.map((variation: any, i: any) => (
								<React.Fragment key={i}>
									{variation.variationName.map((chip: any) => (
										<div key={chip} className="chip-label">{chip}</div>
									))}
									<div className="component-version">
										<div className="version-preview modal-preview">
											{variation.component}
										</div>
										<div className="version-description">
											<SyntaxHighlighter className="code-snippet"
												language="jsx">{variation.string}</SyntaxHighlighter>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				))}

				<div className="table-wrapper">
					<h2 className="property-name">Properties list</h2>
					<h3 className="component-name">{component.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component.properties.map((prop: any, i: any) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map((option: any) => (
											<span className="prop-option" key={option}>{option}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="table-wrapper table-wrapper-alt">
					<h3 className="component-name">{component2.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component2.properties.map((prop: any, i: any) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map((option: any) => (
											<span className="prop-option" key={option}>{option}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="table-wrapper table-wrapper-alt">
					<h3 className="component-name">{component3.name}</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component3.properties.map((prop: any, i: any) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map((option: any) => (
											<span className="prop-option" key={option}>{option}</span>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CSModalPreview;
