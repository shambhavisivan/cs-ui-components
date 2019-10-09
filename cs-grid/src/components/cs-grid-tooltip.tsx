import React from 'react';

/**
 * position - Additional class on the cs-tooltip div.
 * helpText - Text displayed within the tooltip.
 * additionalClassnames - additional classes on the outermost HTML element.
 */
export interface CSGridTooltipProps {
	position?: string;
	helpText: string;
	additionalClassnames?: string;
}

/**
 * Creates a tooltip popup with an optional child.
 */
export const CSGridTooltip: React.FunctionComponent<CSGridTooltipProps> = props => {
	return (
		<div
			className={
				'cs-tooltip-group' +
				(props.additionalClassnames ? ' ' + props.additionalClassnames : '')
			}
		>
			{props.children && <span className='cs-tooltip-text'>{props.children}</span>}
			<div className={'cs-tooltip' + (props.position ? ' ' + props.position : '')}>
				{props.helpText}
			</div>
		</div>
	);
};
