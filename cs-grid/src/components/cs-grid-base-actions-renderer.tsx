import { CSIcon } from '@cloudsense/cs-ui-components';
import * as KeyCode from 'keycode-js';
import React from 'react';

import { CSGridCellRendererState } from '../interfaces/cs-grid-base-interfaces';
import {
	ActionProps,
	CSGridAction,
	CSGridCellRendererProps,
	Icon,
	isStandardIcon
} from '../interfaces/cs-grid-cell-props';
import { onKeyPressInAList } from '../utils/cs-grid-on-key-press';
import { DefaultIcon, noOfVisibleButtons } from '../utils/cs-grid-row-selection-helper';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';

export interface CSGridBaseActionsRendererState<T> extends CSGridCellRendererState<T> {
	actions: Array<CSGridAction<T>>;
	noOfInlineIcons: number;
	useDropdown?: boolean;
}

export interface CSGridBaseActionsRendererProps<T>
	extends CSGridCellRendererProps<T>,
		ActionProps<T> {}

/**
 * A base class for all cell renderers that have action buttons.
 */
export abstract class CSGridBaseActionsRenderer<
	T,
	P extends CSGridBaseActionsRendererProps<T> = CSGridCellRendererProps<T>,
	S extends CSGridBaseActionsRendererState<T> = CSGridBaseActionsRendererState<T>
> extends CSGridBaseRenderer<T, P, S> {
	buttonRefs: Array<HTMLButtonElement> = [];
	dropdownRef: HTMLButtonElement;
	contentsRef: React.RefObject<HTMLSpanElement>;
	focusedIndex = 0;

	constructor(props: P) {
		super(props);
	}

	componentDidMount() {
		document.addEventListener('keydown', this.onKeyPress);

		if (this.state.noOfInlineIcons > 0) {
			setTimeout(() => {
				this.onColumnResized();
			});
		}
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyPress);
	}

	refresh = (params: P): boolean => {
		super.refresh(params);
		this.onColumnResized();

		return true;
	};

	Actions = () => {
		if (!this.props.getActions) {
			return null;
		}

		const colId = this.props.column.getId();

		const icons: Array<Icon> = [];
		if (this.state.noOfInlineIcons) {
			const noOfInlineIcons = Math.min(this.state.noOfInlineIcons, this.state.actions.length);

			for (let index = 0; index < noOfInlineIcons; index++) {
				const action = this.state.actions[index];

				const onClick = () => {
					this.props.api.stopEditing();
					action.action(this.props.node.id, this.state.value?.cellValue);
				};

				let icon = action.icon;
				if (!icon) {
					icon = <DefaultIcon />;
				} else if (isStandardIcon(icon)) {
					icon = <CSIcon name={icon.iconName} color={icon.color} />;
				}

				icons.push(
					<button
						className='row-selection-icons-item'
						key={action.name}
						onClick={onClick}
						ref={ref => (this.buttonRefs[index] = ref)}
						title={action.name}
						disabled={action.disabled}
						id={`icon-item-${this.props.node.id}-${colId}-${index}`}
					>
						<div className='cs-btn-icon'>{icon}</div>
					</button>
				);
			}
		}

		return (
			<div className='select-wrapper-actions'>
				{icons.length > 0 && icons}
				{this.state.useDropdown && this.state.actions.length > icons.length && (
					<button
						className='row-selection-icons-item row-selection-icons-item-menu'
						title='Row Actions'
						onClick={this.startEditing}
						ref={ref => (this.dropdownRef = ref)}
						id={`icon-item-${this.props.node.id}-${colId}-dropdown`}
					>
						<span
							id={`icon-menu-${this.props.node.id}-${colId}`}
							className='icon-menu'
						/>
					</button>
				)}
			</div>
		);
	};

	startEditing = async (): Promise<void> => {
		if (this.state.useDropdown) {
			this.props.colDef.editable = true;
		}

		const startEditingParams = {
			colKey: this.props.column.getId(),
			rowIndex: this.props.node.rowIndex
		};
		this.props.api.startEditingCell(startEditingParams);
	};

	private onKeyPress = (event: KeyboardEvent) => {
		const buttonRefs = this.buttonRefs.filter(
			ref => ref !== null && ref !== undefined && !ref.disabled
		);

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
				} else if (buttonRefs.length > 0) {
					this.focusedIndex = buttonRefs.length - 1;
					buttonRefs[this.focusedIndex].focus();
				} else {
					this.focusOnLastColumn();
				}
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
				event.keyCode === KeyCode.KEY_RIGHT
			) {
				if (buttonRefs.length > 0) {
					this.focusedIndex = 0;
					buttonRefs[this.focusedIndex].focus();
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
				if (buttonRefs.length > 0) {
					this.focusedIndex = buttonRefs.length - 1;
					buttonRefs[this.focusedIndex].focus();
				} else {
					this.focusOnLastColumn();
				}
			} else if (
				(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
				event.keyCode === KeyCode.KEY_RIGHT
			) {
				this.focusOnNextColumn();
			}
		} else if (buttonRefs.includes(event.target as HTMLButtonElement)) {
			event.preventDefault();
			this.focusedIndex = onKeyPressInAList(
				event,
				buttonRefs,
				this.focusedIndex,
				false,
				true,
				() =>
					this.state.actions
						.filter(action => !action.disabled)
						[this.focusedIndex].action(this.props.node.id, this.state.value?.cellValue)
			);

			if (this.focusedIndex >= buttonRefs.length) {
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

	private focusOnLastColumn = () => {
		const cols = this.props.columnApi.getAllDisplayedColumns();
		const lastCol = cols[cols.length - 1];
		this.props.api.setFocusedCell(this.props.node.rowIndex, lastCol);
	};

	private focusOnNextColumn = () => {
		const nextCol = this.props.columnApi.getDisplayedColAfter(this.props.column);
		this.props.api.setFocusedCell(this.props.node.rowIndex, nextCol);
	};

	private onColumnResized = () => {
		const maxNoOfInlineIcons = Math.min(
			this.props.noOfInlineIcons || 0,
			this.state.actions.length
		);

		const noOfInlineIcons = noOfVisibleButtons(
			`${this.props.node.id}-${this.props.column.getId()}`,
			this.props.column,
			maxNoOfInlineIcons,
			this.state.actions.length,
			this.state.useDropdown,
			this.contentsRef?.current?.offsetWidth || 50
		);

		if (noOfInlineIcons !== undefined && noOfInlineIcons !== this.state.noOfInlineIcons) {
			this.setState({
				noOfInlineIcons
			});
		}
	};
}
