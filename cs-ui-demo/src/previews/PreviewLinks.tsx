import React, { useState } from 'react';
import { CSInputSearch, CSAlert } from '@cloudsense/cs-ui-components';
import PreviewLinksLegacy from './PreviewLinksLegacy';

import {
	PreviewLinksProps,
	PreviewExample,
	PreviewComponent,
	PreviewVariation
} from './types';

const PreviewLinks: React.FC<PreviewLinksProps | any> = props => {
	const [searchTerm, setSearchTerm] = useState('');

	if (!props.previews) {
		return <PreviewLinksLegacy {...props} />;
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const searchProps = (term: string) => (example: PreviewExample) => (
		example.propName.toLowerCase().includes(term.toLowerCase())
		|| example.variations.find((variation: PreviewVariation) => (
			variation.quickLink && variation.quickLink.toLowerCase().includes(term.toLowerCase())
		))
	);

	const {
		previews,
		name,
		api,
		accessibility
	} = props;

	return (
		<div className="prop-sidebar">
			<h3>Quick Links</h3>
			<CSInputSearch
				label="Search props"
				labelHidden
				placeholder="Search props"
				onChange={handleChange}
			/>
			<div className="prop-sidebar-wrapper">
				{previews.map((preview: PreviewComponent) => {
					const examples = preview.examples.filter(searchProps(searchTerm));
					const componentLink = preview.name.split(' ').join('-').toLowerCase();
					return (
						<div key={preview.name}>
							<h4>
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
							{examples.map((example: PreviewExample) => {
								const propLink = `${componentLink}-${example.propName.split(' ').join('-').toLowerCase()}`;
								return (
									<div className="prop-group" key={example.propName}>
										<h5>
											<a href={`#component-preview-${propLink}`}>
												{example.propName}
											</a>
										</h5>
										{example.variations.map((variation: PreviewVariation, variationIndex: number) => {
											const variationLink = variation.quickLink && `${propLink}-${variation.quickLink.split(' ').join('-').toLowerCase()}`;
											return (
												<span key={variationIndex}>
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
				<div className="prop-group">
					<h5>
						<a href={`#properties-table-${name.split(' ').join('-').toLowerCase()}`}>
							Properties List
						</a>
					</h5>
				</div>
				{api && (
					<div className="prop-group">
						<h5>
							<a href={`#api-preview-${name.split(' ').join('-').toLowerCase()}`}>
								API
							</a>
						</h5>
					</div>
				)}
				{accessibility && (
					<div className="prop-group">
						<h5>
							<a href={`#accessibility-table-${name.split(' ').join('-').toLowerCase()}`}>
								Accessibility
							</a>
						</h5>
					</div>
				)}
			</div>
		</div>
	);
};

export default PreviewLinks;
