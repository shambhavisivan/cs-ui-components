import React from 'react';

import { CSIcon } from '@cloudsense/cs-ui-components';
import { CSGridCellEditor, CSGridCellEditorState } from '../interfaces/cs-grid-base-interfaces';
import {
	CSGridCellEditorProps,
	isStandardIcon,
	RowSelectionAction,
	RowSelectionProps
} from '../interfaces/cs-grid-cell-props';
import { onKeyPressInAList } from '../utils/cs-grid-on-key-press';
import { DefaultIcon, noOfVisibleButtons } from '../utils/cs-grid-row-selection-helper';

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
	focusedIndex = 0;

	constructor(props: CSGridCellEditorProps<boolean> & RowSelectionProps) {
		super(props);

		const actions = this.props.getActions(this.props.node.id);

		let start = this.props.noOfInlineIcons || 0;
		const maxNoOfInlineIcons = Math.min(this.props.noOfInlineIcons, actions.length);

		if (this.props.noOfInlineIcons !== undefined) {
			start = noOfVisibleButtons(
				this.props.node.id,
				this.props.column,
				maxNoOfInlineIcons,
				actions.length
			);
		}

		this.state = {
			actions: actions.slice(start, actions.length),
			value: this.props.value
		};
	}

	componentDidMount() {
		// Moves the popup to below the ellipsis.
		setTimeout(() => {
			const popupWrapper: HTMLElement = document.querySelectorAll<HTMLElement>(
				'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor'
			)[0];

			const iconMenu: HTMLElement = document.querySelectorAll<HTMLElement>(
				`.cs-grid_app-wrapper .cs-grid_main .ag-react-container #icon-menu-${this.props.node.id}`
			)[0];

			if (popupWrapper && iconMenu) {
				const currentTop = parseInt(popupWrapper.style.top.slice(0, -2), 10);
				popupWrapper.style.top = `${this.props.node.rowHeight + currentTop}px`;
				popupWrapper.style.left = `${iconMenu.getBoundingClientRect().left + 6}px`;
			}

			const rowSelectionList: HTMLElement = document.querySelectorAll<HTMLElement>(
				'.cs-grid_app-wrapper .cs-grid_main .ag-popup-editor .row-selection-list'
			)[0];

			if (rowSelectionList) {
				rowSelectionList.style.display = 'flex';
			}

			const dropDownRefs = this.dropDownRefs.filter(
				ref => ref !== null && ref !== undefined && !ref.disabled
			);

			if (dropDownRefs[0]) {
				dropDownRefs[0].focus();
			}
		});

		document.addEventListener('keydown', this.onKeyPress);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.onKeyPress);
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

			let icon = action.icon;
			if (icon && isStandardIcon(icon)) {
				icon = <CSIcon name={icon.iconName} color={icon.color} />;
			} else if (!icon && showIcons) {
				icon = <DefaultIcon />;
			}

			dropDownValues.push(
				<button
					className='row-selection-list-item'
					key={action.name}
					id={`row-selection-list-item-${action.name}`}
					onClick={selectAction}
					ref={ref => (this.dropDownRefs[index] = ref)}
					disabled={action.disabled}
				>
					{showIcons && <div className='row-selection-icon-wrapper'>{icon}</div>}
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

	private onKeyPress = (event: KeyboardEvent) => {
		const dropDownRefs = this.dropDownRefs.filter(
			ref => ref !== null && ref !== undefined && !ref.disabled
		);

		this.focusedIndex = onKeyPressInAList(
			event,
			dropDownRefs,
			this.focusedIndex,
			true,
			false,
			() =>
				this.actionSelected(
					this.state.actions.filter(action => !action.disabled)[this.focusedIndex].action
				)
		);
	};
}
