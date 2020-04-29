import React from 'react';
import PropTypes from 'prop-types';

export interface CSPaginationProps {
	initialPage?: number;
	items?: any;
}

const propTypes = {
	items: PropTypes.array.isRequired,
	onChangePage: PropTypes.func.isRequired,
	initialPage: PropTypes.number,
	pageSize: PropTypes.number
};

const defaultProps = {
	initialPage: 1,
	pageSize: 10
};

class CSPagination extends React.Component<CSPaginationProps> {
	constructor(props: CSPaginationProps) {
		super(props);
		// this.state = { pager: {} };
	}

	// componentWillMount() {
	// 	// set page if items array isn't empty
	// 	if (this.props.items && this.props.items.length) {
	// 		this.setPage(this.props.initialPage);
	// 	}
	// }
	//
	// componentDidUpdate(prevProps, prevState) {
	// 	// reset page if items array has changed
	// 	if (this.props.items !== prevProps.items) {
	// 		this.setPage(this.props.initialPage);
	// 	}
	// }
	//
	// setPage(page) {
	// 	var { items, pageSize } = this.props;
	// 	var pager = this.state.pager;
	//
	// 	if (page < 1 || page > pager.totalPages) {
	// 		return;
	// 	}
	//
	// 	// get new pager object for specified page
	// 	pager = this.getPager(items.length, page, pageSize);
	//
	// 	// get new page of items from items array
	// 	var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
	//
	// 	// update state
	// 	this.setState({ pager: pager });
	//
	// 	// call change page function in parent component
	// 	this.props.onChangePage(pageOfItems);
	// }
	//
	// getPager(totalItems, currentPage, pageSize) {
	// 	// default to first page
	// 	currentPage = currentPage || 1;
	//
	// 	// default page size is 10
	// 	pageSize = pageSize || 10;
	//
	// 	// calculate total pages
	// 	var totalPages = Math.ceil(totalItems / pageSize);
	//
	// 	var startPage, endPage;
	// 	if (totalPages <= 5) {
	// 		// less than 10 total pages so show all
	// 		startPage = 1;
	// 		endPage = totalPages;
	// 	} else {
	// 		// more than 10 total pages so calculate start and end pages
	// 		if (currentPage <= 3) {
	// 			startPage = 1;
	// 			endPage = 5;
	// 		} else if (currentPage + 2 >= totalPages) {
	// 			startPage = totalPages - 4;
	// 			endPage = totalPages;
	// 		} else {
	// 			startPage = currentPage - 2;
	// 			endPage = currentPage + 2;
	// 		}
	// 	}
	//
	// 	// calculate start and end item indexes
	// 	var startIndex = (currentPage - 1) * pageSize;
	// 	var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
	//
	// 	// create an array of pages to ng-repeat in the pager control
	// 	var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);
	//
	// 	// return object with all pager properties required by the view
	// 	return {
	// 		totalItems: totalItems,
	// 		currentPage: currentPage,
	// 		pageSize: pageSize,
	// 		totalPages: totalPages,
	// 		startPage: startPage,
	// 		endPage: endPage,
	// 		startIndex: startIndex,
	// 		endIndex: endIndex,
	// 		pages: pages
	// 	};
	// }

	render() {
		// var pager = this.state.pager;
		//
		// if (!pager.pages || pager.pages.length <= 1) {
		// 	// don't display pager if there is only 1 page
		// 	return null;
		// }

		return (
			<nav aria-label="pagination navigation">
				<ul className="cs-pagination">
					{/*
					<li className={pager.currentPage === 1 ? 'disabled' : ''} aria-disabled={pager.currentPage === 1}>
						<a href="javascript:;" aria-label="previous page" onClick={() => this.setPage(pager.currentPage - 1)}>
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 52 52">
								<path fill="#0070d2" d="m38 8.3v35.4c0 1-1.3 1.7-2.2 0.9l-21.2-17.3c-0.8-0.6-0.8-1.9 0-2.5l21.2-17.5c0.9-0.7 2.2-0.1 2.2 1z"></path>
							</svg>
						</a>
					</li>
					{pager.pages.map((page, index) =>
						<li key={index} className={pager.currentPage === page ? 'active' : ''}>
							<a href="javascript:;" onClick={() => this.setPage(page)} aria-current={pager.currentPage === page}>{page}</a>
						</li>
					)}
					<li className={pager.currentPage === pager.totalPages ? 'disabled' : ''} aria-disabled={pager.currentPage === pager.totalPages}>
						<a href="javascript:;" aria-label="next page" onClick={() => this.setPage(pager.currentPage + 1)}>
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 52 52">
								<path fill="#0070d2" d="m14 43.7v-35.4c0-1 1.3-1.7 2.2-0.9l21.2 17.3c0.8 0.6 0.8 1.9 0 2.5l-21.2 17.5c-0.9 0.7-2.2 0.1-2.2-1z"></path>
							</svg>
						</a>
					</li>
					*/}
					<li>
						<a href="javascript:;" aria-label="previous page">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 52 52">
								<path fill="#0070d2" d="m38 8.3v35.4c0 1-1.3 1.7-2.2 0.9l-21.2-17.3c-0.8-0.6-0.8-1.9 0-2.5l21.2-17.5c0.9-0.7 2.2-0.1 2.2 1z"/>
							</svg>
						</a>
					</li>
						<li>
							<a href="javascript:;">1</a>
						</li>
					<li>
						<a href="javascript:;" aria-label="next page">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 52 52">
								<path fill="#0070d2" d="m14 43.7v-35.4c0-1 1.3-1.7 2.2-0.9l21.2 17.3c0.8 0.6 0.8 1.9 0 2.5l-21.2 17.5c-0.9 0.7-2.2 0.1-2.2-1z"/>
							</svg>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

// CSPagination.propTypes = propTypes;
// CSPagination.defaultProps = defaultProps;
export default CSPagination;
