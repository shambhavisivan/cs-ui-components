import { CSButton, CSButtonGroup, CSDropdown, CSTooltip } from '@cloudsense/cs-ui-components';
import React from 'react';

import { CSGridCellRendererState } from '../interfaces/cs-grid-base-interfaces';
import {
	ActionProps,
	CSGridAction,
	CSGridCellRendererProps,
	Icon,
	isStandardIcon
} from '../interfaces/cs-grid-cell-props';
import { noOfVisibleButtons } from '../utils/cs-grid-row-selection-helper';
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
	contentsRef: React.RefObject<HTMLSpanElement>;
	focusedIndex = 0;
	dropdownBtnRef: Array<HTMLButtonElement> = [];
	dropdownRef: HTMLButtonElement;

	constructor(props: P) {
		super(props);
	}

	componentDidMount() {
		if (this.state.noOfInlineIcons > 0) {
			setTimeout(() => {
				this.onColumnResized();
			});
		}
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

		const dropDownValues: Array<React.DetailedHTMLProps<
			React.ButtonHTMLAttributes<HTMLButtonElement>,
			HTMLButtonElement
		>> = [];

		let noOfInlineIcons;
		if (this.state.noOfInlineIcons) {
			noOfInlineIcons = Math.min(this.state.noOfInlineIcons, this.state.actions.length);
		}

		for (let index = 0; index < this.state.actions.length; index++) {
			const action = this.state.actions[index];
			let button: JSX.Element = null;

			const onClick = () => {
				// Prevent lookup opening onclick
				this.props.api.stopEditing();
				action.action(this.props.node.id, this.state.value?.cellValue);
			};

			if (action.icon) {
				if (isStandardIcon(action.icon)) {
					if (index < noOfInlineIcons) {
						button = (
							<CSButton
								label={action.name}
								labelHidden={true}
								key={action.name}
								onClick={onClick}
								disabled={action.disabled}
								color={action.color}
								size={action.size}
								btnType={action.btnType}
								btnStyle={action.btnStyle}
								iconName={action.icon.iconName}
								iconColor={action.icon.color}
								iconOrigin={action.icon.iconOrigin}
								ref={(ref: HTMLButtonElement) => (this.buttonRefs[index] = ref)}
								id={`icon-item-${this.props.node.id}-${colId}-${index}`}
							/>
						);
					}

					dropDownValues.push(
						<CSButton
							label={action.name}
							key={action.name}
							onClick={onClick}
							disabled={action.disabled}
							color={action.color}
							size={action.size}
							btnType={action.btnType}
							btnStyle={action.btnStyle}
							iconName={action.icon.iconName}
							iconColor={action.icon.color ? action.icon.color : null}
							iconOrigin={action.icon.iconOrigin}
							ref={(ref: HTMLButtonElement) => (this.dropdownBtnRef[index] = ref)}
							id={`row-selection-list-item-${action.name}`}
						/>
					);
				} else {
					if (index < noOfInlineIcons) {
						button = (
							<CSButton
								label={action.name}
								labelHidden={true}
								title={action.name}
								key={action.name}
								onClick={onClick}
								disabled={action.disabled}
								color={action.color}
								size={action.size}
								btnType={action.btnType}
								btnStyle={action.btnStyle}
								ref={(ref: HTMLButtonElement) => (this.buttonRefs[index] = ref)}
								id={`icon-item-${this.props.node.id}-${colId}-${index}`}
							>
								{action.icon}
							</CSButton>
						);
					}

					dropDownValues.push(
						<CSButton
							label={action.name}
							labelHidden={true}
							key={action.name}
							onClick={onClick}
							disabled={action.disabled}
							color={action.color}
							size={action.size}
							btnType={action.btnType}
							btnStyle={action.btnStyle}
							ref={(ref: HTMLButtonElement) => (this.dropdownBtnRef[index] = ref)}
							id={`row-selection-list-item-${action.name}`}
						>
							{action.icon}
							{action.name}
						</CSButton>
					);
				}
			} else {
				if (index < noOfInlineIcons) {
					button = (
						<CSButton
							label={action.name}
							labelHidden={true}
							key={action.name}
							onClick={onClick}
							disabled={action.disabled}
							color={action.color}
							size={action.size}
							btnType={action.btnType}
							btnStyle={action.btnStyle}
							iconName='connected_apps'
							ref={(ref: HTMLButtonElement) => (this.buttonRefs[index] = ref)}
							id={`icon-item-${this.props.node.id}-${colId}-${index}`}
						/>
					);
				}

				dropDownValues.push(
					<CSButton
						label={action.name}
						key={action.name}
						onClick={onClick}
						ref={(ref: HTMLButtonElement) => (this.dropdownBtnRef[index] = ref)}
						disabled={action.disabled}
						color={action.color}
						size={action.size}
						btnType={action.btnType}
						btnStyle={action.btnStyle}
						id={`row-selection-list-item-${action.name}`}
					/>
				);
			}

			if (action.getTooltip) {
				const actionTooltip = action.getTooltip(this.props.node.id);

				if (index < noOfInlineIcons) {
					icons.push(
						<CSTooltip
							content={actionTooltip.content}
							delayTooltip={actionTooltip.delay}
							variant={actionTooltip.variant}
							position={actionTooltip.position}
							height={actionTooltip.height}
							maxHeight={actionTooltip.maxHeight}
							width={actionTooltip.width}
							maxWidth={actionTooltip.maxWidth}
							padding={actionTooltip.padding}
							stickyOnClick={actionTooltip.stickyOnClick}
						>
							{button}
						</CSTooltip>
					);
				}
			} else {
				if (index < noOfInlineIcons) {
					icons.push(button);
				}
			}
		}

		return (
			<div className='select-wrapper-actions'>
				<CSButtonGroup>
					{icons.length > 0 && icons}
					{this.state.useDropdown && this.state.actions.length > icons.length && (
						<CSDropdown
							mode='button'
							iconName='threedots_vertical'
							onDropdownTabClose={() => this.focusOnNextColumn()}
						>
							{dropDownValues}
						</CSDropdown>
					)}
				</CSButtonGroup>
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
