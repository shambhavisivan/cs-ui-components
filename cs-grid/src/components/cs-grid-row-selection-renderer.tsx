import * as KeyCode from 'keycode-js';
import React, { ReactNode } from 'react';

import { CSGridCellRenderer, CSGridCellRendererState } from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellRendererProps,
	RowSelectionAction,
	RowSelectionProps
} from '../interfaces/cs-grid-cell-props';
import { onKeyPressInAList } from '../utils/cs-grid-on-key-press';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';

interface CSGridRowSelectionRendererState extends CSGridCellRendererState<boolean> {
	actions: Array<RowSelectionAction>;
}

export class CSGridRowSelectionRenderer
	extends CSGridBaseRenderer<
		boolean,
		CSGridCellRendererProps<boolean> & RowSelectionProps,
		CSGridRowSelectionRendererState
	>
	implements CSGridCellRenderer {
	buttonRefs: Array<HTMLButtonElement> = [];
	dropdownRef: HTMLButtonElement;
	focusedIndex = 0;

	constructor(props: CSGridCellRendererProps<boolean> & RowSelectionProps) {
		super(props);

		this.state = {
			actions: this.props.getActions ? this.props.getActions(this.props.node.id) : [],
			isLastColumn: this.isLastColumn(),
			value: this.props.value
		};
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyPress);
	}

	refresh = (): boolean => {
		return true;
	};

	render = (): ReactNode => {
		if (!this.props.getActions) {
			return null;
		}

		const icons = [];
		if (this.props.noOfInlineIcons) {
			for (let index = 0; index < this.props.noOfInlineIcons; index++) {
				const action = this.state.actions[index];

				let icon = action.icon;
				if (!icon) {
					icon = <span className='icon-bolt' aria-hidden='true' />;
				}

				icons.push(
					<button
						className='row-selection-icons-item'
						key={action.name}
						onClick={action.action}
						ref={ref => (this.buttonRefs[index] = ref)}
						title={action.name}
						disabled={action.disabled}
					>
						<div className='cs-btn-icon'>{icon}</div>
					</button>
				);
			}
		}

		return (
			<>
				{icons.length > 0 && icons}
				{this.state.actions.length > icons.length && (
					<button
						className='row-selection-icons-item'
						title='Row Actions'
						onClick={this.startEditing}
						ref={ref => (this.dropdownRef = ref)}
					>
						<span className='icon-menu' />
					</button>
				)}
			</>
		);
	};

	startEditing = async (): Promise<void> => {
		this.props.colDef.editable = true;

		const startEditingParams = {
			colKey: this.props.column.getId(),
			rowIndex: this.props.rowIndex
		};
		this.props.api.startEditingCell(startEditingParams);
	};

	private onKeyPress = (event: KeyboardEvent) => {
		if (event.target === this.props.eGridCell) {
			event.preventDefault();
			if (event.keyCode === KeyCode.KEY_ENTER || event.keyCode === KeyCode.KEY_RETURN) {
				this.startEditing();
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && event.shiftKey) ||
				event.keyCode === KeyCode.KEY_LEFT
			) {
				if (this.dropdownRef) {
					this.dropdownRef.focus();
				} else if (this.buttonRefs.length > 0) {
					this.focusedIndex = this.buttonRefs.length - 1;
					this.buttonRefs[this.focusedIndex].focus();
				} else {
					this.focusOnLastColumn();
				}
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
				event.keyCode === KeyCode.KEY_RIGHT
			) {
				if (this.buttonRefs.length > 0) {
					this.focusedIndex = 0;
					this.buttonRefs[this.focusedIndex].focus();
				} else if (this.dropdownRef) {
					this.dropdownRef.focus();
				} else {
					this.focusOnNextColumn();
				}
			}
		} else if (event.target === this.dropdownRef) {
			event.preventDefault();
			if (event.keyCode === KeyCode.KEY_ENTER || event.keyCode === KeyCode.KEY_RETURN) {
				this.startEditing();
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && event.shiftKey) ||
				event.keyCode === KeyCode.KEY_LEFT
			) {
				if (this.buttonRefs.length > 0) {
					this.focusedIndex = this.buttonRefs.length - 1;
					this.buttonRefs[this.focusedIndex].focus();
				} else {
					this.focusOnLastColumn();
				}
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
				event.keyCode === KeyCode.KEY_RIGHT
			) {
				this.focusOnNextColumn();
			}
		} else if (this.buttonRefs.includes(event.target as HTMLButtonElement)) {
			event.preventDefault();
			this.focusedIndex = onKeyPressInAList(
				event,
				this.buttonRefs,
				this.focusedIndex,
				false,
				true,
				() => this.state.actions[this.focusedIndex].action()
			);

			if (this.focusedIndex >= this.props.noOfInlineIcons) {
				if (this.dropdownRef) {
					this.dropdownRef.focus();
				} else {
					this.focusOnNextColumn();
				}
			} else if (this.focusedIndex < 0) {
				this.focusOnLastColumn();
			}
		}
	};

	private focusOnLastColumn() {
		const cols = this.props.columnApi.getAllDisplayedColumns();
		const lastCol = cols[cols.length - 1];
		this.props.api.setFocusedCell(this.props.rowIndex, lastCol);
	}

	private focusOnNextColumn() {
		const nextCol = this.props.columnApi.getDisplayedColAfter(this.props.column);
		this.props.api.setFocusedCell(this.props.rowIndex, nextCol);
	}
}
