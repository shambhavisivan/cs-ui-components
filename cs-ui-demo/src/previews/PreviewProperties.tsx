import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {CSAlert} from '@cloudsense/cs-ui-components';

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
						<h2 className="property-name" id={`${this.props.name}-${example.propName}`}>{example.propName}</h2>
						<div key={example.customText}>
							{example.customText ? <p className="info-text">{example.customText}</p> : null}
							{example.alert &&
								<CSAlert
									variant={example.alert.variant}
									text={example.alert.text}
									styleFormat="scoped"
								/>
							}
							{example.variations.map((variation: any, i: any) => (
								<React.Fragment key={i}>
									{variation.variationName &&
										variation.variationName.map((chip: any) => (
											<div key={chip} id={`${this.props.name}-${example.propName}-${variation.quickLink}`}className="chip-label">{chip}</div>
										))
									}
									{variation.variationText ? (
										Array.isArray(variation.variationText) ?
											variation.variationText.map((chip2: any) => (
												<div key={chip2} className="chip-label chip-label-secondary">{chip2}</div>)
											) :
											<div className="chip-label chip-label-secondary">{variation.variationText}</div>
									) : null}
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
