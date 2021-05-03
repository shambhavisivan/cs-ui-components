import React from 'react';
import PreviewCode from './PreviewCode';
import {PreviewInterface, PropInterface} from './types';
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

const PreviewApi: React.FC<PreviewInterface> = ({ name, api }) => {
	if (!api) {
		return null;
	}
	return (
		<div id="api-preview-wrapper" className="api-preview-wrapper">
			<h2 className="demo-heading" id="component-api">{name} API</h2>
			{api.map((method: any) => (
				<React.Fragment key={method.name}>
					<div className="api-preview">
						<div className={`${method.name}`}>
							<h3 className="demo-heading">{method.name} Preview</h3>
							{method.description && <p className="api-info-text">{method.description}</p>}
							<div className="api-example">
								<div className={`${method.name}-demo api-demo`}>
									{method.component}
								</div>
								<PreviewCode code={method.code} />
							</div>
						</div>
						<div className="properties-table-wrapper">
							<h3 className="demo-heading">{method.name} Arguments</h3>
							<CSTable className="properties-table">
								<CSTableHeader className="properties-table-header">
									<CSTableCell className="properties-table-cell" text="Prop" />
									<CSTableCell className="properties-table-cell" text="Required" />
									<CSTableCell className="properties-table-cell" text="Type" />
									<CSTableCell className="properties-table-cell" text="Default" />
									<CSTableCell className="properties-table-cell" text="Description" />
								</CSTableHeader>
								<CSTableBody className="properties-table-body">
									{method?.arguments.map((argument: PropInterface) => {
										const propertiesTableRowClasses = classNames(
											'properties-table-row',
											{
												'properties-table-row-inherited': typeof argument.required === 'string',
												'properties-table-row-children': argument.name === 'children'
											}
										);
										return (
											<CSTableRow key={argument.name} className={propertiesTableRowClasses}>
												<CSTableCell className="properties-table-cell">{argument.name}</CSTableCell>
												<CSTableCell className="properties-table-cell">{getRequired(argument.required)}</CSTableCell>
												<CSTableCell className="properties-table-cell">
													{getCustomTypes(argument.customTypes)}
													{getTypes(argument.types)}
												</CSTableCell>
												<CSTableCell className="properties-table-cell">{getDefault(argument.default)}</CSTableCell>
												<CSTableCell className="properties-table-cell">{argument.description}</CSTableCell>
											</CSTableRow>
										);
									})}
								</CSTableBody>
							</CSTable>
						</div>
					</div>
				</React.Fragment>
			))}
		</div>
	);
};

export default PreviewApi;
