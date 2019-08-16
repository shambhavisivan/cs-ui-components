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
		<div className="cs-grid_quick-filter-wrapper">
			<div className="cs-grid_quick-filter">
				<svg className="cs-grid_search-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
					<path d="M13.02 11.84L9.38 8.22c.75-1.03 1.12-2.35.92-3.75C9.97 2.11 8.06.25 5.67.03 2.44-.3-.3 2.44.03 5.69c.22 2.35 2.09 4.3 4.43 4.63 1.4.2 2.7-.2 3.75-.92l3.64 3.64c.15.15.42.15.57 0l.58-.57c.18-.19.18-.46.02-.63zM1.65 5.16c0-1.93 1.58-3.53 3.53-3.53s3.53 1.58 3.53 3.53S7.14 8.7 5.19 8.7 1.65 7.14 1.65 5.16z" fill="#b0adab"/>
				</svg>
				<input className="cs-grid_quick-filter-input"
					type='text'
					value={props.filterText ? props.filterText : ''}
					onChange={props.onFilterText}
					placeholder={props.placeholder || 'Quick search'}
				/>

				{/* Clear Button needs to appear when input value is not empty.
				It also needs to clear the input field and return it's value to empty when clicked.
				In doing so it returns the buttons display property to none. */}
				<button className="cs-grid_clear-button">
					<svg className="cs-grid_clear-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 52 52">
						<path d="m31 25.4l13-13.1c0.6-0.6 0.6-1.5 0-2.1l-2-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.1-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13-13.1c-0.4-0.4-0.4-1 0-1.4z"/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default CSGridQuickFilter;
