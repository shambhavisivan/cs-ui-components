export default {
	name: 'Server Side',
	type: 'props',
	data: [
		{
			name: 'fetchOptions',
			link: '/cs-ui/lookup#fetching-options',
			required: true,
			types: '(searchTerm, pageSize, pageNo) => Promise<CSLookupFetchResult>',
			description: 'Set a function which will be called on every search or focus change if the minTermLength prop is 0. The function takes the search term, the page size (which determines the number of returned records) and the page number which will automatically increase on every infiniteScroll event. It returns an object with a records property of the same type as options and a boolean moreRecords property which indicates whether further records can be fetched.'
		}, {
			name: 'pageSize',
			link: '/cs-ui/lookup#pagination',
			required: true,
			types: 'number',
			description: 'Set the number of records that should be returned after each lookup records fetch.'
		}, {
			name: 'infiniteScroll',
			link: '/cs-ui/lookup#pagination',
			types: 'boolean',
			default: 'false',
			description: 'Enable fetching additional records when the dropdown scroll hits the bottom.'
		}, {
			name: 'minTermLength',
			link: '/cs-ui/lookup#server-side-search',
			types: 'number',
			default: '0',
			description: 'Set the minimum number of characters that need to be entered before fetchOptions is fired.'
		}
	]
};
