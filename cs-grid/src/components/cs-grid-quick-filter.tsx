import { CSInputSearch, CSTooltip } from '@cloudsense/cs-ui-components';
import React from 'react';
import { CSGridControl } from '../interfaces/cs-grid-base-interfaces';

export interface CSGridQuickFilterControl extends CSGridControl {
	nonIncremental?: boolean;
}

interface CSGridQuickFilterProps {
	filterText: string;
	errorMessage?: string;
	onFilterText(filterText: string): void;
}

export function CSGridQuickFilter(props: CSGridQuickFilterProps) {
	const placeholder = 'Quick search';

	const onFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
		props.onFilterText(event.target.value);
	};

	return (
		<div className='cs-grid_quick-filter-wrapper'>
			<div className='cs-grid_quick-filter'>
				<CSInputSearch
					label={placeholder}
					labelHidden={true}
					value={props.filterText ? props.filterText : ''}
					title={props.filterText ? `Search value ${props.filterText}` : placeholder}
					onChange={onFilter}
					placeholder={placeholder}
					error={props.errorMessage ? true : false}
					errorMessage={props.errorMessage}
				/>
			</div>
		</div>
	);
}
