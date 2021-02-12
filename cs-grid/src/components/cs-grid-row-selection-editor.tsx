import React from 'react';

import { CSButton, CSDropdown, CSIcon } from '@cloudsense/cs-ui-components';
import { CSGridCellEditor, CSGridCellEditorState } from '../interfaces/cs-grid-base-interfaces';
import {
	ActionProps,
	CSGridAction,
	CSGridCellEditorProps,
	isStandardIcon
} from '../interfaces/cs-grid-cell-props';
import { onKeyPressInAList } from '../utils/cs-grid-on-key-press';
import { noOfVisibleButtons } from '../utils/cs-grid-row-selection-helper';

interface CSGridRowSelectionEditorState extends CSGridCellEditorState<boolean> {
	actions: Array<CSGridAction<boolean>>;
}

export class CSGridRowSelectionEditor
	extends React.Component<
		CSGridCellEditorProps<boolean> & ActionProps<boolean>,
		CSGridRowSelectionEditorState
	>
	implements CSGridCellEditor {
	dropDownRefs: Array<HTMLButtonElement> = [];
	focusedIndex = 0;
	contentsRef: React.RefObject<HTMLSpanElement>;

	constructor(props: CSGridCellEditorProps<boolean> & ActionProps<boolean>) {
		super(props);

		const actions = this.props.getActions(this.props.node.id);

		let start = this.props.noOfInlineIcons || 0;
		const maxNoOfInlineIcons = Math.min(this.props.noOfInlineIcons, actions.length);

		if (this.props.noOfInlineIcons !== undefined) {
			start = noOfVisibleButtons(
				`${this.props.node.id}-${this.props.column.getId()}`,
				this.props.column,
				maxNoOfInlineIcons,
				actions.length,
				true,
				this.contentsRef?.current?.offsetWidth
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

			const grid = document.querySelectorAll(
				`.cs-grid_app-wrapper .cs-grid_main .ag-root-wrapper`
			)[0];

			if (popupWrapper && iconMenu && grid) {
				const currentTop = parseInt(popupWrapper.style.top.slice(0, -2), 10);
				popupWrapper.style.top = `${this.props.node.rowHeight + currentTop}px`;
				popupWrapper.style.left = `${iconMenu.getBoundingClientRect().left -
					grid.getBoundingClientRect().left +
					12}px`;
			}

			const dropDownRefs = this.dropDownRefs.filter(
				ref => ref !== null && ref !== undefined && !ref.disabled
			);

			if (dropDownRefs[0]) {
				dropDownRefs[0].focus();
			}
		}, 50);

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
		const dropDownValues: Array<React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>> = [];

		for (const [index, action] of this.state.actions.entries()) {
			const selectAction = () => this.actionSelected(action.action);

			if (action.icon) {
				if (isStandardIcon(action.icon)) {
					dropDownValues.push(
						<CSButton
							label={action.name}
							key={action.name}
							onClick={selectAction}
							disabled={action.disabled}
							color={action.color}
							size={action.size}
							btnType={action.btnType}
							btnStyle={action.btnStyle}
							iconName={action.icon.iconName}
							iconColor={action.icon.color ? action.icon.color : null}
							iconOrigin={action.icon.iconOrigin}
							ref={(ref: HTMLButtonElement) => (this.dropDownRefs[index] = ref)}
							id={`row-selection-list-item-${action.name}`}
						/>
					);
				} else {
					dropDownValues.push(
						<CSButton
							label={action.name} // labelHidden prop needs to be added here after it's available in csui
							key={action.name}
							onClick={selectAction}
							disabled={action.disabled}
							color={action.color}
							size={action.size}
							btnType={action.btnType}
							btnStyle={action.btnStyle}
							ref={(ref: HTMLButtonElement) => (this.dropDownRefs[index] = ref)}
							id={`row-selection-list-item-${action.name}`}
						>
							{action.icon}
						</CSButton>
					);
				}
			} else {
				dropDownValues.push(
					<CSButton
						label={action.name}
						key={action.name}
						onClick={selectAction}
						ref={(ref: HTMLButtonElement) => (this.dropDownRefs[index] = ref)}
						disabled={action.disabled}
						color={action.color}
						size={action.size}
						btnType={action.btnType}
						btnStyle={action.btnStyle}
						id={`row-selection-list-item-${action.name}`}
					/>
				);
			}
		}

		return <CSDropdown defaultOpen={true}>{dropDownValues}</CSDropdown>;
	}

	private actionSelected = (action: (guid: string, currentValue: any) => void) => {
		action(this.props.node.id, this.state.value?.cellValue);
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
