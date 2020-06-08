import { ColDef, Column, ColumnApi, GridApi, RowNode } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import {
	CSGridRowValidationRenderer,
	RowValidationValues,
	ValidationStatus
} from '../../src/components/cs-grid-row-validation-renderer';
import { CSGridTooltip } from '../../src/components/cs-grid-tooltip';
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
		cSGridCellRendererProps.value.cellValue = 'Info';

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic row validation renderer with validation type Error', () => {
		cSGridCellRendererProps.value.cellValue = 'Error';

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className='is-last-column'>
					<CSGridTooltip
						additionalClassnames='icon-error-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-error' aria-hidden='true' />
					</CSGridTooltip>
				</span>
			)
		).toBeTruthy();
	});

	test('Renders a basic row validation renderer with validation type None.', () => {
		cSGridCellRendererProps.value.cellValue = 'None';

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.equals(<span className='is-last-column' />)).toBeTruthy();
	});

	test('The row validation renderer should always render nothing if no value is given', () => {
		cSGridCellRendererProps.value = undefined;
		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(cellRenderer.equals(null)).toBeTruthy();
	});

	test('Renders a basic row validation renderer that is not the last column so do not have a last column class.', () => {
		cSGridCellRendererProps.columnApi.getAllGridColumns = () => [
			new Column(colDef, null, 'NotThisColId', true)
		];

		const cellRenderer = shallow(<CSGridRowValidationRenderer {...cSGridCellRendererProps} />);

		expect(
			cellRenderer.equals(
				<span className=''>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
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
				<span className='is-last-column read-only-cell'>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
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
				<span className='is-last-column'>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
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
				<span className='is-last-column'>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
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
				<span className='is-last-column'>
					<CSGridTooltip
						additionalClassnames='icon-info-wrapper'
						helpText={exampleRowValidationRenderer.errorMessage}
					>
						<span className='icon-info' aria-hidden='true' />
					</CSGridTooltip>
				</span>
			)
		).toBeTruthy();
	});
});
