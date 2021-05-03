import React from 'react';
import classNames from 'classnames';
import CSCheckbox from '../CSCheckbox';
import KeyCode from '../../util/KeyCode';

export interface CSListItemProps {
	[key: string]: any;
	className?: string;
	customContent?: React.ReactNode;
	disabled?: boolean;
	id?: string;
	onSelectChange?: (value?: any) => any;
	selected?: boolean;
	text?: string;
}

class CSListItem extends React.Component<CSListItemProps> {

	componentDidUpdate(prevProps: CSListItemProps) {
		if (prevProps.disabled !== this.props.disabled) {
			this.props.checkValidItems();
		}
	}

	handleSelect = () => {
		const { itemKey, onSelectChange, selectHandler } = this.props;
		if (selectHandler) {
			selectHandler(itemKey);
		}
		if (onSelectChange) {
			onSelectChange();
		}
	}

	handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const { onSelectChange } = this.props;
		if (e.key === KeyCode.Enter || e.key === KeyCode.Space) {
			if (onSelectChange) {
				onSelectChange();
			}
			e.preventDefault();
		}
	}

	render() {
		const {
			checkValidItems,
			className,
			customContent,
			disabled,
			id,
			itemKey,
			listSize,
			listVariant,
			onSelectChange,
			selectHandler,
			selected,
			text,
			...rest
		} = this.props;

		const listItemWrapperClasses = classNames(
			'cs-list-item-wrapper',
			{
				[`${className}`]: className
			}
		);

		const listItemClasses = classNames(
			'cs-list-item',
			{
				'cs-list-item-selected': selected && listVariant === 'simple-list',
				'cs-list-item-disabled': disabled,
				[`cs-list-item-${listSize}`]: listSize,
				[`cs-list-item-${listVariant}`]: listVariant
			}
		);

		const listItemText = <span className="cs-list-item-text">{text}</span>;
		const listItemContent = customContent &&
			<div className="cs-list-item-custom-content">{customContent}</div>;

		return (
			<li className={listItemWrapperClasses} role="none" id={id} {...rest}>
				{listVariant === 'simple-list' ?
					<div
						className={listItemClasses}
						onClick={onSelectChange}
						aria-selected={selected}
						role="button"
						tabIndex={disabled ? -1 : 0}
						onKeyDown={this.handleKeyDown}
					>
						{listItemText}
						{listItemContent}
					</div> :
					<div className={listItemClasses}>
						<label className="cs-list-item-check-list-group">
							<CSCheckbox
								label="list item"
								labelHidden
								variant="brand"
								onChange={this.handleSelect}
								checked={selected}
								disabled={disabled}
							/>
							{listItemText}
						</label>
						{listItemContent}
					</div>
				}
			</li>
		);
	}
}

export default CSListItem;
