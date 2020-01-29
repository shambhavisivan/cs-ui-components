# @cloudsense/cs-table

Very lightweight table component with pagination/quickfilter/row selection support.

## Usage:

### `<CSTable>`

The main table component. Takes an array of column definitions and an array of rows.

    const cols: Array<CSTableColumn> = [
    	{
    		name: 'name',
    		label: 'Name'
    	},
    	{
    		name: 'description',
    		label: 'Item description'
    	}
    };

    const rows: Array<CSTableRow> = [
    	{
    		id: 'item1',
    		data: {
    			values: {
    				name: 'First item',
    				description: 'This is the description of the first item.'
    			}
    		}
    	},
    	{
    		id: 'item2',
    		data: {
    			values: {
    				name: 'First item',
    				description: 'This is the description of the first item.'
    			}
    		}
    	}
    ];

    return <CSTable rows={rows} cols={cols}/>

### `<CSSelectableTable>`

Table component with row selection support. Wraps and enhances an underlying `CSTable` with an extra column of checkboxes.

    const [selectedIds, setSelectedIds] = useState(new Set<string>());
    return <CSSelectableTable cols={...} rows={...} selectedRows={selectedIds} selectionChanged={setSelectedIds}/>;

### `useQuickFilter()`

React hook to be used for quickfilter. Typically needs to be connected up to some kind of input component, a dropdown or an input field.

    const rows = ...;
    const { term, setTerm, filteredRows } = useQuickFilter(rows, (row, t) => {
    	return row.data.values.name.toLowerCase().includes(t.toLowerCase());
    });
    return <>
    	<input type="text" placeholder="Filter by name" value={term} onChange={e => setTerm(e.target.value)} />
    	<CSTable rows={filteredRows} cols={...} />
    </>;

_Note: it is possible to chain multiple quick filters after each other for the same data, in this case the `filteredRows` output of one hook should be the input of the next filter hook._

### `usePagination()` / `useArrayPagination()`

React hooks used for pagination. They feed into a `<CSTablePaginationControls>` and `<CSTable>` (or `<CSSelectableTable>`) component.

    const rows = ...;
    const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(10, rows);
    return <>
    	<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
    	<CSTable rows={pageContents} cols={...} />
    </>;

When used in conjunction with quickfilter, it should be chained **after** the filter, otherwise the result is pages of different lengths.

    const rows = ...;
    const { term, setTerm, filteredRows } = useQuickFilter(rows);
    const { pageContents, currentPage, lastPage, setCurrentPage } = useArrayPagination(10, filteredRows);
    return <>
    	<input type="text" placeholder="Quickfilter..." value={term} onChange={e => setTerm(e.target.value)} />
    	<CSTablePaginationControls currentPage={currentPage} lastPage={lastPage} changePage={setCurrentPage} />
    	<CSTable rows={pageContents} cols={...} />
    </>;

### `CSTableUtils.applyLabelValuesToColumnDescriptors()`

Utility function to transform a list of column descriptors containing label keys to one with localised labels.

    const cols: Array<CSTableColumn> = [
    	{
    		name: 'name',
    		label: 'record_name'
    	},
    	{
    		name: 'description',
    		label: 'record_description'
    	}
    };

    const germanCols = applyLabelValuesToColumnDescriptors(cols, {record_name: 'Nahme', record_description: 'Beschreibung'});

### Styles

The table components and the pagination controls come with pre-packaged styles. Use `import '@cloudsense/cs-table/dist/cstable.css';` to import them.

## Scripts:

-   `npm test`: run all tests
-   `npm run build`: compile and package source into the `dist/` folder
-   `npm run storybook`: run local storybook
-   `npm run build-storybook`: compile deployable storybook
-   `npm publish`: publish library to @cloudsense org on npmjs.
-   `npm watch`: continuous typescript checking of code as you write it.

## Publishing a new version:

0. Make sure you've got an npmjs account authorised to publish into the @cloudsense NPM org. (See [here](https://docs.google.com/document/d/1UjmJIR74ag0yWQ_IO39aQBPNYMacfi6E5b6FgVYl-OA/edit).)
1. Upgrade package version in `package.json`.
1. Run `npm run build` to package everything up.
1. Run `npm test` to make sure everything still works.
1. Run `npm publish` to publish your package. (You can publish beta (or alpha) versions via `npm publish --tag beta` (or alpha), and to try them out in another project, you can install them via `npm install @cloudsense/cs-table@beta`)
