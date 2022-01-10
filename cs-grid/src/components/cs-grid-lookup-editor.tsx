import { CSDataTableRowInterface, CSLookup } from '@cloudsense/cs-ui-components';
import { GridApi } from 'ag-grid-community';

import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellEditorProps, PaginatedLookupProps } from '../interfaces/cs-grid-cell-props';
import {
	formatRows,
	replaceAll,
	replacementString
} from '../utils/cs-grid-lookup-formatting-helper';

/**
 * selected - A list of display column values for the selected rows.
 * columnDefs - The column definitions returned from the getLookupValues call.
 */
interface CSGridLookupEditorState
	extends CSGridCellEditorState<Array<CSDataTableRowInterface> | CSDataTableRowInterface> {
	selected: Array<CSDataTableRowInterface>;
	columnDefs: Array<{ key: string; header: string }>;
	guidColumn: string;
}

// TODO: autofocus on search box => done
// TODO: fix onChange not called at first attempt bug
// TODO: remove excessive console logging => done
// TODO: better logic for stopEditing() => done
// TODO: keyboard navigation => done
// TODO: value not set when Enter pressed => done
// TODO: recreate unit tests
// TODO: tab should close lookup editor and move to the next cell

/**
 * A cell editor that displays lookup results in the form of an ag-grid table with selectable rows.
 */
export class CSGridLookupEditor
	extends React.Component<
		CSGridCellEditorProps<Array<CSDataTableRowInterface> | CSDataTableRowInterface> &
			PaginatedLookupProps,
		CSGridLookupEditorState
	>
	implements CSGridCellEditor
{
	multiSelect: boolean = false;

	gridApi: GridApi;
	lookupInputRef: HTMLInputElement;
	private divRef: React.RefObject<HTMLDivElement>;

	constructor(
		props: CSGridCellEditorProps<Array<CSDataTableRowInterface> | CSDataTableRowInterface> &
			PaginatedLookupProps
	) {
		super(props);

		this.divRef = React.createRef();

		const selected = Array.isArray(this.props.value.cellValue)
			? this.props.value.cellValue
			: [this.props.value.cellValue];

		const guidColumn = this.props.guidColumn.replace(new RegExp(/\./, 'g'), replacementString);

		this.state = {
			columnDefs: [],
			guidColumn,
			selected: formatRows(selected, '\\.', replacementString),
			value: this.props.value
		};
	}

	isCancelBeforeStart() {
		document.addEventListener('click', this.handleOutsideClick);

		return false;
	}

	isCancelAfterEnd() {
		document.removeEventListener('click', this.handleOutsideClick);

		return false;
	}

	isPopup = () => {
		return true;
	};

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	render() {
		return (
			<div className='ag-theme-balham' ref={this.divRef}>
				<CSLookup
					gridCustomPopup={true}
					autoFocus={true}
					mode='server'
					labelHidden={true}
					label='Search'
					columns={this.state.columnDefs ?? []}
					fetchOptions={this.fetchValues}
					fieldToBeDisplayed={this.props.displayColumn}
					onSelectChange={this.onChange}
					onDropdownClose={this.props.stopEditing}
					pageSize={1000}
					infiniteScroll={true}
					multiselect={this.multiSelect}
					value={this.state.value.cellValue}
					minTermLength={this.props.minSearchTermLength}
					ref={(ref) => {
						if (ref) {
							setTimeout(() => {
								if (ref.lookupInputRef.current) {
									ref.lookupInputRef.current.focus();
								}
							}, 0);
						}
					}}
				/>
			</div>
		);
	}

	private fetchValues = async (
		searchTerm: any,
		pageSize: any,
		pageNo: any
	): Promise<{
		records: Array<CSDataTableRowInterface>;
		moreRecords: boolean;
	}> => {
		const results = await this.props.getLookupValues(
			searchTerm,
			this.props.node.id,
			pageSize,
			pageNo
		);
		const formattedRows = formatRows(results.records, '\\.', replacementString);
		const columnDefs = results.columnDefs.map((columnDef: { key: string; label: any }) => ({
			header: columnDef.label,
			key: columnDef.key.replace(new RegExp('\\.', 'g'), replacementString)
		}));
		this.setState({ columnDefs });

		return {
			moreRecords: results.moreRecords,
			records: formattedRows
		};
	};

	private onChange = async (
		cellValue: CSDataTableRowInterface | Array<CSDataTableRowInterface>
	) => {
		console.warn('onChange()', cellValue);
		let value: CellData<Array<CSDataTableRowInterface> | CSDataTableRowInterface> = {
			cellValue,
			errorMessage: this.state.value.errorMessage
		};
		if (this.props.onChange) {
			value = await this.props.onChange(
				this.props.node.id,
				this.state.value.cellValue,
				cellValue
			);
		}

		if (Array.isArray(value.cellValue)) {
			value.cellValue = formatRows(value.cellValue, '\\.', replacementString);
		} else {
			if (value.cellValue) {
				value.cellValue = replaceAll(value.cellValue, '\\.', replacementString);
			}
		}
		this.setState({ value });

		return true;
	};

	private handleOutsideClick = (event: MouseEvent) => {
		const node = event.target as HTMLElement;
		const autoposition = document.getElementById('cs-autoposition-root');

		if (
			this.divRef.current &&
			!this.divRef.current.contains(node) &&
			autoposition &&
			!autoposition.contains(node)
		) {
			this.props.stopEditing();
		}
	};
}
