import React, { useState } from 'react';
import { CSButton, CSAlert } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import { getSlug } from '../helpers';
import {
	CSUIPreviewInterface,
	ComponentInterface,
	ExampleInterface,
	VariationInterface
} from '../types';
import { HashLink } from 'react-router-hash-link';

const PreviewPropList: React.FC<CSUIPreviewInterface> = ({
	searchTerm = '',
	components,
	api,
	accessibility,
	activeElement= {}
}) => {
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>(components.map(() => true));

	const handleClick = (index: number) => {
		setVisibleSections((prevState: Array<boolean>) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	const filterVariations = (example: ExampleInterface) => {
		if (example.propName.toLowerCase().includes(searchTerm.toLowerCase())) {
			return example;
		}
		return {
			...example,
			variations: example.variations.filter((variation: VariationInterface) => (
				variation.quickLink && variation.quickLink.toLowerCase().includes(searchTerm.toLowerCase())
			))
		};
	};

	const filterProps = (example: ExampleInterface) => (example.variations.length);

	return (
		<>
			<div className="prop-list" id="secondary-sidebar-prop-list">
				{components.map((component: ComponentInterface, previewIndex: number) => {
					const examples = component.examples?.map(filterVariations).filter(filterProps);
					const componentLink = getSlug(component.name);
					return examples && (
						<div key={component.name}>
							<h4 className="component-name">
								<CSButton
									label={visibleSections[previewIndex] ? 'Collapse' : 'Expand'}
									labelHidden
									btnType="transparent"
									size="small"
									iconName="chevronright"
									iconRotate={visibleSections[previewIndex] ? 90 : 0}
									iconSize="1rem"
									onClick={() => handleClick(previewIndex)}
								/>
								<HashLink to={`#${componentLink}`}>{component.name}</HashLink>
							</h4>
							{!examples.length && (
								<CSAlert variant="info" text={`No results in ${component.name}.`} />
							)}
							{visibleSections[previewIndex] && examples.map((example: ExampleInterface) => {
								const propLink = `${componentLink}-${getSlug(example.propName)}`;
								const propNameClasses = classNames(
									'prop-name',
									{
										active: propLink === activeElement.id
									}
								);
								return (
									<div className="prop-group" key={example.propName}>
										<h5 className={propNameClasses}>
											<HashLink to={`#${propLink}`}>{example.propName}</HashLink>
										</h5>
										{example.variations.map((variation: VariationInterface, variationIndex: number) => {
											const variationLink = variation.quickLink && `${propLink}-${getSlug(variation.quickLink)}`;
											const propVariantClasses = classNames(
												'prop-variant',
												{
													active: variationLink === activeElement.id
												}
											);
											return (
												<span className={propVariantClasses} key={variationIndex}>
													{variation.quickLink && (
														<HashLink to={`#${variationLink}`}>{variation.quickLink}</HashLink>
													)}
												</span>
											);
										})}
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
			<div className="secondary-sidebar-bottom-group">
				<h4 className={activeElement.id === 'component-props' ? 'active' : ''}>
					<HashLink to="#component-props">
						Properties List
					</HashLink>
				</h4>
				{api && (
					<h4 className={activeElement.id === 'component-api' ? 'active' : ''}>
						<HashLink to="#component-api">
							API
						</HashLink>
					</h4>
				)}
				{accessibility && (
					<h4 className={activeElement.id === 'component-accessibility' ? 'active' : ''}>
						<HashLink to="#component-accessibility">
							Accessibility
						</HashLink>
					</h4>
				)}
			</div>
		</>
	);
};

export default PreviewPropList;
