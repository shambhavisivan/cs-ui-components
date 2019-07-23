import React from 'react';

import { IHeaderParams } from 'ag-grid-community';

interface CSGridHeaderProps extends IHeaderParams {
	className?: string;
}

interface CSGridHeaderState {
	sorted: SortOrder;
}

export enum SortOrder {
	Ascending = 'asc',
	Descending = 'desc',
	None = ''
}

/**
 * Allows custom css for the column header and enables the use of display name keys.
 *
 * TODO Implement something to show if a column has been filtered.
 */
export default class CSGridHeader extends React.Component<CSGridHeaderProps, CSGridHeaderState> {
	menuButtonRef: React.RefObject<HTMLSpanElement>;

	constructor(props: CSGridHeaderProps) {
		super(props);

		this.menuButtonRef = React.createRef();
		this.props.column.addEventListener('sortChanged', this.onSortChanged);

		const sort: string = props.column.getSort();
		const sorted: SortOrder = sort ? (sort as SortOrder) : SortOrder.None;
		this.state = {
			sorted
		};
	}

	componentWillUnmount() {
		this.props.column.removeEventListener('sortChanged', this.onSortChanged);
	}

	render() {
		let sortElement: React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLSpanElement>,
			HTMLSpanElement
		>;
		if (this.props.enableSorting) {
			const downArrowClass =
				this.state.sorted === SortOrder.Descending ? 'icon-chevrondown' : '';
			const upArrowClass = this.state.sorted === SortOrder.Ascending ? 'icon-chevronup' : '';

			sortElement = (
				<span
					key={`up${this.props.displayName}`}
					className={`btn-icon ${downArrowClass} ${upArrowClass}`}
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
					<i className='icon-left' />
				</span>
			);
		}

		return (
			<div style={{ width: '100%' }}>
				{menuButton}
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

	onSortRequested = (event: { shiftKey: boolean }) => {
		let newOrder = SortOrder.None;
		if (this.state.sorted === SortOrder.None) {
			newOrder = SortOrder.Ascending;
		} else if (this.state.sorted === SortOrder.Ascending) {
			newOrder = SortOrder.Descending;
		}
		this.props.setSort(newOrder, event.shiftKey);
	};

	onSortChanged = () => {
		if (this.props.column.isSortAscending()) {
			this.setState({
				sorted: SortOrder.Ascending
			});
		} else if (this.props.column.isSortDescending()) {
			this.setState({
				sorted: SortOrder.Descending
			});
		} else {
			this.setState({
				sorted: SortOrder.None
			});
		}
	};

	onMenuClick = () => {
		this.props.showColumnMenu(this.menuButtonRef.current);
	};
}
