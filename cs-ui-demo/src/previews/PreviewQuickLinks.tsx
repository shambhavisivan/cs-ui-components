import React, { useState } from 'react';
import { CSButton, CSIcon, CSAlert } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import { useQuickLinks } from '../context/QuickLinksContext';
import { getSlug } from './helpers';
import {
	PreviewInterface,
	ComponentInterface,
	ExampleInterface,
	VariationInterface
} from './types';

const PreviewQuickLinks: React.FC<PreviewInterface> = ({
	components,
	api,
	accessibility
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>(components.map(() => true));

	const { quickLinks, toggleQuickLinks } = useQuickLinks();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

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

	const sidebarClasses = classNames(
		'prop-sidebar',
		{
			'quick-links-closed': !quickLinks
		}
	);

	return (
		<div className={sidebarClasses}>
			<div className="quick-links-toggle" onClick={toggleQuickLinks}>
				<CSButton
					iconName={quickLinks ? 'close' : 'rows'}
					label={quickLinks ? 'close' : 'open'}
					btnType="transparent"
					size="small"
					labelHidden
				/>
			</div>
			<div className="quick-links-search">
				<CSIcon name="search" />
				<input
					placeholder="Search props..."
					onChange={handleChange}
					value={searchTerm}
				/>
				{searchTerm && (
					<CSButton
						label="clear"
						btnType="transparent"
						iconName="close"
						size="small"
						labelHidden
						onClick={() => setSearchTerm('')}
					/>
				)}
			</div>
			<div className="prop-list">
				{components.map((component: ComponentInterface, previewIndex: number) => {
					const examples = component.examples?.map(filterVariations).filter(filterProps);
					const componentLink = `#${getSlug(component.name)}`;
					return examples && (
						<div key={component.name}>
							<h4 className="component-name">
								<CSButton
									label={visibleSections[previewIndex] ? 'Collapse' : 'Expand'}
									labelHidden
									btnType="transparent"
									size="small"
									iconName="chevrondown"
									iconRotate={visibleSections[previewIndex] ? '0' : '180'}
									iconSize="1rem"
									onClick={() => handleClick(previewIndex)}
								/>
								<a href={componentLink}>{component.name}</a>
							</h4>
							{!examples.length && (
								<CSAlert variant="info" text={`No results in ${component.name}.`} />
							)}
							{visibleSections[previewIndex] && examples.map((example: ExampleInterface) => {
								const propLink = `${componentLink}-${getSlug(example.propName)}`;
								return (
									<div className="prop-group" key={example.propName}>
										<h5 className="prop-name">
											<a href={propLink}>{example.propName}</a>
										</h5>
										{example.variations.map((variation: VariationInterface, variationIndex: number) => {
											const variationLink = variation.quickLink && `${propLink}-${getSlug(variation.quickLink)}`;
											return (
												<span className="prop-variant" key={variationIndex}>
													{variation.quickLink && (
														<a href={variationLink}>{variation.quickLink}</a>
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
			<div className="prop-sidebar-bottom-group">
				<h4>
					<a href="#component-props">
						Properties List
					</a>
				</h4>
				{api && (
					<h4>
						<a href="#component-api">
							API
						</a>
					</h4>
				)}
				{accessibility && (
					<h4>
						<a href="#component-accessibility">
							Accessibility
						</a>
					</h4>
				)}
			</div>
		</div>
	);
};

export default PreviewQuickLinks;
