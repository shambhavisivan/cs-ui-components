import React from 'react';
import classNames from 'classnames';
import { getCustomTypes, getTypes } from '../previews/helpers';
import { CSDataTable, CSTooltip, CSDataTableRowWithMetaInterface } from '@cloudsense/cs-ui-components';

import CSDContent from './CSDContent';
import CSDHeading from './CSDHeading';
import CSDSection from './CSDSection';

export interface CSDTableProps {
	name?: string;
	filter?: Array<string>;
	type: 'props' | 'attributes';
	data: any;
	section?: boolean;
}

const CSDTable = ({
	name,
	filter,
	type = 'props',
	data,
	section
}: CSDTableProps) => {
	const tableClasses = classNames(
		'csd-table',
		{
			'csd-table-section': section
		}
	);

	const renderRequired = (row: CSDataTableRowWithMetaInterface) => {
		const required = row.data!.required;

		if (required === true) {
			return <CSTooltip content="Required" iconName="check" />;
		}

		if (required === undefined) {
			return <CSTooltip content="Not Required" iconName="dash" />;
		}

		return <CSTooltip content={`Inherited from ${required}`} iconName="arrowdown" />;
	};

	const renderType = (row: CSDataTableRowWithMetaInterface) => (
		<>
			{getCustomTypes(row.data?.customTypes)}
			{getTypes(row.data?.types)}
		</>
	);

	const renderDefault = (row: CSDataTableRowWithMetaInterface) => {
		const defaultValue = row.data!.default;

		if (!defaultValue) {
			return <CSTooltip content="Undefined" iconName="dash" />;
		}

		return <code className="csd-inline-code">{defaultValue}</code>;
	};

	const rows = data
		.filter((row: any) => filter?.indexOf(row.name) !== -1)
		.map((row: any) => ({ key: row.name, data: row }));

	const renderTable = () => (
		<CSDataTable
			className={tableClasses}
			density="comfortable"
			disableHover
			rows={rows}
			columns={[
				{
					key: 'name',
					header: 'Prop',
					cellClassName: 'csd-table-name'
				}, {
					key: 'required',
					header: 'Required',
					width: '5.25rem',
					align: 'center',
					render: renderRequired
				}, {
					key: 'type',
					header: 'Type',
					grow: 2,
					render: renderType
				}, {
					key: 'default',
					header: 'Default',
					render: renderDefault
				}, {
					key: 'description',
					header: 'Description',
					wrap: true,
					grow: 4
				}
			]}
		/>
	);

	if (!section) {
		return renderTable();
	}

	return (
		<CSDContent>
			<CSDSection>
				<CSDHeading level={2}>{`${name} ${type === 'props' ? 'Props' : 'Attributes'}`}</CSDHeading>
				{renderTable()}
			</CSDSection>
		</CSDContent>
	);
};

export default CSDTable;