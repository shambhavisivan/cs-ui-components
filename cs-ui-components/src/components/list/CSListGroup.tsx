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
	text: string;
}

export interface CSListGroupState {
	collapsed: boolean;
	selected: boolean;
	selectedItems: Array<number>;
	validItems: Array<number>;
}

class CSListGroup extends React.Component<CSListGroupProps, CSListGroupState> {
	public static defaultProps = {
		collapsible: true,
		checkboxOption: 'select-all',
	};

	constructor(props: CSListGroupProps) {
		super(props);

		this.state = {
			collapsed: false,
			selected: false,
			validItems: [],
			selectedItems: [],
		};
	}

	componentDidMount() {
		const { collapsed } = this.props;

		if (collapsed) {
			this.setState({ collapsed: true });
		}

		this.checkValidItems();
	}

	componentDidUpdate(prevProps: CSListGroupProps) {
		const { collapsed } = this.props;

		if (prevProps.collapsed !== collapsed) {
			this.updateCollapsed();
		}
	}

	toggle = (event?: React.MouseEvent<HTMLDivElement>) => {
		if (event && event.target !== event.currentTarget) {
			return;
		}
		this.setState((prevState) => ({ collapsed: !prevState.collapsed }));
	}

	updateCollapsed = () => {
		const { collapsed } = this.props;
		this.setState({ collapsed });
	}

	checkValidItems = () => {
		const { children } = this.props;

		const validKeys: any = [];
		React.Children.forEach(children, (child: any, index) => {
			if (child && !child.props.disabled) {
				validKeys.push(index);
			}
		});
		this.setState({ validItems: validKeys });
	}

	handleSelect = (key: number) => {
		const { selectedItems } = this.state;

		this.setState({
			selectedItems: (
				selectedItems.includes(key)
					? selectedItems.filter((itemKey) => itemKey !== key)
					: [...selectedItems, key]
			),
		});
	}

	handleSelectAll = () => {
		const { selected, selectedItems, validItems } = this.state;
		const { onSelectChange } = this.props;
		const newSelectedItems = selectedItems.length === validItems.length ? [] : validItems;

		this.setState({
			selected: !selected,
			selectedItems: newSelectedItems,
		});

		if (onSelectChange) {
			onSelectChange();
		}
	}

	handleSelectSelf = () => {
		const { selected } = this.state;
		const { onSelectChange } = this.props;

		this.setState({ selected: !selected });

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
			children,
			collapsible,
			customContent,
			className,
			listSize,
			listVariant,
			id,
			onSelectChange,
			checkboxOption,
			text,
			...rest
		} = this.props;

		const {
			collapsed,
			selected,
			selectedItems,
			validItems,
		} = this.state;

		const listGroupHeaderClasses = classNames(
			'cs-list-group-header',
			{
				[`cs-list-group-header-${listSize}`]: listSize,
				[`cs-list-group-header-${listVariant}`]: listVariant,
				'cs-list-group-header-noncollapsible': !collapsible,
			},
		);

		const listGroupWrapperClasses = classNames(
			'cs-list-group-wrapper',
			{
				[`${className}`]: className,
			},
		);

		const headerIconSize = () => {
			if (listSize === 'large') return '1.125rem';
			if (listSize === 'small') return '0.75rem';
			return undefined; // So that CSIcon can use its default size
		};

		const listItems = React.Children.map(children, (child: any, index) => {
			if (child?.type === CSListItem) {
				return React.cloneElement(child as React.ReactElement<any>, {
					listSize,
					listVariant,
					selected: selectedItems.includes(index),
					checkValidItems: this.checkValidItems,
					selectHandler: this.handleSelect,
					itemKey: index,
					isGrouped: true,
				});
			}

			return null;
		});

		const listHeaderContent = customContent
			&& (
				<div className="cs-list-group-header-custom-content">
					{customContent}
				</div>
			);

		return (
			<li
				id={id}
				className={listGroupWrapperClasses}
				aria-level={1}
				{...rest}
			>
				<h3 className={listGroupHeaderClasses}>
					<div
						role="button"
						tabIndex={0}
						className="cs-list-group-header-inner-wrapper"
						onClick={collapsible ? this.toggle : undefined}
						onKeyDown={collapsible ? (e) => this.handleItemKeyDown(e)
							: undefined}
						aria-expanded={!collapsed}
					>
						{(listVariant === 'check-list'
							&& collapsible
							&& checkboxOption !== 'not-selectable')
							&& (
								<CSCheckbox
									label="select all"
									labelHidden
									onChange={
										checkboxOption === 'select-all'
											? this.handleSelectAll
											: this.handleSelectSelf
									}
									variant="brand"
									checked={checkboxOption === 'select-all'
										? selectedItems.length === validItems.length
										: selected}
								/>
							)}
						{collapsible
							&& (
								<CSIcon
									name="chevronright"
									rotate={collapsed ? 0 : 90}
									size={headerIconSize()}
								/>
							)}
						<span className="cs-list-group-header-text">{text}</span>
						{listHeaderContent}
					</div>
				</h3>
				{!collapsed ? (
					<ul className="cs-list-group" role="group">
						{listItems}
					</ul>
				) : null}
			</li>
		);
	}
}

export default CSListGroup;
