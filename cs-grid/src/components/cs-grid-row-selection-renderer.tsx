import * as KeyCode from 'keycode-js';
import React, { ReactNode } from 'react';

import { CSIcon } from '@cloudsense/cs-ui-components';
import { CSGridCellRenderer, CSGridCellRendererState } from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellRendererProps,
	Icon,
	isStandardIcon,
	RowSelectionAction,
	RowSelectionProps
} from '../interfaces/cs-grid-cell-props';
import { onKeyPressInAList } from '../utils/cs-grid-on-key-press';
import { DefaultIcon, noOfVisibleButtons } from '../utils/cs-grid-row-selection-helper';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';

interface CSGridRowSelectionRendererState extends CSGridCellRendererState<boolean> {
	actions: Array<RowSelectionAction>;
	noOfInlineIcons: number;
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
			noOfInlineIcons: this.props.noOfInlineIcons || 0,
			value: this.props.value
		};
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

	refresh = (): boolean => {
		this.onColumnResized();

		return true;
	};

	render = (): ReactNode => {
		if (!this.props.getActions) {
			return null;
		}

		const icons: Array<Icon> = [];
		if (this.state.noOfInlineIcons) {
			const noOfInlineIcons = Math.min(this.state.noOfInlineIcons, this.state.actions.length);
			for (let index = 0; index < noOfInlineIcons; index++) {
				const action = this.state.actions[index];

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
						onClick={action.action}
						ref={ref => (this.buttonRefs[index] = ref)}
						title={action.name}
						disabled={action.disabled}
						id={`icon-item-${this.props.node.id}-${index}`}
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
						className='row-selection-icons-item row-selection-icons-item-menu'
						title='Row Actions'
						onClick={this.startEditing}
						ref={ref => (this.dropdownRef = ref)}
						id={`icon-item-${this.props.node.id}-dropdown`}
					>
						<span id={`icon-menu-${this.props.node.id}`} className='icon-menu' />
					</button>
				)}
			</>
		);
	};

	startEditing = async (): Promise<void> => {
		this.props.colDef.editable = true;

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
						[this.focusedIndex].action()
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
			this.props.node.id,
			this.props.column,
			maxNoOfInlineIcons,
			this.state.actions.length
		);

		if (noOfInlineIcons !== undefined && noOfInlineIcons !== this.state.noOfInlineIcons) {
			this.setState({
				noOfInlineIcons
			});
		}
	};
}
