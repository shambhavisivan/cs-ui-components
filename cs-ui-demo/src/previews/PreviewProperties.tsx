import React from 'react';
import { CSAlert } from '@cloudsense/cs-ui-components';
import PreviewCode from './PreviewCode';

import {
	PreviewPropertiesProps,
	PreviewComponent,
	PreviewExample,
	PreviewVariation
} from './types';

const PreviewProperties: React.FC<PreviewPropertiesProps | any> = props => {
	const parseCode = (option: string) => (
		option.split('`').map((substring: string, substringIndex: number) => (
			substringIndex % 2
				? <code key={substringIndex} className="inline-code">{substring}</code>
				: substring
		))
	);

	const { previews } = props;

	return <>
		{previews.map((preview: PreviewComponent) => {
			const componentLink = preview.name.split(' ').join('-');
			return (
				<div key={preview.name} className="component-preview-wrapper">
					<h2
						className="demo-heading"
						id={`component-${componentLink}`}
					>
						{preview.name} Previews
					</h2>
					{preview.examples.map((example: PreviewExample) => {
						const propLink = `${componentLink}-${example.propName.split(' ').join('-')}`;
						return (
							<div key={example.propName} className={`component-preview ${example.propName}`}>
								<h3 className="demo-heading" id={`component-preview-${propLink}`}>
									{example.propName}
								</h3>
								{example.description && (
									<p className="component-info-text">
										{parseCode(example.description)}
									</p>
								)}
								{example.alert && (
									<CSAlert
										variant={example.alert.variant}
										text={example.alert.text}
										styleFormat="scoped"
									/>
								)}
								{example.variations.map((variation: PreviewVariation, variationIndex: number) => {
									const variationLink = variation.quickLink && `${propLink}-${variation.quickLink.split(' ').join('-')}`;
									return (
										<React.Fragment key={variationIndex}>
											{variation.quickLink && (
												<div id={`component-variation-${variationLink}`} />
											)}
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
												<div className={`${preview.name.split(' ').join('-')}-demo component-demo`}>
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
	</>;
};

export default PreviewProperties;
