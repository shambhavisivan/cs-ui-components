import React from 'react';
import CSIcon from '../CSIcon';
import CSButton from '../CSButton';
import classNames from 'classnames';

export type CSOptionType = 'list-item' | 'selected-item';

export interface CSOptionProps {
	active?: boolean;
	isMultiSelectItem ?: boolean;
	onItemDelete?: (event: any) => any;
	onKeyDown?: (e: React.KeyboardEvent<HTMLLIElement>) => any;
	onMouseDown?: (e: React.MouseEvent<HTMLLIElement>) => any;
	onMouseOut?: (e: React.MouseEvent<HTMLLIElement>) => any;
	onMouseOver?: (e: React.MouseEvent<HTMLLIElement>) => any;
	selected?: boolean;
	type: CSOptionType;
	value: string;
}

export interface CSOptionState {
	selected: boolean;
}

class CSOption extends React.Component<CSOptionProps, CSOptionState> {

	constructor(props: CSOptionProps) {
		super(props);
		this.state = {
			selected: this.props.selected
		};
	}

	componentDidUpdate(prevProps: CSOptionProps) {
		if (prevProps.selected !== this.props.selected) {
			this.setState({ selected: this.props.selected });
		}
   	}

	render() {
		const optionClasses = classNames(
			'cs-list-item',
			{
				'cs-selected': this.props.selected,
				'cs-selected-item': this.props.type === 'selected-item',
				'cs-active-item': this.props.active
			}

		);

		const { type, isMultiSelectItem } = this.props;
		const { selected } = this.state;

		return (
			<li
				className={optionClasses}
				onMouseDown={this.props.onMouseDown}
				onKeyDown={this.props.onKeyDown}
				onMouseOver={this.props.onMouseOver}
				onMouseOut={this.props.onMouseOut}
			>
				{(type === 'list-item' && isMultiSelectItem) &&
					<span className="cs-select-check-icon">
						{selected &&
							<CSIcon
								name="check"
								color="var(--cs-custom-select-list-item-fill)"
							/>
						}
					</span>
				}
				<span className="cs-list-item-value">
					{this.props.value}
				</span>
				{type === 'selected-item' &&
					<CSButton
						btnType="transparent"
						iconColor="var(--cs-custom-select-selected-item-delete)"
						iconDisplay="icon-only"
						iconName="close"
						label="delete selected item"
						onMouseDown={this.props.onItemDelete}
						size="xsmall"
					/>
				}
			</li>
		);
	}
}

export default CSOption;
