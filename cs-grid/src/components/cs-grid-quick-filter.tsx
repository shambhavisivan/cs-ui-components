import React from 'react';

export enum CSGridQuickFilterLocation {
	Header = 'Header',
	Footer = 'Footer',
	Both = 'Both',
	Detached = 'Detached',
	None = 'None'
}

export interface CSGridQuickFilter {
	location: CSGridQuickFilterLocation;
	detachedCSSClass?: string;
}

interface CSGridQuickFilterProps {
	filterText: string;
	placeholder?: string;
	onFilterText(event: React.ChangeEvent<HTMLInputElement>): void;
	clearFilter(): void;
}

export function CSGridQuickFilter(props: CSGridQuickFilterProps) {
	return (
		<div className='cs-grid_quick-filter-wrapper'>
			<div className='cs-grid_quick-filter'>
				<span className='cs-grid_search-icon'/>
				<input
					className='cs-grid_quick-filter-input'
					type='text'
					value={props.filterText ? props.filterText : ''}
					onChange={props.onFilterText}
					placeholder={props.placeholder || 'Quick search'}
				/>
				{props.filterText && (
					<button className='cs-grid_clear-button' onClick={props.clearFilter} />
				)}
			</div>
		</div>
	);
}
