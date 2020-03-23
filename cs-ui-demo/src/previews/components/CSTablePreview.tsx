import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import jsxToString from 'jsx-to-string';

import {CSTable, CSTableHeader, CSTableBody, CSTableRow, CSTableCell, CSButton} from '@cloudsense/cs-ui-components';

class CSTablePreview extends React.Component {
	getCSTableDoc() {

		const json = {
			name: 'Table',
			usage: 'Tables are an enhanced version of an HTML table and are used to display tabular data.',
			examples: [
				{
					propName: '',
					customText: '',
					variations: [
						{
							variationName: ['n/a'],
							string: '',
							component:
								<CSTable className="custom-class">
									<CSTableHeader>
										<CSTableCell
											title="Header Item 1"
											grow={2}
										/>
										<CSTableCell
											title="Header Item 2"
											grow={1}
										/>
										<CSTableCell
											title="Header Item 3"
											grow={1}
										/>
										<CSTableCell
											title="Button Column"
											maxWidth="100px"
										/>
									</CSTableHeader>
									<CSTableBody>
										<CSTableRow>
											<CSTableCell
												title="Body Item 1"
												grow={2}
											/>
											<CSTableCell
												title="Body Item 2"
												grow={1}
											/>
											<CSTableCell
												title="Body Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
										<CSTableRow>
											<CSTableCell
												title="Second Row Item 1"
												grow={2}
											/>
											<CSTableCell
												title="Second Row Item 2"
												grow={1}
											/>
											<CSTableCell
												title="Second Row Item 3"
												grow={1}
											/>
											<CSTableCell
												maxWidth="100px"
											>
												<CSButton
													btnType="default"
													iconName="emoji"
													iconDisplay="icon-only"
												/>
											</CSTableCell>
										</CSTableRow>
									</CSTableBody>
								</CSTable>
						}
					]
				}
			],

			properties: [
				{
					propertyName: 'title',
					description: 'Text content of cell',
					options: []
				},
				{
					propertyName: 'grow',
					description: 'Flex grow value for cell',
					options: []
				},
				{
					propertyName: 'maxWidth',
					description: 'Max width value for cell',
					options: [
						'e.g.',
						'100px',
						'4rem'
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

	render() {
		const component = this.getCSTableDoc();

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
										<div className="version-preview table-preview">
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
			</>
		);
	}
}

export default CSTablePreview;
