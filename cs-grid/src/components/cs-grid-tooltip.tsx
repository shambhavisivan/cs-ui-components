import React from 'react';

/**
 * position - Additional class on the cs-tooltip div.
 * icon - Boolean for showing an icon.
 * helpText - Text displayed within the tooltip.
 */
export interface CSGridTooltipProps {
	position?: string;
	icon?: boolean;
	helpText: string;
}

/**
 * Creates a tooltip popup with an optional icon.
 */
export const CSGridTooltip: React.FunctionComponent<CSGridTooltipProps> = props => {
	return (
		<div className='cs-tooltip-group'>
			{props.icon && (
				<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14'>
					<path
						d='M7 0C3.12 0 0 3.12 0 7s3.12 7 7 7 7-3.12 7-7-3.12-7-7-7zm0 3.53c.5 0 .88.38.88.88s-.38.87-.88.87-.88-.38-.88-.88.38-.87.88-.87zm1.46 6.12c0 .15-.12.26-.29.26H5.83c-.15 0-.29-.09-.29-.26v-.58c0-.15.12-.32.29-.32.15 0 .29-.09.29-.26V7.32c0-.15-.11-.32-.29-.32-.14 0-.29-.09-.29-.26v-.59c0-.15.12-.32.29-.32h1.75c.15 0 .29.15.29.32v2.33c0 .15.12.26.29.26.15 0 .29.15.29.32v.59z'
						fill='#706e6b'
					/>
				</svg>
			)}
			{props.children && <span className='cs-tooltip-text'>{props.children}</span>}
			<div className={'cs-tooltip ' + (props.position ? props.position : '')}>
				{props.helpText}
			</div>
		</div>
	);
};
