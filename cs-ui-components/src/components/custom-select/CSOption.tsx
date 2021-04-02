import React from 'react';
import CSIcon from '../CSIcon';
import CSButton from '../CSButton';
import classNames from 'classnames';

export type CSOptionType = 'list-item' | 'selected-item';
export type CSOptionSearchByType = 'itemKey' | 'value';

export interface CSOptionProps {
	[key: string]: any;
	className?: string;
	searchBy?: CSOptionSearchByType;
	id?: string;
	itemKey: string;
	value: string;
}

class CSOption extends React.Component<CSOptionProps> {
	private optionNode: React.RefObject<HTMLLIElement>;
	constructor(props: CSOptionProps) {
		super(props);

		this.optionNode = React.createRef();
	}

	checkInView = () => {
		const dropdownNode = document.getElementById('cs-custom-select-dropdown');

		// CSCustomSelect dropdown top and bottom
		const dropdownTop = dropdownNode.scrollTop;
		const dropdownBottom = dropdownTop + dropdownNode.clientHeight;

		// CSOption top and bottom
		const optionTop = this.optionNode.current.offsetTop;
		const optionBottom = optionTop + this.optionNode.current.clientHeight;

		// Change dropdown scroll top if option is not completely visible
		if (optionTop < dropdownTop) {
			dropdownNode.scrollTop = optionTop;
		} else if (optionBottom > dropdownBottom) {
			dropdownNode.scrollTop += (optionBottom - dropdownBottom);
		}
	}

	componentDidUpdate(prevProps: CSOptionProps) {
		if (prevProps.active !== this.props.active && this.props.active) {
			this.checkInView();
		}
	}

	render() {
		const {
			active,
			className,
			id,
			isMultiSelectItem,
			itemKey,
			onItemDelete,
			onMouseDown,
			onMouseOut,
			onMouseOver,
			searchBy,
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
				id={id}
				ref={this.optionNode}
				{...rest}

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
						iconName="close"
						label="delete selected item"
						labelHidden
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
