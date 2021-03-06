import React, { useState, useMemo } from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { CSTableColumn, CSTableRow, CSTable } from '../src/CSTable';
import { CSTablePaginationControls } from '../src/CSTablePaginationControls';
import '../src/sass/style.scss';
import NGC from './ngc.json';
import { useArrayPagination } from '../src/usePagination';
import { CSSelectableTable } from '../src/CSSelectableTable';
import { useQuickFilter } from '../src/useQuickFilter';
import { useAdvancedSelection, AdvancedSelector } from '../src/useAdvancedSelection';
const COLS: Array<CSTableColumn> = [
	{
		name: 'name',
		label: 'Name'
	},
	{
		name: 'Class',
		label: 'Class'
	},
	{
		name: 'Constel',
		label: 'Constellation'
	},
	{
		name: 'raH',
		label: 'Right Ascension (Hours)'
	},
	{
		name: 'raM',
		label: 'Right Ascension (Minutes)'
	},
	{
		name: 'decD',
		label: 'Declination (Degrees)'
	},
	{
		name: 'decM',
		label: 'Declination (Minutes)'
	}
];

const ROWS: Array<CSTableRow> = Object.entries(NGC).map(([name, data]) => {
	return {
		id: name,
		data: {
			values: { ...data as Record<string, any>, name }
		}
	};
});

export default {
	title: 'CSTable',
	component: CSTable,
	decorators: [withKnobs]
};

export const SimpleTable = () => <span className="cs-entire-table-wrapper">
		<CSTable cols={COLS} rows={ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }))}/>
	</span>;
export const TableWithPagination = () => {
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(number('Page size', 10, { range: true, min: 1, max: _rows.length, step: 1 }), _rows);
	return <span className="cs-entire-table-wrapper">
		<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
		<CSTable rows={pageContents} cols={COLS} />
	</span>;
};

export const TableWithQuickfilter = () => {
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { term, setTerm, filteredRows } = useQuickFilter(_rows, (row, t) => {
		return row.data.values.Constel.toLowerCase().includes(t.toLowerCase());
	});
	return <span className="cs-entire-table-wrapper">
			<span className="table-filter-wrapper">
				<input type="text" placeholder="Filter by constellation" className="table-filter" value={term} onChange={e => setTerm(e.target.value)} />
			</span>
			<CSTable rows={filteredRows} cols={COLS} />
		</span>;
};

export const TableWithQuickfilterAndPagination = () => {
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { term, setTerm, filteredRows } = useQuickFilter(_rows, (row, t) => {
		return row.data.values.Constel.toLowerCase().includes(t.toLowerCase());
	});
	const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(number('Page size', 10, { range: true, min: 1, max: filteredRows.length, step: 1 }), filteredRows);
	return <span className="cs-entire-table-wrapper">
		<span className="table-filter-wrapper">
			<input type="text" placeholder="Filter by constellation" className="table-filter" value={term} onChange={e => setTerm(e.target.value)} />
		</span>
		<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
		<CSTable rows={pageContents} cols={COLS} />
	</span>;
};

export const SelectableTable = () => {
	const [selected, setSelected] = useState(new Set<string>());
	// tslint:disable-next-line: max-line-length
	return <span className="cs-entire-table-wrapper">
		<CSSelectableTable 
			selectedRows={selected} 
			selectionChanged={setSelected} 
			cols={COLS} 
			rows={ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }))} />
	</span>;
};
export const SelectableTableWithPagination = () => {
	const [selected, setSelected] = useState(new Set<string>());
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(number('Page size', 10, { range: true, min: 1, max: _rows.length, step: 1 }), _rows);
	return <span className="cs-entire-table-wrapper">
		<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
		<CSSelectableTable selectedRows={selected} selectionChanged={setSelected} rows={pageContents} cols={COLS} />
	</span>;
};

