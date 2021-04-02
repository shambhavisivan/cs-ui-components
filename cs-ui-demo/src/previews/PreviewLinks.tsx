import React, { useState, useEffect } from 'react';
import { CSButton, CSIcon, CSAlert } from '@cloudsense/cs-ui-components';
import PreviewLinksLegacy from './PreviewLinksLegacy';
import { useQuickLinks } from '../context/QuickLinksContext';

import {
	PreviewExample,
	PreviewVariation,
	PreviewLinksProps,
	PreviewComponent
} from './types';

const PreviewLinks: React.FC<PreviewLinksProps | any> = props => {
	const {
		previews,
		api,
		accessibility
	} = props;

	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>([]);

	const { quickLinks, toggleQuickLinks } = useQuickLinks();

	useEffect(() => {
		if (previews) {
			setVisibleSections(previews.map(() => true));
		}
	}, [previews]);

	if (!previews) {
		return <PreviewLinksLegacy {...props} />;
	}

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

	const filterVariations = (example: PreviewExample) => {
		if (example.propName.toLowerCase().includes(searchTerm.toLowerCase())) {
			return example;
		}
		return {
			...example,
			variations: example.variations.filter((variation: PreviewVariation) => (
				variation.quickLink && variation.quickLink.toLowerCase().includes(searchTerm.toLowerCase())
			))
		};
	};

	const filterProps = (example: PreviewExample) => (example.variations.length);

	return (
		<div className={'prop-sidebar' + (quickLinks ? ' quick-links-open' : ' quick-links-closed')}>
			<div className="quick-links-toggle" onClick={toggleQuickLinks}>
				<CSIcon name={quickLinks ? 'close' : 'rows'} />
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
						labelHidden
						onClick={() => setSearchTerm('')}
					/>
				)}
			</div>
			<div className="prop-list">
				{previews.map((preview: PreviewComponent, previewIndex: number) => {
					const examples = preview.examples
						.map(filterVariations)
						.filter(filterProps);
					const componentLink = preview.name.split(' ').join('-').toLowerCase();
					return (
						<div key={preview.name}>
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
								<a href={`#component-${componentLink}`}>
									{preview.name}
								</a>
							</h4>
							{!examples.length && (
								<CSAlert
									variant="info"
									text={`No results in ${preview.name}.`}
								/>
							)}
							{visibleSections[previewIndex] && examples.map((example: PreviewExample) => {
								const propLink = `${componentLink}-${example.propName.split(' ').join('-').toLowerCase()}`;
								return (
									<div className="prop-group" key={example.propName}>
										<h5 className="prop-name">
											<a href={`#component-preview-${propLink}`}>
												{example.propName}
											</a>
										</h5>
										{example.variations.map((variation: PreviewVariation, variationIndex: number) => {
											const variationLink = variation.quickLink && `${propLink}-${variation.quickLink.split(' ').join('-').toLowerCase()}`;
											return (
												<span className="prop-variant" key={variationIndex}>
													{variation.quickLink && (
														<a href={`#component-variation-${variationLink}`}>
															{variation.quickLink}
														</a>
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
					<a href="#properties-table">
						Properties List
					</a>
				</h4>
				{api && (
					<h4>
						<a href="#api-preview">
							API
						</a>
					</h4>
				)}
				{accessibility && (
					<h4>
						<a href="#accessibility-table">
							Accessibility
						</a>
					</h4>
				)}
			</div>
		</div>
	);
};

export default PreviewLinks;
