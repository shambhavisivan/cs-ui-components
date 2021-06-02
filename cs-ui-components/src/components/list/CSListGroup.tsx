import React from 'react';
import classNames from 'classnames';
import CSCheckbox from '../CSCheckbox';
import CSIcon from '../CSIcon';
import CSListItem from './CSListItem';
import KeyCode from '../../util/KeyCode';

export type CSListGroupCheckboxOption = 'select-all' | 'select-self' | 'not-selectable';

export interface CSListGroupProps {
	[key: string]: any;
	className?: string;
	collapsible?: boolean;
	customContent?: React.ReactNode;
	id?: string;
	onSelectChange?: (value?: any) => any;
	checkboxOption?: CSListGroupCheckboxOption;
	title: string;
}

export interface CSListGroupState {
	collapsed: boolean;
	selectedItems: Array<number>;
	validItems: Array<number>;
}

class CSListGroup extends React.Component<CSListGroupProps, CSListGroupState> {

	public static defaultProps = {
		collapsible: true,
		checkboxOption: 'select-all'
	};

	constructor(props: CSListGroupProps) {
		super(props);

		this.state = {
			collapsed: false,
			validItems: [],
			selectedItems: []
		};
	}

	componentDidMount() {
		if (this.props.collapsed) {
			this.setState({ collapsed: true });
		}
		this.checkValidItems();
	}

	componentDidUpdate(prevProps: CSListGroupProps) {
		if (prevProps.collapsed !== this.props.collapsed) {
			this.setState({ collapsed: this.props.collapsed });
		}
	}

	toggle = (event?: React.MouseEvent<HTMLDivElement>) => {
		if (event && event.target !== event.currentTarget) {
			return;
		}
		this.setState({ collapsed: !this.state.collapsed });
	}

	checkValidItems = () => {
		const validKeys: any = [];
		React.Children.forEach(this.props.children, (child: any, index) => {
			if (child && !child.props.disabled) {
				validKeys.push(index);
			}
		});
		this.setState({ validItems: validKeys });
	}

	handleSelect = (key: number) => {
		const { selectedItems } = this.state;
		let _selectedItems: Array<number> = [];

		_selectedItems = selectedItems.includes(key) ?
			selectedItems.filter(itemKey => itemKey !== key) :
			[...selectedItems, key];

		this.setState({ selectedItems: _selectedItems });
	}

	handleSelectAll = () => {
		const { selectedItems, validItems } = this.state;
		const { onSelectChange } = this.props;
		const _selectedItems = selectedItems.length === validItems.length ? [] : validItems;

		this.setState({ selectedItems: _selectedItems });

		if (onSelectChange) {
			onSelectChange();
		}
	}

	handleItemKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			if (e.key === KeyCode.Enter || e.key === KeyCode.Space) {
				this.toggle();
				e.preventDefault();
			}
		}
	}

	render() {
		const {
			collapsible,
			customContent,
			className,
			listSize,
			listVariant,
			id,
			onSelectChange,
			checkboxOption,
			title,
			...rest
		} = this.props;

		const {
			collapsed,
			selectedItems,
			validItems
		} = this.state;

		const listGroupHeaderClasses = classNames(
			'cs-list-group-header',
			{
				[`cs-list-group-header-${listSize}`]: listSize,
				[`cs-list-group-header-${listVariant}`]: listVariant,
				'cs-list-group-header-noncollapsible': !collapsible
			}
		);

		const listGroupWrapperClasses = classNames(
			'cs-list-group-wrapper',
			{
				[`${className}`]: className
			}
		);

		const headerIconSize = () => {
			switch (listSize) {
				case 'large':
					return '1.125rem';
				case 'small':
					return '0.75rem';
				default:
					return;
			}
		};

		const listItems = React.Children.map(this.props.children, (child: any, index) => {
			if (child && child.type === CSListItem) {
				return React.cloneElement(child as React.ReactElement<any>, {
					listSize,
					listVariant,
					selected: selectedItems.includes(index),
					checkValidItems: this.checkValidItems,
					selectHandler: this.handleSelect,
					itemKey: index
				});
			}
		});

		const listHeaderContent = customContent &&
			<div className="cs-list-group-header-custom-content">
				{customContent}
			</div>;

		return (
			<li role="none" id={id} {...rest} className={listGroupWrapperClasses}>
				<h3 className={listGroupHeaderClasses}>
					<div
						role="button"
						tabIndex={0}
						className="cs-list-group-header-inner-wrapper"
						onClick={collapsible ? this.toggle : undefined}
						onKeyDown={collapsible ? e => this.handleItemKeyDown(e) :
							undefined
						}
						aria-expanded={!collapsed}
					>
						{(listVariant === 'check-list' &&
							collapsible &&
							checkboxOption !== 'not-selectable') &&
							<CSCheckbox
								label="select all"
								labelHidden
								onChange={
									checkboxOption === 'select-all' ?
										this.handleSelectAll :
										onSelectChange
								}
								variant="brand"
								checked={checkboxOption === 'select-all' ?
									selectedItems.length === validItems.length :
									undefined
								}
							/>
						}
						{collapsible &&
							<CSIcon
								name="chevronright"
								rotate={collapsed ? 0 : 90}
								size={headerIconSize()}
							/>
						}
						<span className="cs-list-group-header-title">{title}</span>
						{listHeaderContent}
					</div>
				</h3>
				{!collapsed ? (
					<ul className="cs-list-group">
						{listItems}
					</ul>
				) : null}
			</li>
		);
	}
}

export default CSListGroup;
