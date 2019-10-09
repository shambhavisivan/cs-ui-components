import React from 'react';
import { CSGridControl } from '../interfaces/cs-grid-base-interfaces';
import { CSGridTooltip } from './cs-grid-tooltip';

export interface CSGridQuickFilterControl extends CSGridControl {
	nonIncremental?: boolean;
}

interface CSGridQuickFilterProps {
	filterText: string;
	errorMessage?: string;
	onFilterText(filterText: string): void;
	search?(): void;
}

export function CSGridQuickFilter(props: CSGridQuickFilterProps) {
	const placeholder = 'Quick search';
	const search = 'Search';

	const clearFilter = (): void => {
		props.onFilterText('');
	};

	const onFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.onFilterText(event.target.value);
	};

	const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter' && props.search) {
			props.search();
		}
	};

	return (
		<div className='cs-grid_quick-filter-wrapper'>
			<div className='cs-grid_quick-filter'>
				<span className='cs-grid_search-icon' />
				<input
					className='cs-grid_quick-filter-input'
					type='text'
					value={props.filterText ? props.filterText : ''}
					title={props.filterText ? `Search value ${props.filterText}` : placeholder}
					onChange={onFilter}
					onKeyDown={handleEnterKey}
					placeholder={placeholder}
				/>
				{props.filterText && (
					<button
						title='Clear filter'
						className='cs-grid_clear-button'
						onClick={clearFilter}
					/>
				)}
			</div>
			{props.search && (
				<div className='cs-grid_quick-filter-search'>
					<div onClick={props.search} title={search}>
						{search}
					</div>
				</div>
			)}
			{props.errorMessage && (
				<CSGridTooltip
					additionalClassnames={'icon-error-wrapper cs-grid_quick-filter-error'}
					helpText={props.errorMessage}
				>
					<span className='icon-error' aria-hidden='true' />
				</CSGridTooltip>
			)}
		</div>
	);
}
