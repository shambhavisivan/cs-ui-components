import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import { CSModal, CSModalHeader, CSModalFooter } from 'cs-ui-components';
import CSComponentPreviewProps from '../CSComponentsList';

class CSModalPreview extends React.Component<CSComponentPreviewProps> {
	constructor(props: CSComponentPreviewProps) {
		super(props);
	}

	render() {

		const component = CSModal.getDoc();
		const component2 = CSModalHeader.getDoc();
		const component3 = CSModalFooter.getDoc();

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
											<SyntaxHighlighter className="code-snippet" language="jsx">{variation.string}</SyntaxHighlighter>
										</div>
									</div>
								</React.Fragment>
							))}
						</div>
					</div>
				))}

				<div className="table-wrapper properties-table-wrapper">
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
				<div className="table-wrapper properties-table-wrapper">
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
				<div className="table-wrapper properties-table-wrapper">
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