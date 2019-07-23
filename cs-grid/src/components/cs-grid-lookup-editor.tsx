import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorProps
} from '../models/cs-grid-base-interfaces';
import CSGridCellError from './cs-grid-cell-error';
import CSGridHeader from './cs-grid-header';

export interface CSGridLookupSearchResult {
	columnDefs: Array<ColDef>;
	rowData: Array<Record<string, string>>;
}

export interface CSGridLookupEditorProps extends CSGridCellEditorProps<string | Array<string>> {
	minSearchTermLength: number;
	displayColumn: string;
	getLookupValues(searchTerm: string): Promise<CSGridLookupSearchResult>;
}

interface CSGridLookupEditorState {
	selected: Array<string>;
	searchTerm: string;
	columnDefs: Array<ColDef>;
	rowData: Array<Record<string, string>>;
	showGrid: boolean;
	value: CellData<string | Array<string>>;
}

export default class CSGridLookupEditor
	extends React.Component<CSGridLookupEditorProps, CSGridLookupEditorState>
	implements CSGridCellEditor {
	gridApi: GridApi;
	columnApi: ColumnApi;
	multiSelect: boolean = false;
	suppressSelection: boolean = false;

	constructor(props: CSGridLookupEditorProps) {
		super(props);

		const selected = Array.isArray(this.props.value.cellValue)
			? this.props.value.cellValue
			: [this.props.value.cellValue];
		this.state = {
			columnDefs: [],
			rowData: undefined,
			searchTerm: '',
			selected,
			showGrid: !this.props.minSearchTermLength,
			value: this.props.value
		};
	}

	async componentDidMount(): Promise<void> {
		if (!this.props.minSearchTermLength) {
			this.getLookupValues();
		}
	}

	isPopup = () => {
		return true;
	};

	getValue() {
		return this.state.value;
	}

	isCancelBeforeStart = () => {
		return false;
	};

	isCancelAfterEnd = () => {
		return false;
	};

	getLookupValues = async () => {
		this.suppressSelection = !this.multiSelect && this.state.selected.length > 0;

		const results: CSGridLookupSearchResult = await this.props.getLookupValues('');

		this.setState(
			{
				columnDefs: results.columnDefs,
				rowData: results.rowData,
				showGrid: true
			},
			() => {
				this.gridApi.forEachNode(node => {
					const row = node.data[this.props.displayColumn];

					if (this.state.selected.indexOf(row) > -1) {
						node.setSelected(true);
					}
				});
			}
		);
	};

	/* Grid Events we're listening to */
	onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		this.columnApi = params.columnApi;

		this.gridApi.sizeColumnsToFit();
	};

	onSelectionChanged = async (): Promise<void> => {
		if (this.suppressSelection) {
			this.suppressSelection = false;

			return;
		}

		let selected = [];
		const selectedRows = this.gridApi.getSelectedRows();
		if (!this.multiSelect) {
			selected = selectedRows[0] ? selectedRows[0][this.props.displayColumn] : '';
		} else {
			for (const row of selectedRows) {
				selected.push(row[this.props.displayColumn]);
			}
		}

		let value: CellData<string | Array<string>> = {
			cellValue: selected,
			errorMessage: this.state.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.getValue().cellValue,
				selected
			);
		}

		this.setState({ value }, () => {
			if (!this.multiSelect) {
				this.props.stopEditing();
			}
		});
	};

	updateSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchTerm = event.target.value;
		const showGrid =
			!this.props.minSearchTermLength || searchTerm.length >= this.props.minSearchTermLength;

		this.setState({
			searchTerm,
			showGrid
		});

		if (showGrid) {
			this.getLookupValues();
		}
	};

	render() {
		return (
			<div className='ag-theme-balham'>
				<div
					style={{
						display: 'inline-block',
						marginBottom: 10,
						marginTop: 10
					}}
				>
					<div style={{ float: 'right', marginLeft: 20, paddingRight: '2rem' }}>
						<input
							type='text'
							value={this.state.searchTerm}
							onChange={this.updateSearch}
							placeholder={
								'Search...' +
								(this.props.minSearchTermLength
									? ` (min ${this.props.minSearchTermLength} char)`
									: '')
							}
						/>
						<CSGridCellError errorMessage={this.state.value.errorMessage} />
					</div>
				</div>
				{this.state.showGrid && (
					<div style={{ height: '10rem', width: 300 }}>
						<AgGridReact
							overlayLoadingTemplate={'Searching...'}
							rowSelection={this.multiSelect ? 'multiple' : 'single'}
							rowMultiSelectWithClick={true}
							// listening for events
							onGridReady={this.onGridReady}
							onSelectionChanged={this.onSelectionChanged}
							columnDefs={this.state.columnDefs}
							rowData={this.state.rowData}
							// setting default column properties
							defaultColDef={{
								editable: false,
								filter: true,
								headerComponentFramework: CSGridHeader,
								resizable: true,
								sortable: true
							}}
						/>
					</div>
				)}
			</div>
		);
	}
}
