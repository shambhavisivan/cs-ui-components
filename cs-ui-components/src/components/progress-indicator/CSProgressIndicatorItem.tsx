import React from 'react';
import classNames from 'classnames';
import CSIcon from '../CSIcon';

export type CSProgressIndicatorItemStatus = 'complete' | 'active' | 'incomplete' | 'error';

export interface CSProgressIndicatorItemProps {
	[key: string]: any;
	className?: string;
	id?: string;
	status?: CSProgressIndicatorItemStatus;
	text: string;
}

class CSProgressIndicatorItem extends React.Component<CSProgressIndicatorItemProps> {

	public static defaultProps = {
		status: 'incomplete'
	};

	render() {
		const {
			className,
			id,
			status,
			text,
			...rest
		} = this.props;

		const progressIndicatorItemClasses = classNames(
			'cs-progress-indicator-item', {
			[`cs-progress-indicator-item-${status}`]: status,
			[`${className}`]: className
		});

		return (
			<li
				className={progressIndicatorItemClasses}
				id={id}
				{...rest}
			>
				<button className="cs-progress-indicator-marker">
					{status === 'complete' ?
						(<CSIcon name="check" size="0.5rem" color="#fff" />) :
						status === 'error' ?
							(<CSIcon name="error" size="0.75rem" color="#c23934" />) :
							''
					}
				</button>
				<span className="cs-progress-indicator-text">
					{text}
				</span>
			</li>
		);
	}
}

export default CSProgressIndicatorItem;
