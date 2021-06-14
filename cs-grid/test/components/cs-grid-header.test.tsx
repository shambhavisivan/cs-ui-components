import { ColDef, Column, ColumnApi, GridApi } from 'ag-grid-community';
import { shallow } from 'enzyme';
import React from 'react';
import { CSGridHeader, CSGridHeaderProps } from '../../src/components/cs-grid-header';

describe('CS Grid header', () => {
	let cSGridHeaderProps: CSGridHeaderProps;

	let editable: boolean;
	let colDef: ColDef;
	let column: Column;
	let columnApi: ColumnApi;
	const displayName = 'exampleDisplayName';
	let enableSorting: boolean;
	let enableMenu: boolean;
	let className: string;
	let eGridHeader: HTMLElement;

	let customSortMock: jest.Mock<any, any>;

	beforeEach(() => {
		editable = true;
		enableSorting = true;
		enableMenu = true;
		colDef = { editable };
		column = new Column(colDef, null, 'colId', true);
		columnApi = new ColumnApi();
		columnApi.getAllGridColumns = () => [column];
		className = 'exampleClassName';

		customSortMock = jest.fn();

		cSGridHeaderProps = {
			api: new GridApi(),
			className,
			column,
			columnApi,
			context: {},
			customSort: customSortMock,
			displayName,
			eGridHeader,
			enableMenu,
			enableSorting,
			progressSort: (multiSort?: boolean) => {
				console.log(`progressSort called with ${multiSort}`);
			},
			setSort: (sort: string, multiSort?: boolean) => {
				console.log(`setSort called with ${sort} and ${multiSort}`);
			},
			showColumnMenu: (source: HTMLElement) => {
				console.log(`showColumnMenu called with ${source}`);
			},
			template: 'template'
		};
	});

	test('Renders a header with no menu, no sorting and no filter.', () => {
		enableMenu = false;
		enableSorting = false;
		column.isFilterActive = () => false;

		const cellHeader = shallow(
			<CSGridHeader
				{...cSGridHeaderProps}
				enableMenu={enableMenu}
				enableSorting={enableSorting}
			/>
		);

		expect(
			cellHeader.equals(
				<div className='cs-grid_header-inner'>
					<span onClick={undefined} className={className} title={displayName}>
						{' '}
						{displayName}
					</span>
				</div>
			)
		).toBeTruthy();
	});

	test('Renders a header with a menu, sorting and filtering turned on.', () => {
		enableMenu = true;
		enableSorting = true;
		column.isFilterActive = () => true;

		const cellHeader = shallow(
			<CSGridHeader
				{...cSGridHeaderProps}
				enableMenu={enableMenu}
				enableSorting={enableSorting}
			/>
		);
		const instance = cellHeader.instance() as CSGridHeader;

		expect(
			cellHeader.equals(
				<div className='cs-grid_header-inner'>
					<span
						ref={instance.menuButtonRef}
						className='customHeaderMenuButton'
						onClick={instance.onMenuClick}
						title='Column filter'
					>
						<i className='icon-menu' />
					</span>
					<span className='ag-header-icon ag-filter-icon' title='Filtered'>
						<span className='ag-icon ag-icon-filter' />
					</span>

					<span
						onClick={instance.onSortRequested}
						className={className}
						title={displayName}
					>
						{' '}
						{displayName}
					</span>
					<span
						key={`up${displayName}`}
						className={`btn-icon  `}
						onClick={instance.onSortRequested}
					/>
				</div>
			)
		).toBeTruthy();
	});

	test('Testing onSortRequested calls customSort when it is given as a prop.', () => {
		const cellHeader = shallow(<CSGridHeader {...cSGridHeaderProps} />);

		const input = cellHeader.find('.btn-icon');
		input.simulate('click');

		expect(customSortMock.mock.calls.length).toEqual(1);
	});

	test('Testing onSortRequested calls eventService.dispatchEvent for all other columns and not the main column.', async () => {
		const cellHeader = shallow(<CSGridHeader {...cSGridHeaderProps} />);
		const instance = cellHeader.instance() as CSGridHeader;

		const secondColumn = new Column(colDef, null, 'colId2', true);
		const firstColumnDispatchEventMock = jest.fn();
		const secondColumnDispatchEventMock = jest.fn();

		(column as any).eventService.dispatchEvent = firstColumnDispatchEventMock;
		(secondColumn as any).eventService.dispatchEvent = secondColumnDispatchEventMock;

		// Get ag-grid to return two columns.
		instance.props.columnApi.getAllColumns = jest.fn().mockReturnValue([column, secondColumn]);

		await instance.onSortRequested({ shiftKey: false });

		expect(firstColumnDispatchEventMock.mock.calls.length).toEqual(0);
		expect(secondColumnDispatchEventMock.mock.calls.length).toEqual(1);
	});
});
