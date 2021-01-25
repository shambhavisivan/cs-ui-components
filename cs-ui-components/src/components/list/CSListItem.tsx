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
	onSelect?: (value?: any) => any;
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
		const { itemKey, onSelect, selectHandler } = this.props;
		if (selectHandler) {
			selectHandler(itemKey);
		}
		if (onSelect) {
			onSelect();
		}
	}

	handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		const { onSelect } = this.props;
		if (e.key === KeyCode.Enter || e.key === KeyCode.Space) {
			if (onSelect) {
				onSelect();
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
			onSelect,
			selectHandler,
			selected,
			text,
			...rest
		} = this.props;

		const listItemClasses = classNames(
			'cs-list-item', {
			'cs-list-item-selected': selected && listVariant === 'simple-list',
			'cs-list-item-disabled': disabled,
			[`cs-list-item-${listSize}`]: listSize,
			[`cs-list-item-${listVariant}`]: listVariant,
			[`${className}`]: className
		});

		const listItemText = <span className="cs-list-item-text">{text}</span>;
		const listItemContent = customContent &&
			<div className="cs-list-item-custom-content">{customContent}</div>;

		return (
			<li className="cs-list-item-wrapper" role="none" id={id} {...rest}>
				{listVariant === 'simple-list' ?
					<div
						className={listItemClasses}
						onClick={onSelect}
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
