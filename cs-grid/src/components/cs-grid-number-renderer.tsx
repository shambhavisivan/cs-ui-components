import React from 'react';

import { CSTooltip } from '@cloudsense/cs-ui-components';
import { CSGridCellRendererState } from '../interfaces/cs-grid-base-interfaces';
import { CSGridCellRendererProps } from '../interfaces/cs-grid-cell-props';
import { getSeparator } from '../utils/cs-grid-number-formatting-helper';
import { CSGridBaseRenderer } from './cs-grid-base-renderer';
import { CSCustomDataHelper } from './cs-grid-custom-data-helper';

interface CSGridNumberRendererState extends CSGridCellRendererState<number> {
	numberFormat: Intl.NumberFormat;
}

export abstract class CSGridNumberRenderer<
	P extends CSGridCellRendererProps<number>
> extends CSGridBaseRenderer<number, P, CSGridNumberRendererState> {
	constructor(props: P) {
		super(props);

		this.state = {
			isLastColumn: this.isLastColumn(),
			numberFormat: undefined,
			value: this.props.value
		};
	}

	componentDidMount() {
		const numberFormat = this.getNumberFormat();
		this.setState(
			{
				numberFormat
			},
			() => {
				this.refresh(this.props);
			}
		);
	}

	render() {
		if (!this.state.value) {
			return null;
		}

		const value = this.format(this.state.value.cellValue);
		const errorMessage = this.state.value.errorMessage;

		const contents = (
			<CSCustomDataHelper
				getIcons={this.props.getIcons}
				getActions={this.props.getActions}
				nodeId={this.props.node.id}
				api={this.props.api}
				value={value}
				statusMessage={errorMessage}
			/>
		);

		let tooltip;
		if (this.props.getTooltip) {
			tooltip = this.props.getTooltip(this.props.node.id);
		}

		return (
			<span
				onClick={tooltip ? this.startEditingCell : undefined}
				className={`cs-grid_cell-content cs-grid_cell-content-number ${
					this.isReadOnly() ? 'read-only-cell' : ''
				}`}
			>
				{tooltip && !this.state.editing ? (
					<CSTooltip
						className='cs-grid_cell-tooltip'
						content={tooltip.content}
						delayTooltip={tooltip.delay}
						variant={
							tooltip.variant
								? tooltip.variant
								: this.state.value.errorMessage
								? 'error'
								: 'info'
						}
						position={tooltip.position}
						height={tooltip.height}
						width={tooltip.width}
						padding={tooltip.padding}
						maxHeight={tooltip.maxHeight}
						maxWidth={tooltip.maxWidth}
						stickyOnClick={tooltip.stickyOnClick}
					>
						{contents}
					</CSTooltip>
				) : (
					contents
				)}
			</span>
		);
	}

	abstract getNumberFormat(): Intl.NumberFormat;

	private format = (value: number | string): string => {
		if (value === undefined || value === null) {
			return '';
		}

		if (!this.state.numberFormat) {
			return `${value}`;
		}

		let result: number | string = this.state.numberFormat.format(value as any);

		if (typeof value === 'string') {
			let replaced: string;
			const decimalSeparator = getSeparator(this.props.userInfo.userLocale, 'decimal');
			if (decimalSeparator === ',') {
				// remove periods;
				replaced = value.replace(/[\s.]+/g, '');
				// replace remaining comma with a period;
				replaced = replaced.replace(/\,/, '.');
			} else {
				replaced = value.replace(/[\s,]+/g, '');
			}

			result = parseFloat(replaced);
		} else {
			result = value;
		}

		result = this.state.numberFormat.format(result);

		if (result.indexOf('NaN') > -1 || value === '') {
			result = value.toString();
		}

		return result;
	};
}
