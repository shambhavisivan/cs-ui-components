import React, { useState } from 'react';
import classNames from 'classnames';
import { getSlug } from '../helpers';
import {
	CSFormPreviewInterface,
	CSFormFieldTypesInterface
} from '../types';
import { HashLink } from 'react-router-hash-link';

const PreviewFieldTypeList: React.FC<CSFormPreviewInterface> = ({
	fieldTypes,
	api,
	activeElement= {}
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [visibleSections, setVisibleSections] = useState<Array<boolean>>(fieldTypes.map(() => true));

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

	return (
		<>
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
		</>
	);
};

export default PreviewFieldTypeList;
