import { CSPicklist, CSPicklistOptionInterface } from '@cloudsense/cs-ui-components';
import React from 'react';

import {
	CellData,
	CSGridCellEditor,
	CSGridCellEditorState
} from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	PicklistOption,
	PicklistProps
} from '../interfaces/cs-grid-cell-props';

type PicklistCellValueType = PicklistOption | Array<PicklistOption>;

interface CSGridPicklistEditorState extends CSGridCellEditorState<PicklistCellValueType> {
	options: Array<PicklistOption>;
}

export class CSGridPicklistEditor
	extends React.Component<
		CSGridCellEditorProps<PicklistCellValueType> & PicklistProps,
		CSGridPicklistEditorState
	>
	implements CSGridCellEditor {
	multiSelect: boolean = false;
	private divRef: React.RefObject<HTMLDivElement>;

	constructor(props: CSGridCellEditorProps<PicklistCellValueType> & PicklistProps) {
		super(props);

		this.divRef = React.createRef();

		const options = this.props.getOptions(this.props.node.id);
		this.state = {
			options,
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

	afterGuiAttached() {
		const outerColumnWidth = this.props.column.getActualWidth();
		const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
			'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
		)[0];

		if (popupWrapper) {
			const currentWidth = popupWrapper.getBoundingClientRect().width;
			const newWidth = Math.max(currentWidth, outerColumnWidth);

			popupWrapper.style.width = `${newWidth}px`;
			popupWrapper.style.maxWidth = `${newWidth}px`;
		}
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

	picklistValueKeys = (values: PicklistCellValueType) => {
		if (Array.isArray(values)) {
			return values.map((value: PicklistOption) => value.key);
		}

		return values?.key;
	};

	render() {
		const dropdownActions = this.props.getDropdownActions?.();

		return (
			<div className='ag-theme-balham' ref={this.divRef}>
				<CSPicklist
					clearable={true}
					dropdownActions={dropdownActions}
					label='Search'
					labelHidden={true}
					showCompactMultiselect={true}
					gridCustomPopup={true}
					placeholder='Search...'
					onSelect={this.handleChange}
					onDeselect={this.handleChange}
					onDropdownClose={this.props.stopEditing}
					multiselect={this.multiSelect}
					options={this.state.options}
					selectedKeys={this.picklistValueKeys(this.state.value.cellValue)}
					onClear={() =>
						this.setState({
							value: {
								cellValue: []
							}
						})
					}
					ref={(ref: any) => {
						if (ref) {
							setTimeout(() => {
								ref.focus();
							}, 20);
						}
					}}
				/>
			</div>
		);
	}

	private handleChange = (option: CSPicklistOptionInterface) => {
		if (this.multiSelect) {
			const currentCellValue = this.state.value.cellValue;
			const newCellValue = Array.isArray(currentCellValue)
				? currentCellValue
				: [currentCellValue];
			const prevIndex = newCellValue.findIndex(
				(prevCellValue: PicklistOption) => prevCellValue.key === option.key
			);
			if (prevIndex >= 0) {
				newCellValue.splice(prevIndex, 1);
			} else {
				newCellValue.push(option as PicklistOption);
			}

			const newValue = {
				cellValue: [...newCellValue],
				errorMessage: this.state.value.errorMessage
			};

			this.setState({ value: newValue }, () => {
				this.onChange(this.state.value);
			});
		} else {
			const newValue = {
				cellValue: option as PicklistOption,
				errorMessage: this.state.value.errorMessage
			};

			this.setState({ value: newValue }, () => {
				this.onChange(this.state.value);
				this.props.stopEditing();
			});
		}
	};

	private onChange = async (value: CellData<PicklistCellValueType>) => {
		const newValue = await this.props.onChange?.(
			this.props.node.id,
			this.state.value.cellValue,
			value.cellValue
		);

		if (newValue) {
			this.setState({ value: newValue });
		}
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
