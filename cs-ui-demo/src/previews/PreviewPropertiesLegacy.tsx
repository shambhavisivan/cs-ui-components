import React from 'react';
import { CSAlert, CSAlertVariant } from '@cloudsense/cs-ui-components';
import PreviewCode from './PreviewCode';

interface PreviewPropertiesAlert {
	variant: CSAlertVariant;
	text: string;
}

interface PreviewPropertiesVariation {
	variationName?: Array<string>;
	quickLink?: string;
	variationText?: Array<string>;
	component: JSX.Element | Element;
	componentCode?: string;
	customClass?: string;
}

interface PreviewPropertiesExample {
	propName: string;
	customText?: string;
	alert?: PreviewPropertiesAlert;
	variations: Array<PreviewPropertiesVariation>;
}

export interface PreviewPropertiesProps {
	examples: Array<PreviewPropertiesExample>;
	name: string;
}

const PreviewProperties: React.FC<{examples: Array<{propName?: any; customText?: any; alert?: any; variations?: any}>, name: string}> = ({ examples, name }) => {
	return <>
		{examples.map(({
			propName,
			customText,
			alert,
			variations
		}) => (
			<div key={propName}  className="component-preview-wrapper">
				<div className={`component-preview ${propName}`}>
					<h3 id={`${name}-${propName}`}>{propName}</h3>
					<div key={customText}>
						{customText && <p className="component-info-text">{customText}</p>}
						{alert && (
							<CSAlert
								variant={alert.variant}
								text={alert.text}
								styleFormat="scoped"
							/>
						)}
						{variations.map((variation: any, i: any) => (
							<React.Fragment key={i}>
								{(variation.variationName || variation.variationText) && (
									<div className="component-variants">
										{variation.variationName && variation.variationName.map((chip: any) => (
											<code
												key={chip}
												id={`${name}-${propName}-${variation.quickLink}`}
												className="inline-code inline-code-basic"
											>
												{chip}
											</code>
										))}
										{variation.variationText && (
											(
												typeof variation.variationText === 'string'
													? [variation.variationText]
													: variation.variationText
											).map((chip: any) => (
													<code
														key={chip}
														id={`${name}-${propName}-${variation.quickLink}`}
														className="inline-code"
													>
														{chip}
													</code>
												)
											))}
									</div>
								)}
								<div className="component-example">
									<div className={name ? `${name.replace(/\s+/g, '-').toLowerCase()}-preview component-preview` : 'component-preview'}>
										{variation.component}
									</div>
									<PreviewCode code={variation.string} />
								</div>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		))}
	</>;
};

export default PreviewProperties;
