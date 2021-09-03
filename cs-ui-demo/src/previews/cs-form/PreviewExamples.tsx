import React from 'react';
import classNames from 'classnames';
import { CSTable, CSTableCell, CSTableHeader, CSTableRow, CSTableBody } from '@cloudsense/cs-ui-components';
import PreviewCode from './PreviewCode';

import {
	getSlug,
	parseCode,
	getCustomTypes,
	getDefault,
	getRequired,
	getTypes
} from '../helpers';

import {
	CSFormFieldTypesInterface,
	CSFormExampleInterface,
	CSFormPreviewInterface,
	CSFormVisualInterface,
	PropInterface
} from '../types';

const PreviewExamples: React.FC<CSFormPreviewInterface> = ({ fieldTypes }) => (
	<>
		{fieldTypes.map((fieldType: CSFormFieldTypesInterface, fieldTypeIndex: number) => {
			const fieldTypeLink = getSlug(fieldType.name);

			if (!fieldType.example) {
				return null;
			}

			return (
				<div key={fieldType.name} className="component-preview-wrapper">
					<h2 id={fieldTypeLink} className="demo-heading">
						{fieldType.name}
					</h2>
					{fieldType.example.map((example: CSFormExampleInterface) => {
						return (
							<div className="component-preview" key={fieldType.name}>
								{example.description && (
									<p className="component-info-text">{parseCode(example.description)}</p>
								)}

								{example.previews.map((preview: CSFormVisualInterface, previewIndex: number) => {
									return (
										<React.Fragment key={previewIndex}>
											<div className="component-example">
												<div className={`${getSlug(fieldType.name)}-demo component-demo`}>
													{preview.field}
												</div>
												<PreviewCode code={preview.code} />
											</div>
											<div key={fieldType.name} className="properties-table-wrapper">
												<CSTable className="properties-table">
													<CSTableHeader className="properties-table-header">
														<CSTableCell className="properties-table-cell" text="Attribute" />
														<CSTableCell className="properties-table-cell" text="Required" />
														<CSTableCell className="properties-table-cell" text="Type" />
														<CSTableCell className="properties-table-cell" text="Default" />
														<CSTableCell className="properties-table-cell" text="Description" />
													</CSTableHeader>
													<CSTableBody className="properties-table-body">
														{fieldType.properties.map((property: PropInterface) => {
															const propertiesTableRowClasses = classNames(
																'properties-table-row',
																{
																	'properties-table-row-inherited': typeof property.required === 'string',
																	'properties-table-row-special': ['dropdownClassName', 'children', 'id', 'className', '[key: string]'].includes(property.name)
																}
															);
															return (
																<CSTableRow key={property.name} className={propertiesTableRowClasses}>
																	<CSTableCell className="properties-table-cell">{property.name}</CSTableCell>
																	<CSTableCell className="properties-table-cell">{getRequired(property.required)}</CSTableCell>
																	<CSTableCell className="properties-table-cell">
																		{getCustomTypes(property.customTypes)}
																		{getTypes(property.types)}
																	</CSTableCell>
																	<CSTableCell className="properties-table-cell">{getDefault(property.default)}</CSTableCell>
																	<CSTableCell className="properties-table-cell">{property.description}</CSTableCell>
																</CSTableRow>
															);
														})}
													</CSTableBody>
												</CSTable>
											</div>
										</React.Fragment>
									);
								})}
							</div>
						);
					})}
				</div>
			);
		})}
	</>
);

export default PreviewExamples;
