import React, { useState, useEffect } from 'react';
import { CSButton, CSIcon, CSAlert } from '@cloudsense/cs-ui-components';
import PreviewLinksLegacy from './PreviewLinksLegacy';

import {
	PreviewExample,
	PreviewVariation,
	PreviewLinksProps, PreviewComponent
} from './types';

const PreviewLinks: React.FC<PreviewLinksProps | any> = props => {
	const {
		previews,
		api,
		accessibility
	} = props;

	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>([]);

	const [quickLinksOpen, setQuickLinksOpen] = useState(true);

	const toggleQuickLinks = () => {
		setQuickLinksOpen(!quickLinksOpen);
	};

	useEffect(() => {
		if (previews) {
			setVisibleSections(previews.map(() => true));
		}
	}, []);

	if (!previews) {
		return <PreviewLinksLegacy {...props} />;
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const searchProps = (example: PreviewExample) => (
		example.propName.toLowerCase().includes(searchTerm.toLowerCase())
		|| example.variations.find((variation: PreviewVariation) => (
			variation.quickLink && variation.quickLink.toLowerCase().includes(searchTerm.toLowerCase())
		))
	);

	const handleClick = (index: number) => {
		setVisibleSections((prevState: Array<boolean>) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<div className={'prop-sidebar' + (quickLinksOpen ? ' quick-links-open' : ' quick-links-closed')}>
			<div className={'quick-links-toggle' + (quickLinksOpen ? '' : ' quick-links-toggle-closed')} onClick={toggleQuickLinks}>
				<CSIcon name={quickLinksOpen ? 'close' : 'rows'} />
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
						iconDisplay="icon-only"
						onClick={() => setSearchTerm('')}
					/>
				)}
			</div>
			<div className="prop-list">
				{previews.map((preview: PreviewComponent, previewIndex: number) => {
					const examples = preview.examples.filter(searchProps);
					const componentLink = preview.name.split(' ').join('-').toLowerCase();
					return (
						<div key={preview.name}>
							<h4 className="component-name">
								<CSButton
									label={visibleSections[previewIndex] ? 'Collapse' : 'Expand'}
									iconDisplay="icon-only"
									title={visibleSections[previewIndex] ? 'Collapse' : 'Expand'}
									btnType="transparent"
									btnStyle="brand"
									size="small"
									iconName="chevrondown"
									iconRotate={visibleSections[previewIndex] ? '0' : '180'}
									iconSize="1rem"
									iconColor="#4a26ab"
									onClick={() => handleClick(previewIndex)}
								/>
								<a href={`#component-${componentLink}`}>
									{preview.name}
								</a>
							</h4>
							{!examples.length && (
								<CSAlert
									variant="warning"
									text={`No results in ${preview.name}.`}
								/>
							)}
							{visibleSections[previewIndex] && (
								examples.map((example: PreviewExample) => {
									const propLink = `${componentLink}-${example.propName.split(' ').join('-').toLowerCase()}`;
									return (
										<div className="prop-group" key={example.propName}>
											<span className="prop-name">
												<a href={`#component-preview-${propLink}`}>
													{example.propName}
												</a>
											</span>
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
								})
							)}
						</div>
					);
				})}
			</div>
			<div className="prop-sidebar-bottom-group">
				<h5>
					<a href="#properties-table">
						Properties List
					</a>
				</h5>
				{api && (
					<h5>
						<a href="#api-preview">
							API
						</a>
					</h5>
				)}
				{accessibility && (
					<h5>
						<a href="#accessibility-table">
							Accessibility
						</a>
					</h5>
				)}
			</div>
		</div>
	);
};

export default PreviewLinks;