export const SelectableTableWithQuickfilter = () => {
	const [selected, setSelected] = useState(new Set<string>());
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { term, setTerm, filteredRows } = useQuickFilter(_rows, (row, t) => {
		return row.data.values.Constel.toLowerCase().includes(t.toLowerCase());
	});
	return <span className="cs-entire-table-wrapper">
		<span className="table-filter-wrapper">
			<input type="text" placeholder="Filter by constellation" className="table-filter"value={term} onChange={e => setTerm(e.target.value)} />
		</span>
		<CSSelectableTable selectedRows={selected} selectionChanged={setSelected} rows={filteredRows} cols={COLS} />
	</span>;
};

export const SelectableTableWithQuickfilterAndPagination = () => {
	const [selected, setSelected] = useState(new Set<string>());
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { term, setTerm, filteredRows } = useQuickFilter(_rows, (row, t) => {
		return row.data.values.Constel.toLowerCase().includes(t.toLowerCase());
	});
	const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(number('Page size', 10, { range: true, min: 1, max: filteredRows.length, step: 1 }), filteredRows);
	return <span className="cs-entire-table-wrapper">
		<span className="table-filter-wrapper">
			<input type="text" placeholder="Filter by constellation" className="table-filter" value={term} onChange={e => setTerm(e.target.value)} />
		</span>
		<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
		<CSSelectableTable selectedRows={selected} selectionChanged={setSelected} rows={pageContents} cols={COLS} />
	</span>;
};

export const SelectableTableWithQuickfilterPaginationAndAdvancedSelect = () => {

	const advancedSelectionData:AdvancedSelector = {
		'All': (row, index) => true,
		'None': (row, index) => false,
		'Galaxy class': (row, index) => row.data.values.Class === 'Galaxy',
		'Cas constellation': (row, index) => row.data.values.Constel === 'Cas',
	}

	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const { term, setTerm, filteredRows } = useQuickFilter(_rows, (row, t) => {
		return row.data.values.Constel.toLowerCase().includes(t.toLowerCase());
	});

	const {selected, setSelected, advancedSelectionChanged} = useAdvancedSelection(filteredRows, advancedSelectionData);

	const advancedSelection = {
		labels: Object.keys(advancedSelectionData),
		onChange: advancedSelectionChanged,
		onAdvancedDropdownExpand: () => {console.log("Expanded")},
		onAdvancedDropdownCollapse: () => {console.log("Collapsed")},
	}


	const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(number('Page size', 10, { range: true, min: 1, max: filteredRows.length, step: 1 }), filteredRows);
	return <span className="cs-entire-table-wrapper">
		<span className="table-filter-wrapper">
			<input type="text" placeholder="Filter by constellation" className="table-filter" value={term} onChange={e => setTerm(e.target.value)} />
		</span>
		<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
		<CSSelectableTable selectedRows={selected} selectionChanged={(selection) => {setSelected(selection)}} rows={pageContents} cols={COLS} advancedSelection={advancedSelection} />
	</span>;
};

export const TableWithFullWidthRows = () => {
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const rows = _rows.reduce((acc, curr) => {
		acc.push(curr);
		acc.push({
			id: curr.id + '-desc',
			data: curr.data,
			fullWidth: true
		});
		return acc;
	}, []);
	return <span className="cs-entire-table-wrapper">
		<CSTable rows={rows} cols={COLS} renderFullWidth={row => <code>{row.values.desc}</code>} />
	</span>;
};

export const TableWithCustomRenderer = () => {
	const _rows = ROWS.slice(0, number('No. of records', ROWS.length, { range: true, min: 0, max: ROWS.length, step: 1 }));
	const cols: Array<CSTableColumn> = [
		{
			name: 'name',
			label: 'Name',
			render: (_, data) => <a href={`https://en.wikipedia.org/wiki/${data.values.name.replace('C', 'C_')}`} target="_blank">{data.values.name}</a>
		},
		...COLS.slice(1)
	];
	return <span className="cs-entire-table-wrapper">
		<CSTable rows={_rows} cols={cols} />
	</span>;
};
