import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

import CSAlert from '../../components/CSAlert';

interface CSAlertPreviewProps {
	component: React.ComponentType<any>;
}

class CSAlertPreview extends React.Component<CSAlertPreviewProps> {
	constructor(props: CSAlertPreviewProps) {
		super(props);
	}

	render() {
		const component = CSAlert.getDoc();
		return (
			<>
				<div className="preview-heading">
					<h1>{component.name}</h1>
					{component.usage ? <h2>{component.usage}</h2> : null}
				</div>

				{component.examples.map(example => (
					<div className={`property-section ${example.propName}`} key={example.propName}>
						<h2 className="property-name">{example.propName}</h2>
						<div key={example.customText}>
							<p className="info-text">{example.customText}</p>
							{example.variations.map((variation, i) => (
								<React.Fragment key={i}>
									{variation.variationName.map(chip => (
										<div key={chip} className="chip-label">{chip}</div>
									))}
									<div className="component-version">
										<div className="version-preview toast-preview">
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

				<div className="properties-table-wrapper">
					<h2 className="property-name">Properties list</h2>
					<h3 className="component-name">CSAlert</h3>
					<div className="properties-table">
						<div className="table-header">
							<div className="table-row">
								<div className="table-cell">Property name</div>
								<div className="table-cell">Description</div>
								<div className="table-cell">Options</div>
							</div>
						</div>
						<div className="table-body">
							{component.properties.map((prop, i) => (
								<div className="table-row" key={i}>
									<div className="table-cell">{prop.propertyName}</div>
									<div className="table-cell">{prop.description}</div>
									<div className="table-cell">
										{prop.options.map(option => (
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

export default CSAlertPreview;
