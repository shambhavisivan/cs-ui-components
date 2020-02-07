import * as KeyCode from 'keycode-js';
import React from 'react';

import { CSGridCellEditor, CSGridCellEditorState } from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	RowSelectionAction,
	RowSelectionProps
} from '../interfaces/cs-grid-cell-props';

interface CSGridRowSelectionEditorState extends CSGridCellEditorState<boolean> {
	actions: Array<RowSelectionAction>;
}

export class CSGridRowSelectionEditor
	extends React.Component<
		CSGridCellEditorProps<boolean> & RowSelectionProps,
		CSGridRowSelectionEditorState
	>
	implements CSGridCellEditor {
	dropDownRefs: Array<HTMLButtonElement> = [];
	rowSelectionEditorRef = React.createRef();
	focusedIndex = 0;

	constructor(props: CSGridCellEditorProps<boolean> & RowSelectionProps) {
		super(props);

		this.state = {
			actions: this.props.getActions(this.props.node.id),
			value: this.props.value
		};
	}

	componentDidMount() {
		// Moves the popup to below the ellipsis.
		setTimeout(() => {
			const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
				'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
			)[0];

			if (popupWrapper) {
				const currentTop = parseInt(popupWrapper.style.top.slice(0, -2), 10);
				popupWrapper.style.top = `${this.props.node.rowHeight + currentTop}px`;
				popupWrapper.style.left = `${this.props.colDef.width - 30}px`;
			}

			const rowSelectionList: HTMLElement = document.querySelectorAll<HTMLElement>(
				'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor .row-selection-list'
			)[0];

			if (rowSelectionList) {
				rowSelectionList.style.display = 'flex';
			}

			if (this.dropDownRefs[0]) {
				this.dropDownRefs[0].focus();
			}
		});

		document.addEventListener('keydown', this.onTabPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onTabPress);
	}

	isPopup = () => {
		return true;
	};

	isCancelAfterEnd = () => {
		this.props.colDef.editable = false;

		return true;
	};

	/**
	 * Returns the current value - required by ag-grid.
	 */
	getValue() {
		return this.state.value;
	}

	render() {
		const dropDownValues: Array<
			React.DetailedHTMLProps<
				React.ButtonHTMLAttributes<HTMLButtonElement>,
				HTMLButtonElement
			>
		> = [];

		const showIcons = this.state.actions.some(action => action.icon);

		for (const [index, action] of this.state.actions.entries()) {
			const selectAction = () => this.actionSelected(action.action);
			dropDownValues.push(
				<button
					className='row-selection-list-item'
					key={action.name}
					id={`row-selection-list-item-${action.name}`}
					onClick={selectAction}
					ref={ref => (this.dropDownRefs[index] = ref)}
				>
					{showIcons && <div className='row-selection-icon-wrapper'>{action.icon}</div>}
					<div className='row-selection-name-wrapper'>{action.name}</div>
				</button>
			);
		}

		return (
			<div className='cs-grid_popup-wrapper'>
				<div className='row-selection-list'>{dropDownValues}</div>
			</div>
		);
	}

	private actionSelected = (action: () => void) => {
		action();
		this.props.stopEditing();
	};

	private onTabPress = (event: KeyboardEvent) => {
		if (
			(event.keyCode === KeyCode.KEY_TAB && event.shiftKey) ||
			event.keyCode === KeyCode.KEY_UP
		) {
			event.preventDefault();
			this.focusedIndex =
				(this.focusedIndex - 1 + this.dropDownRefs.length) % this.dropDownRefs.length;
			this.dropDownRefs[this.focusedIndex].focus();
		} else if (
			(event.keyCode === KeyCode.KEY_TAB && !event.shiftKey) ||
			event.keyCode === KeyCode.KEY_DOWN
		) {
			event.preventDefault();
			this.focusedIndex =
				(this.focusedIndex + 1 + this.dropDownRefs.length) % this.dropDownRefs.length;
			this.dropDownRefs[this.focusedIndex].focus();
		} else if (event.keyCode === KeyCode.KEY_ENTER || event.keyCode === KeyCode.KEY_RETURN) {
			event.preventDefault();
			this.actionSelected(this.state.actions[this.focusedIndex].action);
		}
	};
}
