import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
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
	multiSelect: boolean = false;

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

	/* Grid Events we're listening to */
	onGridReady = (params: GridReadyEvent) => {
		this.gridApi = params.api;
		this.gridApi.sizeColumnsToFit();
	};

	render() {
		return (
			<div className='ag-theme-balham'>
				<div className='cs-grid_search-wrapper'>
					<div className='cs-grid_search'>
						<svg
							className='cs-grid_search-icon'
							xmlns='http://www.w3.org/2000/svg'
							width='14'
							height='14'
						>
							<path
								d='M13.02 11.84L9.38 8.22c.75-1.03 1.12-2.35.92-3.75C9.97 2.11 8.06.25 5.67.03 2.44-.3-.3 2.44.03 5.69c.22 2.35 2.09 4.3 4.43 4.63 1.4.2 2.7-.2 3.75-.92l3.64 3.64c.15.15.42.15.57 0l.58-.57c.18-.19.18-.46.02-.63zM1.65 5.16c0-1.93 1.58-3.53 3.53-3.53s3.53 1.58 3.53 3.53S7.14 8.7 5.19 8.7 1.65 7.14 1.65 5.16z'
								fill='#b0adab'
							/>
						</svg>
						<input
							className='cs-grid_search-input'
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
						{this.state.searchTerm && (
							<button className='cs-grid_clear-button' onClick={this.clearFilter}>
								<svg
									className='cs-grid_clear-icon'
									xmlns='http://www.w3.org/2000/svg'
									width='16'
									height='16'
									viewBox='0 0 52 52'
								>
									<path d='m31 25.4l13-13.1c0.6-0.6 0.6-1.5 0-2.1l-2-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.1-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13-13.1c-0.4-0.4-0.4-1 0-1.4z' />
								</svg>
							</button>
						)}
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

	private getLookupValues = async () => {
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
						node.setSelected(true, false, true);
					}
				});
			}
		);
	};

	private onSelectionChanged = async (): Promise<void> => {
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

	private updateSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
		await this.search(event.target.value);
	};

	private clearFilter = async () => {
		await this.search('');
	};

	private search = async (searchTerm: string) => {
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
}
