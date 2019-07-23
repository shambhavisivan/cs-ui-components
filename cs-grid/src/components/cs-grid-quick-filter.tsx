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
}

const CSGridQuickFilter: React.FC<CSGridQuickFilterProps> = props => {
	return (
		<div
			style={{
				display: 'inline-block',
				marginBottom: 10,
				marginTop: 10,
				width: '100%'
			}}
		>
			<div style={{ float: 'right', marginLeft: 20, paddingRight: '2rem' }}>
				<label htmlFor='filter'>Quick Filter:&nbsp;</label>
				<input
					type='text'
					value={props.filterText ? props.filterText : ''}
					onChange={props.onFilterText}
					placeholder={props.placeholder || 'Filter text for local data'}
				/>
			</div>
		</div>
	);
};

export default CSGridQuickFilter;
