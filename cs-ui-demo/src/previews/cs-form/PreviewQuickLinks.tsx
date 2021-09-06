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
		'secondary-sidebar',
		'secondary-sidebar-purple',
		{
			'secondary-sidebar-closed': !quickLinks
		}
	);

	return (
		<>
			{!quickLinks &&
				<CSButton
					iconName="rows"
					label="open"
					btnType="transparent"
					size="small"
					labelHidden
					className="closed-secondary-sidebar-toggle"
					onClick={toggleQuickLinks}
					borderRadius="50%"
				/>
			}
			<div className="secondary-sidebar-wrapper">
				<div className={sidebarClasses}>
					<div className="secondary-sidebar-search">
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
								borderRadius="50%"
								onClick={() => setSearchTerm('')}
							/>
						)}
					</div>
					<CSButton
						iconName={quickLinks ? 'back' : 'rows'}
						label={quickLinks ? 'close' : 'open'}
						btnType="transparent"
						size="small"
						labelHidden
						className="secondary-sidebar-toggle"
						onClick={toggleQuickLinks}
						borderRadius="50%"
					/>
					<div className="prop-list" id="secondary-sidebar-prop-list">
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
					<div className="secondary-sidebar-bottom-group">
						{api && (
							<h4 className={activeElement.id === 'component-api' ? 'active' : ''}>
								<HashLink to="#component-api">
									API
								</HashLink>
							</h4>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default PreviewQuickLinks;
