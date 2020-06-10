import { CSTooltip } from '@cloudsense/cs-ui-components';
import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import {
	CSGridRowValidationRenderer,
	RowValidationValues,
	ValidationStatus
} from '../../src/components/cs-grid-row-validation-renderer';
import { CellData } from '../../src/interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../../src/interfaces/cs-grid-cell-props';
import { UserInfo } from '../../src/interfaces/user-info';

describe('CS Grid Row Validation Renderer', () => {
	let exampleRowValidationRenderer: CellData<ValidationStatus | RowValidationValues>;
	let editable: boolean;
	let userInfo: UserInfo;
	const columnId = 'colId';
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	let cSGridCellRendererProps: CSGridCellRendererProps<ValidationStatus | RowValidationValues>;

	beforeEach(() => {
		exampleRowValidationRenderer = {
			cellValue: 'Info',
			errorMessage: 'errorMessage'
		};

		editable = true;

		userInfo = {
			currencyCode: 'EUR',
			userLocale: 'fr-FR'
		};

		colDef = { editable };
		column = new Column(colDef, null, columnId, true);
		columnApi = new ColumnApi();
		columnApi.getAllGridColumns = () => [column];

		cSGridCellRendererProps = {
			api: new GridApi(),
			colDef,
			column,
			columnApi,
			context: {},
			data: {},
			eGridCell: { className: 'className' } as any,
			getValue: () => {
				// Do nothing
			},
			node: new RowNode(),
			rowIndex: 0,
			setValue: (value: any) => {
				// Do nothing
			},
			userInfo,
			value: exampleRowValidationRenderer
		};
	});

	test('Renders a basic row validation renderer with validation type Info', () => {
		const cellValue = 'Info';
		cSGridCellRendererProps.value.cellValue = cellValue;

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant={'info'}
						position='top-left'
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic row validation renderer with validation type Error', () => {
		const cellValue = 'Error';
		cSGridCellRendererProps.value.cellValue = cellValue;

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant={'error'}
						position='top-left'
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic row validation renderer with validation type None.', () => {
		cSGridCellRendererProps.value.cellValue = 'None';

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.equals(<span className='' />)).toBeTruthy();
	});

	test('The row validation renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;
		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders a basic row validation renderer that is not the last column so do not have the position as top-left.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip content={exampleRowValidationRenderer.errorMessage} variant='info' />
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a row validation renderer that is readonly so should have read only flag.', () => {
		const readOnly = true;

		const cellRenderer = shallow(
			<CSGridRowValidationRenderer {...cSGridCellRendererProps} readonly={readOnly} />
		);

		expect(
			cellRenderer.equals(
				<span className='read-only-cell'>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant='info'
						position='top-left'
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic row validation renderer with validation type Info and an optional icon.', () => {
		cSGridCellRendererProps.value.cellValue = { status: 'Info', icons: ['red'] };

		const redIcon = <div>red</div>;
		const getIcons = () => {
			return { red: redIcon };
		};

		const cellRenderer = shallow(
			<CSGridRowValidationRenderer {...cSGridCellRendererProps} getIcons={getIcons} />
		);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant='info'
						position='top-left'
					/>
					<span key={0}>{redIcon}</span>
				</span>
			)
		).toBeTruthy();
	});

	test('Returning icons in getIcons but the cellValue does not contain any so none should be shown.', () => {
		cSGridCellRendererProps.value.cellValue = { status: 'Info', icons: [] };

		const redIcon = <div>red</div>;
		const getIcons = () => {
			return { red: redIcon };
		};

		const cellRenderer = shallow(
			<CSGridRowValidationRenderer {...cSGridCellRendererProps} getIcons={getIcons} />
		);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant='info'
						position='top-left'
					/>
				</span>
			)
		).toBeTruthy();
	});

	test('Returning icons in getIcons but the cellValue has an icon name that is not the getIcon results so no icons should be shown.', () => {
		cSGridCellRendererProps.value.cellValue = { status: 'Info', icons: ['green'] };

		const redIcon = <div>red</div>;
		const getIcons = () => {
			return { red: redIcon };
		};

		const cellRenderer = shallow(
			<CSGridRowValidationRenderer {...cSGridCellRendererProps} getIcons={getIcons} />
		);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSTooltip
						content={exampleRowValidationRenderer.errorMessage}
						variant='info'
						position='top-left'
					/>
				</span>
			)
		).toBeTruthy();
	});
});
