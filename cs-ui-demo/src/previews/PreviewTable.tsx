import React from 'react';
import {
	CSTooltip,
	CSTableBody,
	CSTableCell,
	CSTableRow,
	CSTableHeader,
	CSTable,
	CSIcon
} from '@cloudsense/cs-ui-components';
import PreviewTableLegacy, { PreviewTableLegacyProps } from './PreviewTableLegacy';
import classNames from 'classnames';

interface PreviewTableCustomType {
	name: string;
	types: Array<string>;
}

interface PreviewTableComponentProperty {
	[key: string]: any;
	name: string;
	required?: true | string;
	types?: Array<string>;
	customTypes?: Array<PreviewTableCustomType>;
	default?: string;
	description?: string;
}

interface PreviewTableComponent {
	[key: string]: any;
	name: string;
	properties: Array<PreviewTableComponentProperty>;
}

interface PreviewTableProps {
	components: Array<PreviewTableComponent>;
}

const PreviewTable: React.FC<PreviewTableProps | PreviewTableLegacyProps> = ({ components }) => {
	if (!(components as Array<PreviewTableComponent>)[0].properties[0].name) {
		return <PreviewTableLegacy components={components} />;
	}

	const sortProps = (prev: PreviewTableComponentProperty, next: PreviewTableComponentProperty) => {
		const prevRequired = !prev.required ? 1 : (prev.required === true ? 0 : 2);
		const nextRequired = !next.required ? 1 : (next.required === true ? 0 : 2);
		if (typeof prev.required === typeof next.required) {
			const prevName = prev.name === '[key: string]' ? 'zzz' : prev.name.toLowerCase();
			const nextName = next.name === '[key: string]' ? 'zzz' : next.name.toLowerCase();
			return prevName < nextName ? -1 : (prevName > nextName ? 1 : 0);
		}
		return (prevRequired < nextRequired) ? -1 : (prevRequired > nextRequired ? 1 : 0);
	};

	const getRequired = (propRequired?: true | string) => {
		if (propRequired === true) {
			return <CSTooltip content="Required" iconName="check" />;
		} else if (propRequired === undefined) {
			return <CSTooltip content="Not Required" iconName="dash" />;
		}
		return <CSTooltip content={`Inherited from ${propRequired}`} iconName="arrowdown" />;
	};

	const getCustomTypes = (propCustomTypes?: Array<PreviewTableCustomType>) => {
		if (!propCustomTypes) {
			return null;
		}
		return propCustomTypes.map((customType: PreviewTableCustomType) => (
			<CSTooltip
				position="top-center"
				key={customType.name}
				width="auto"
				className="properties-code-tooltip"
				content={
					<>
						{customType.types.map((type: string) => (
							<span key={type} className="properties-code">{type}</span>
						))}
					</>
				}>
				<span className="properties-code properties-code-custom">
					{customType.name}<CSIcon name="info_alt" />
				</span>
			</CSTooltip>
		));
	};

	const getTypes = (propTypes?: Array<string>) => {
		if (!propTypes) {
			return null;
		}
		return propTypes.map((type: string) => (
			<span key={type} className="properties-code">{type}</span>
		));
	};

	const getDefault = (propDefault?: string) => {
		if (!propDefault) {
			return <CSTooltip content="Undefined" iconName="dash" />;
		}
		return <span className="properties-code">{propDefault}</span>;
	};

	return components.map((component: PreviewTableComponent) => {
		const sortedProps = component.properties.sort(sortProps);
		return (
			<div key={component.name} className="properties-table-wrapper">
				<h2 className="properties-component-name" id={`properties-table-${component.name}`}>
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
						{sortedProps.map((property: PreviewTableComponentProperty) => {
							const propertiesTableRowClasses = classNames(
								'properties-table-row',
								{
									'properties-table-row-inherited': typeof property.required === 'string'
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
		);
	});
};

export default PreviewTable;
