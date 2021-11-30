import React from 'react';
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
