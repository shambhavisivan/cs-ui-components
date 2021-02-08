import React from 'react';
import classNames from 'classnames';
import CSIcon from '../CSIcon';

export type CSProgressIndicatorItemStatus = 'complete' | 'active' | 'incomplete' | 'error' | 'loading';

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

		const getIconByStatus = () => {
			switch (status) {
				case 'complete':
					return <CSIcon name="check" size="0.5rem" color="#fff" />;
				case 'error':
					return <CSIcon name="error" size="0.75rem" color="#c23934" />;
				case 'loading':
					return <CSIcon name="spinner" color="#dddbda" spin />;
				default:
					return;
			}
		};

		return (
			<li className={progressIndicatorItemClasses} id={id} {...rest}>
				<button className="cs-progress-indicator-marker" title={status} aria-label={text}>
					{getIconByStatus()}
				</button>
				<span className="cs-progress-indicator-text">
					{text}
				</span>
			</li>
		);
	}
}

export default CSProgressIndicatorItem;
