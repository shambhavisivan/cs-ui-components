import React from 'react';
import classNames from 'classnames';
import {
	CSTableBody,
	CSTableCell,
	CSTableRow,
	CSTableHeader,
	CSTable
} from '@cloudsense/cs-ui-components';
import {
	getCustomTypes,
	getDefault,
	getRequired,
	getTypes
} from './helpers';

import { PreviewInterface, PropInterface, ComponentInterface } from './types';

const PreviewProps: React.FC<PreviewInterface> = ({ components }) => (
	<>
		{components?.map((component: ComponentInterface, componentIndex: number) => (
			<div key={component.name} className="properties-table-wrapper">
				<h2 className="demo-heading scroll-spy" id={!componentIndex ? 'component-props' : undefined}>
					{component.name} Properties
				</h2>
				<CSTable className="properties-table">
					<CSTableHeader className="properties-table-header">
						<CSTableCell className="properties-table-cell" text="Prop" />
						<CSTableCell className="properties-table-cell" text="Required" />
						<CSTableCell className="properties-table-cell" text="Type" />
						<CSTableCell className="properties-table-cell" text="Default" />
						<CSTableCell className="properties-table-cell" text="Description" />
					</CSTableHeader>
					<CSTableBody className="properties-table-body">
						{component.properties.map((property: PropInterface) => {
							const propertiesTableRowClasses = classNames(
								'properties-table-row',
								{
									'properties-table-row-inherited': typeof property.required === 'string',
									'properties-table-row-special': ['children', 'id', 'className', '[key: string]'].includes(property.name)
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
		))}
	</>
);

export default PreviewProps;
