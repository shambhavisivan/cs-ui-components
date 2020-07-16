import moment from 'moment';
import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CellData } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
import { formatDate } from '../utils/cs-grid-date-formatting-helper';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSGridCellError } from './cs-grid-cell-error';

/**
 * A cell renderer for displaying a localised date.
 */
export class CSGridDateRenderer extends CSGridBaseRenderer<string> {
	constructor(props: CSGridCellRendererProps<string>) {
		super(props);
		moment.locale(this.props.userInfo.userLocale);

		this.state = { value: this.props.value, isLastColumn: this.isLastColumn() };
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const readOnly = this.isReadOnly();
		const value = formatDate(this.state.value.cellValue, this.props.userInfo.userLocale);

		const contents = (
			<span
				className={'cs-grid_date-cell-value' + (readOnly ? '-read-only' : '')}
				title={value}
			>
				{value}
			</span>
		);
		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span className={readOnly ? 'read-only-cell' : ''}>
				{tooltip ? (
					<CSTooltip content={tooltip.content} delayTooltip={tooltip.delay}>
						{contents}
					</CSTooltip>
				) : (
					contents
				)}
				<CSGridCellError
					errorMessage={this.state.value.errorMessage}
					position={this.state.isLastColumn ? 'top-left' : 'top-right'}
				/>
				{this.state.value.cellValue && !readOnly && (
					<button
						title='Clear Date'
						className='cs-grid_clear-button'
						onClick={this.clearDate}
					/>
				)}
			</span>
		);
	}

	clearDate = async (): Promise<void> => {
		this.props.api.stopEditing();
		let value: CellData<string> = {
			cellValue: '',
			errorMessage: this.props.value.errorMessage
		};

		if (this.props.onChange) {
			value = await this.props.onChange(this.props.node.id, this.props.value.cellValue, '');
		}

		this.props.setValue(value);
	};
}
