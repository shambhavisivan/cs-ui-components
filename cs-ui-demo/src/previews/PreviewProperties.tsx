import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';

export interface PreviewPropertiesProps {
	examples: any;
	name: string;
}

class PreviewProperties extends React.Component<PreviewPropertiesProps> {
	render() {
		return (
			<>
				{this.props.examples.map((example: any) => (
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
										<div className={this.props.name ? `${this.props.name.replace(/\s+/g, '-').toLowerCase()}-preview version-preview` : 'version-preview'}>
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
			</>
		);
	}
}

export default PreviewProperties;
