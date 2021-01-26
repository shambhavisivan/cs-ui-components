import React from 'react';
import CSIcon from '../CSIcon';
import CSButton from '../CSButton';
import classNames from 'classnames';

export type CSOptionType = 'list-item' | 'selected-item';
export type CSOptionFilterByType = 'itemKey' | 'value';

export interface CSOptionProps {
	[key: string]: any;
	className?: string;
	filterBy?: CSOptionFilterByType;
	id?: string;
	itemKey: string;
	value: string;
}

class CSOption extends React.Component<CSOptionProps> {

	render() {
		const {
			active,
			className,
			filterBy,
			id,
			isMultiSelectItem,
			itemKey,
			onItemDelete,
			onMouseDown,
			onMouseOut,
			onMouseOver,
			selected,
			type,
			value,
			...rest
		} = this.props;

		const optionClasses = classNames(
			'cs-option',
			{
				'cs-option-ms-item-selected': type === 'selected-item',
				'cs-option-list-item-selected': type === 'list-item' && !isMultiSelectItem && selected,
				'cs-option-active': active,
				[`${className}`]: className
			}
		);

		return (
			<li
				className={optionClasses}
				onMouseDown={onMouseDown}
				onMouseOver={onMouseOver}
				onMouseOut={onMouseOut}
				{...rest}
				id={id}
			>
				{(type === 'list-item' && isMultiSelectItem) &&
					<span className="cs-option-check-icon">
						{selected &&
							<CSIcon
								name="check"
								color="var(--cs-option-list-item-fill)"
							/>
						}
					</span>
				}
				<span className="cs-option-value">
					{value}
				</span>
				{type === 'selected-item' &&
					<CSButton
						btnType="transparent"
						iconColor="var(--cs-option-ms-item-selected-delete)"
						iconDisplay="icon-only"
						iconName="close"
						label="delete selected item"
						onMouseDown={onItemDelete}
						onKeyDown={onItemDelete}
						size="xsmall"
						ariaLabel={`option ${value}`}
					/>
				}
			</li>
		);
	}
}

export default CSOption;
