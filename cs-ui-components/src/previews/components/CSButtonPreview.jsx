import React from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

import CSButton from '../../components/CSButton.jsx';

class CSButtonPreview extends React.Component {
	constructor(props) {
		super(props);
		this.component = CSButton.getDoc();
	}

	render() {

		return (
			<>
				{this.component.examples.map((example) => (
					<div key={example.propName}>
						<h2 className="property-name">{example.propName}</h2>
						{example.variations.map((variation) => (
							<React.Fragment key={variation.variationName}>
								{variation.variationName.map((chip) => (
									<div key={chip} className="chip-label">{chip}</div>
								))}
								<div className="component-version">
									<div className="version-preview">
										{variation.component}
									</div>
									<div className="version-description">
										<SyntaxHighlighter className="code-snippet" language='jsx'>{variation.string}</SyntaxHighlighter>
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
				))}

				<h2 className="property-name">Properties list</h2>
				<h3 className="component-name">{this.component.name}</h3>
				<div className="properties-table">
					<div className="table-header">
						<div className="table-row">
							<div className="table-cell">Property name</div>
							<div className="table-cell">Description</div>
							<div className="table-cell">Options</div>
						</div>
					</div>
					<div className="table-body">
						{Object.keys(this.component.properties).map((prop, i) => (
							<div className="table-row" key={i}>
								<div className="table-cell">{prop}</div>
								<div className="table-cell">{this.component.properties[prop].description}</div>
								<div className="table-cell">
									{this.component.properties[prop].options && this.component.properties[prop].options.map((option) => (
										<span className="prop-option" key={option}>{option}</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</>
		);
	}
}

export default CSButtonPreview;