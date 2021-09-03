import React, { useState } from 'react';
import { CSButton, CSIcon } from '@cloudsense/cs-ui-components';
import classNames from 'classnames';
import { useQuickLinks } from '../../context/QuickLinksContext';
import { getSlug } from '../helpers';
import {
	CSFormPreviewInterface,
	CSFormFieldTypesInterface
} from '../types';
import { HashLink } from 'react-router-hash-link';

const PreviewQuickLinks: React.FC<CSFormPreviewInterface> = ({
	fieldTypes,
	api,
	activeElement= {}
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>(fieldTypes.map(() => true));

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

	const filterFieldTypes = (fieldType: CSFormFieldTypesInterface) => {
		if (fieldType.name.toLowerCase().includes(searchTerm.toLowerCase())) {
			return fieldType;
		}
		return {
			...fieldType
		};
	};

	const sidebarClasses = classNames(
		'prop-sidebar',
		{
			'quick-links-closed': !quickLinks
		}
	);

	return (
		<div className={sidebarClasses}>
			<CSButton
				iconName={quickLinks ? 'close' : 'rows'}
				label={quickLinks ? 'close' : 'open'}
				btnType="transparent"
				size="small"
				labelHidden
				className="quick-links-toggle"
				onClick={toggleQuickLinks}
				borderRadius="50%"
			/>
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
			<div className="prop-list" id="quick-links-prop-list">
				{fieldTypes.map((fieldType: CSFormFieldTypesInterface, previewIndex: number) => {
					const fieldTypeLink = getSlug(fieldType.name);
					const fieldTypeClasses = classNames(
						'component-name',
						'fieldType-name'
					);
					return fieldType && (
						<div key={fieldType.name}>
							<h4 className={fieldTypeClasses}>
								<HashLink to={`#${fieldTypeLink}`}>{fieldType.name}</HashLink>
							</h4>

						</div>
					);
				})}
			</div>
			<div className="prop-sidebar-bottom-group">
				{api && (
					<h4 className={activeElement.id === 'component-api' ? 'active' : ''}>
						<HashLink to="#component-api">
							API
						</HashLink>
					</h4>
				)}
			</div>
		</div>
	);
};

export default PreviewQuickLinks;
