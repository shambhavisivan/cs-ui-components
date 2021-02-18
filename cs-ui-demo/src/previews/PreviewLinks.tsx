import React, { useState } from 'react';
import { CSInputSearch, CSAlertVariant, CSAlert } from '@cloudsense/cs-ui-components';
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
					return (
						<div key={preview.name}>
							<h4>
								<a href={`#component-preview-wrapper-${preview.name.split(' ').join('-').toLowerCase()}`}>
									{preview.name}
								</a>
							</h4>
							{!examples.length && (
								<CSAlert
									variant="warning"
									text={`No results in ${preview.name}.`}
								/>
							)}
							{examples.map((example: PreviewExample) => (
								<div className="prop-group" key={example.propName}>
									<h5>
										<a href={`#component-preview-${example.propName.split(' ').join('-').toLowerCase()}`}>
											{example.propName}
										</a>
									</h5>
									{example.variations.map((variation: PreviewVariation, variationIndex: number) => (
										<span key={variationIndex}>
											{variation.quickLink && (
												<a href={`#component-variation-${variation.quickLink.split(' ').join('-').toLowerCase()}`}>
													{variation.quickLink}
												</a>
											)}
										</span>
									))}
								</div>
							))}
						</div>
					);
				})}
			</div>
			<div className="prop-sidebar-bottom-group">
				<div className="prop-group">
					<h5>
						<a href={`#properties-table-${name}`}>
							Properties List
						</a>
					</h5>
				</div>
				{accessibility && (
					<div className="prop-group">
						<h5>
							<a href={`#accessibility-table-${name}`}>
								Accessibility
							</a>
						</h5>
					</div>
				)}
				{api && (
					<div className="prop-group">
						<h5>
							<a href={`#api-table-${name}`}>
								API
							</a>
						</h5>
					</div>
				)}
			</div>
		</div>
	);
};

export default PreviewLinks;
