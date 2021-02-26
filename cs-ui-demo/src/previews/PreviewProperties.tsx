import React from 'react';
import { CSAlert } from '@cloudsense/cs-ui-components';
import PreviewPropertiesLegacy from './PreviewPropertiesLegacy';
import PreviewCode from './PreviewCode';

import {
	PreviewPropertiesProps,
	PreviewComponent,
	PreviewExample,
	PreviewVariation
} from './types';

const PreviewProperties: React.FC<PreviewPropertiesProps | any> = props => {
	if (props.examples) {
		return <PreviewPropertiesLegacy examples={props.examples} name={props.name} />;
	}

	const parseCode = (option: string) => (
		option.split('`').map((substring: string, substringIndex: number) => (
			substringIndex % 2
				? <code key={substringIndex} className="inline-code">{substring}</code>
				: substring
		))
	);

	const { previews } = props;

	return <>
		{previews.map((preview: PreviewComponent) => (
			<div key={preview.name} className="component-preview-wrapper">
				<h2
					className="demo-heading"
					id={`component-preview-wrapper-${preview.name.split(' ').join('-').toLowerCase()}`}
				>
					{preview.name} Previews
				</h2>
				{preview.examples.map((example: PreviewExample) => (
					<div key={example.propName} className={`component-preview ${example.propName}`}>
						<h3 className="demo-heading" id={`component-preview-${example.propName.split(' ').join('-').toLowerCase()}`}>
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
						{example.variations.map((variation: PreviewVariation, variationIndex: number) => (
							<React.Fragment key={variationIndex}>
								{variation.quickLink && (
									<div id={`component-variation-${variation.quickLink.split(' ').join('-').toLowerCase()}`} />
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
									<div className={`${preview.name.split(' ').join('-').toLowerCase()}-preview component-preview`}>
										{variation.component}
									</div>
									<PreviewCode code={variation.code} />
								</div>
							</React.Fragment>
						))}
					</div>
				))}
			</div>
		))}
	</>;
};

export default PreviewProperties;
