import React from 'react';

import { IHeaderParams } from 'ag-grid-community';
import { CSGridSortDirection } from '../interfaces/cs-grid-data-source-api';

/**
 * className? - An optional class added to span surrounding the header title.
 * customSort? - If implemented all sorting will be deferred to the caller.
 */
export interface CSGridHeaderProps extends IHeaderParams {
	className?: string;
	customSort?: (columnId: string, sortDirection: CSGridSortDirection) => Promise<void>;
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

		const sort: string = props.column.getColDef().sort;
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
					title='Column filter'
				>
					<i className='icon-menu' />
				</span>
			);
		}

		return (
			<div className='cs-grid_header-inner'>
				{menuButton}
				{this.state.filtered && (
					<span className='ag-header-icon ag-filter-icon' title='Filtered'>
						<span className='ag-icon ag-icon-filter' />
					</span>
				)}
				<span
					onClick={this.props.enableSorting ? this.onSortRequested : undefined}
					className={this.props.className}
					title={this.props.displayName}
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
	onSortRequested = async (event: { shiftKey: boolean }) => {
		if (this.props.customSort) {
			await this.props.customSort(
				this.props.column.getColId(),
				this.state.sorted === ''
					? 'SORT_ASC'
					: this.state.sorted === 'asc'
					? 'SORT_DESC'
					: 'NONE'
			);

			if (this.state.sorted === '') {
				this.setState({
					sorted: 'asc'
				});
			} else if (this.state.sorted === 'asc') {
				this.setState({
					sorted: 'desc'
				});
			} else {
				this.setState({
					sorted: ''
				});
			}
		} else {
			this.props.setSort(
				this.state.sorted === '' ? 'asc' : this.state.sorted === 'asc' ? 'desc' : '',
				event.shiftKey
			);
		}
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
