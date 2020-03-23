import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSMainHeader, CSMainHeaderLeft, CSMainHeaderRight, CSMainHeaderIcon, CSButton, CSIcon} from '@cloudsense/cs-ui-components';

class CSMainHeaderPreview extends React.Component {
	getCSMainHeaderDoc() {

		const json = {
			name: 'Main Header',
			usage: 'Main Headers are used at the top of several page types. They are comprised of multiple components.',
			examples: [
				{
					propName: 'color',
					customText: '',
					variations: [
						{
							variationName: ['neutral'],
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a white header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['brand'],
							string: '',
							component:
								<CSMainHeader color="brand">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a blue header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['error'],
							string: '',
							component:
								<CSMainHeader
									color="error"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a red header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['info'],
							string: '',
							component:
								<CSMainHeader
									color="info"
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a grey header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnType="transparent" btnStyle="outline"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'maxWidth',
					variations: [
						{
							variationName: ['720px'],
							string: '',
							component:
								<CSMainHeader maxWidth="720px">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 720px"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['80rem'],
							string: '',
							component:
								<CSMainHeader maxWidth="80rem">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 80rem"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['100%'],
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This header has max width 100%"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'sticky',
					customText: '',
					variations: [
						{
							variationName: ['true'],
							string: '',
							component:
								<CSMainHeader>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						},
						{
							variationName: ['false'],
							string: '',
							component:
								<CSMainHeader
									color="neutral"
									sticky={false}
								>
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is not a sticky header"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'className',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSMainHeader className="custom-class">
									<CSMainHeaderIcon>
										<CSIcon name="emoji"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a title"
										subtitle="This is a subtitle"
									/>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				},
				{
					propName: 'custom',
					customText: 'Want to add buttons or other features to the header? Just add them as child components.',
					variations: [
						{
							variationName: ['Add custom buttons'],
							string: '',
							component:
								<CSMainHeader maxWidth="100%">
									<CSMainHeaderIcon>
										<CSButton btnType="transparent" btnStyle="brand" iconName="back" iconDisplay="icon-only"/>
									</CSMainHeaderIcon>
									<CSMainHeaderLeft
										title="This is a custom header"
										subtitle="This is a subtitle"
									>
										<CSButton label="Back to basket" iconName="reply"/>
									</CSMainHeaderLeft>
									<CSMainHeaderRight>
										<CSButton label="Button 1"/>
										<CSButton label="Button 2" btnStyle="brand"/>
									</CSMainHeaderRight>
								</CSMainHeader>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'color',
					description: 'Background color',
					options: [
						'neutral',
						'brand',
						'error',
						'info'
					]
				},
				{
					propertyName: 'maxWidth',
					description: 'Max width of inner wrapper',
					options: [
						'Examples',
						'720px',
						'80rem',
						'100%'
					]
				},
				{
					propertyName: 'sticky',
					description: 'Logic for sticky position',
					options: [
						'true',
						'false'
					]
				},
				{
					propertyName: 'className',
					description: 'For implementing custom class to component',
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

	getCSMainHeaderLeftDoc() {
		const json = {
			name: 'MainHeaderLeft',
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
		const component = this.getCSMainHeaderDoc();
		const component2 = this.getCSMainHeaderLeftDoc();

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
										<div className="version-preview header-preview">
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
			</>
		);
	}
}

export default CSMainHeaderPreview;
