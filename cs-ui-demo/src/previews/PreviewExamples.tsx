import React from 'react';
import { CSAlert, CSAlertVariant } from '@cloudsense/cs-ui-components';
import PreviewCode from './PreviewCode';
import { getSlug, parseCode } from './helpers';

import {
	ComponentInterface,
	ExampleInterface,
	PreviewInterface,
	VariationInterface
} from './types';

const PreviewExamples: React.FC<PreviewInterface> = ({ components }) => (
	<>
		{components.map((component: ComponentInterface) => {
			const componentLink = getSlug(component.name);

			if (!component.examples) {
				return null;
			}

			return (
				<div key={component.name} className="component-preview-wrapper">
					<h2 id={componentLink} className="demo-heading">
						{component.name} Previews
					</h2>
					{component.examples.map((example: ExampleInterface) => {
						const propLink = `${componentLink}-${getSlug(example.propName)}`;
						return (
							<div key={example.propName} className={`component-preview ${example.propName}`}>
								<h3 className="demo-heading" id={getSlug(propLink)}>
									{example.propName}
								</h3>
								{example.description && (
									<p className="component-info-text">{parseCode(example.description)}</p>
								)}
								{example.alert && (
									<CSAlert
										variant={example.alert.variant as CSAlertVariant}
										text={example.alert.text}
										styleFormat="scoped"
									/>
								)}
								{example.variations.map((variation: VariationInterface, variationIndex: number) => {
									const variationLink = variation.quickLink && `${propLink}-${getSlug(variation.quickLink)}`;
									return (
										<React.Fragment key={variationIndex}>
											{variation.quickLink && <div id={variationLink} />}
											{(variation.primaryVariants || variation.secondaryVariants) && (
												<div className="component-variants">
													{variation.primaryVariants && (
														Array.isArray(variation.primaryVariants)
															? variation.primaryVariants
															: [variation.primaryVariants]
													).map((variant: string) => (
														<code key={variant} className="inline-code inline-code-basic">
															{variant}
														</code>
													))}
													{variation.secondaryVariants && (
														Array.isArray(variation.secondaryVariants)
															? variation.secondaryVariants
															: [variation.secondaryVariants]
													).map((variant: string) => (
														<code key={variant} className="inline-code">
															{variant}
														</code>
													))}
												</div>
											)}
											<div className="component-example">
												<div className={`${getSlug(component.name)}-demo component-demo`}>
													{variation.component}
												</div>
												<PreviewCode code={variation.code} />
											</div>
										</React.Fragment>
									);
								})}
							</div>
						);
					})}
				</div>
			);
		})}
	</>
);

export default PreviewExamples;
