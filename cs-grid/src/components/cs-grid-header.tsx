import React from 'react';

import { IHeaderParams } from 'ag-grid-community';

/**
 * className? - An optional class added to span surrounding the header title.
 */
interface CSGridHeaderProps extends IHeaderParams {
	className?: string;
}

/**
 * sorted - the current order of the column.
 * filtered - a flag that determines whether the table has some filtered rows using this column as the filter.
 */
interface CSGridHeaderState {
	sorted: SortOrder;
	filtered: boolean;
}

/**
 * The possible orderings of a column in the grid.
 */
export type SortOrder = 'asc' | 'desc' | '';

/**
 * A custom header class for cs-grid, which manages sorting, column filtering and the column title.
 * Allows custom css for the column header.
 */
export class CSGridHeader extends React.Component<CSGridHeaderProps, CSGridHeaderState> {
	menuButtonRef: React.RefObject<HTMLSpanElement>;

	constructor(props: CSGridHeaderProps) {
		super(props);

		this.menuButtonRef = React.createRef();
		this.props.column.addEventListener('sortChanged', this.onSortChanged);
		this.props.column.addEventListener('filterChanged', this.onFilterChanged);

		const sort: string = props.column.getSort();
		const sorted: SortOrder = sort ? (sort as SortOrder) : '';
		this.state = {
			filtered: this.props.column.isFilterActive(),
			sorted
		};
	}

	componentWillUnmount() {
		this.props.column.removeEventListener('sortChanged', this.onSortChanged);
		this.props.column.removeEventListener('filterChanged', this.onFilterChanged);
	}

	render() {
		let sortElement: React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLSpanElement>,
			HTMLSpanElement
		>;
		if (this.props.enableSorting) {
			const downArrowClass = this.state.sorted === 'desc' ? 'icon-chevrondown' : '';
			const upArrowClass = this.state.sorted === 'asc' ? 'icon-chevronup' : '';

			sortElement = (
				<span
					key={`up${this.props.displayName}`}
					className={`btn-icon ${downArrowClass} ${upArrowClass}`}
					onClick={this.props.enableSorting ? this.onSortRequested : undefined}
				/>
			);
		}

		let menuButton = null;
		if (this.props.enableMenu) {
			menuButton = (
				<span
					ref={this.menuButtonRef}
					className='customHeaderMenuButton'
					onClick={this.onMenuClick}
				>
					<i className='icon-menu' />
				</span>
			);
		}

		return (
			<div className='cs-grid_header-inner'>
				{menuButton}
				{this.state.filtered && (
					<span className='ag-header-icon ag-filter-icon'>
						<span className='ag-icon ag-icon-filter' />
					</span>
				)}
				<span
					onClick={this.props.enableSorting ? this.onSortRequested : undefined}
					className={this.props.className}
				>
					{' '}
					{this.props.displayName}
				</span>
				{sortElement}
			</div>
		);
	}

	/**
	 * Calls ag-grid to order the table using this column to order.
	 */
	onSortRequested = (event: { shiftKey: boolean }) => {
		let newOrder = '';
		if (this.state.sorted === '') {
			newOrder = 'asc';
		} else if (this.state.sorted === 'asc') {
			newOrder = 'desc';
		}
		this.props.setSort(newOrder, event.shiftKey);
	};

	/**
	 * Is called after the grid has been ordered to update the state.
	 */
	onSortChanged = () => {
		if (this.props.column.isSortAscending()) {
			this.setState({
				sorted: 'asc'
			});
		} else if (this.props.column.isSortDescending()) {
			this.setState({
				sorted: 'desc'
			});
		} else {
			this.setState({
				sorted: ''
			});
		}
	};

	/**
	 * Is called after the grid has been column filtered to update the state.
	 */
	onFilterChanged = () => {
		this.setState({
			filtered: this.props.column.isFilterActive()
		});
	};

	/**
	 * Shows the column filter menu.
	 */
	onMenuClick = () => {
		this.props.showColumnMenu(this.menuButtonRef.current);
	};
}
